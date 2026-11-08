// Ships the types a dynamic page sees, so a project gets editor support for its SFC strings without installing
// or compiling anything: projects extend tsconfig.dynamic.json from vendor/, which maps every module a dynamic page
// can import (resources/js/dynamic-modules.ts) to the declaration files copied here into types/.
//
// Starting from those modules it walks the .d.ts import graph, copies only the files it reaches, and maps every
// bare specifier it meets to its exact entry file, so resolution never depends on a node_modules folder.
//
// run: node scripts/dynamic-types.ts (part of `pnpm build`)

import {builtinModules} from 'node:module';
import {cpSync, existsSync, mkdirSync, readFileSync, realpathSync, rmSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, relative, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {lazy, provided} from '../resources/js/dynamic-modules.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'types');
const tsconfigPath = join(root, 'tsconfig.dynamic.json');

// not importable by a page, but jasmine's own declarations (globals.d.ts, lib/Swal) reference them
const typeOnly = ['ziggy-js', 'sweetalert2'];

type Pkg = {dir: string; name: string; version: string; out: string; json: Record<string, any>};

const packages = new Map<string, Pkg>(); // by real dir
const outNames = new Map<string, string>(); // out folder -> real dir
const files = new Map<string, string>(); // real file -> path under types/
const paths = new Map<string, string>(); // specifier -> path under types/
const warnings = new Set<string>();
const queue: {file: string; pkg: Pkg}[] = [];

const isDts = (p: string) => /\.d\.[mc]?ts$/.test(p);
const isFile = (p: string) => statSync(p, {throwIfNoEntry: false})?.isFile() ?? false;
const toPosix = (p: string) => p.split(sep).join('/');

function pkgAt(dir: string): Pkg {
  dir = realpathSync(dir);
  let pkg = packages.get(dir);
  if (pkg) return pkg;

  const json = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'));
  // two versions of one package get their own folders
  let out = json.name;
  if (outNames.has(out) && outNames.get(out) !== dir) out = `${json.name}@${json.version}`;
  outNames.set(out, dir);

  pkg = {dir, name: json.name, version: json.version, out, json};
  packages.set(dir, pkg);
  return pkg;
}

function findPackage(name: string, from: string): Pkg | null {
  for (let dir = from; ; dir = dirname(dir)) {
    if (existsSync(join(dir, 'node_modules', name, 'package.json'))) return pkgAt(join(dir, 'node_modules', name));
    if (dirname(dir) === dir) return null;
  }
}

// a declaration file for a path a package points at, js or not
function dtsFor(abs: string): string | null {
  const js = abs.match(/^(.*)\.([mc]?)js$/);
  const ts = abs.match(/^(.*)\.([mc]?)ts$/);
  const candidates = isDts(abs)
    ? [abs]
    : js
      ? [`${js[1]}.d.${js[2]}ts`, `${js[1]}.d.ts`]
      : ts
        ? [`${ts[1]}.d.${ts[2]}ts`]
        : [`${abs}.d.ts`, `${abs}.d.mts`, join(abs, 'index.d.ts'), join(abs, 'index.d.mts')];

  return candidates.find(isFile) ?? null;
}

const conditions = ['types', 'import', 'default', 'module', 'browser', 'node', 'require'];

function fromTarget(pkg: Pkg, target: unknown, star: string): string | null {
  if (typeof target === 'string') return dtsFor(join(pkg.dir, target.replace(/\*/g, star)));
  if (Array.isArray(target)) {
    for (const t of target) {
      const r = fromTarget(pkg, t, star);
      if (r) return r;
    }
    return null;
  }
  if (target && typeof target === 'object') {
    for (const c of conditions) {
      if (!(c in target)) continue;
      const r = fromTarget(pkg, (target as Record<string, unknown>)[c], star);
      if (r) return r;
    }
  }
  return null;
}

function entryOf(pkg: Pkg, subpath: string): string | null {
  let exports = pkg.json.exports;
  if (exports !== undefined) {
    if (typeof exports === 'string' || Array.isArray(exports) || !Object.keys(exports).some((k) => k.startsWith('.')))
      exports = {'.': exports};

    if (subpath in exports) {
      const r = fromTarget(pkg, exports[subpath], '');
      if (r) return r;
    }
    for (const [key, target] of Object.entries(exports)) {
      const at = key.indexOf('*');
      if (at === -1) continue;
      const [head, tail] = [key.slice(0, at), key.slice(at + 1)];
      if (subpath.startsWith(head) && subpath.endsWith(tail) && subpath.length >= key.length - 1) {
        const r = fromTarget(pkg, target, subpath.slice(head.length, subpath.length - tail.length));
        if (r) return r;
      }
    }
  }

  if (subpath === '.') {
    for (const f of [pkg.json.types, pkg.json.typings, pkg.json.module, pkg.json.main, 'index'])
      if (f) {
        const r = dtsFor(join(pkg.dir, f));
        if (r) return r;
      }
    return null;
  }

  return dtsFor(join(pkg.dir, subpath));
}

function add(file: string, pkg: Pkg): string {
  file = realpathSync(file);
  let out = files.get(file);
  if (out) return out;

  out = `${pkg.out}/${toPosix(relative(pkg.dir, file))}`;
  files.set(file, out);
  queue.push({file, pkg});
  return out;
}

function resolveBare(spec: string, from: string): string | null {
  if (spec.startsWith('node:') || builtinModules.includes(spec)) return null;

  const parts = spec.split('/');
  const name = spec.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0];
  const subpath = spec.length > name.length ? `.${spec.slice(name.length)}` : '.';

  const pkg = findPackage(name, from);
  const entry = pkg && entryOf(pkg, subpath);
  if (pkg && entry) return add(entry, pkg);

  // untyped package: DefinitelyTyped, looked up from the importer and then from jasmine itself
  const typesName = `@types/${name.replace(/^@/, '').replace('/', '__')}`;
  for (const dir of [from, root]) {
    const types = findPackage(typesName, dir);
    const entry = types && entryOf(types, subpath);
    if (types && entry) return add(entry, types);
  }

  return null;
}

function mapSpecifier(spec: string, from: string) {
  if (paths.has(spec)) return;
  const out = resolveBare(spec, from);
  if (out) paths.set(spec, out);
  else warnings.add(`no types for "${spec}" (imported from ${toPosix(relative(root, from))})`);
}

function specifiersOf(source: string) {
  const refs = [...source.matchAll(/^\s*\/\/\/\s*<reference\s+(types|path)\s*=\s*['"]([^'"]+)['"]/gm)].map((m) => ({
    kind: m[1],
    spec: m[2],
  }));

  const code = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:'"])\/\/[^\n]*/g, '$1');
  const specs = [
    ...code.matchAll(/\b(?:import|export)\b[^'";]*?\bfrom\s*['"]([^'"]+)['"]/g),
    ...code.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g),
    ...code.matchAll(/^\s*import\s+['"]([^'"]+)['"]/gm),
    ...code.matchAll(/\brequire\s*\(\s*['"]([^'"]+)['"]\s*\)/g),
  ].map((m) => ({kind: 'import', spec: m[1]}));

  return [...refs, ...specs];
}

function walk() {
  while (queue.length) {
    const {file, pkg} = queue.shift()!;
    const from = dirname(file);

    for (const {kind, spec} of specifiersOf(readFileSync(file, 'utf8'))) {
      if (kind === 'path' || spec.startsWith('.')) {
        const target = dtsFor(resolve(from, spec));
        if (target) add(target, pkg);
        else warnings.add(`unresolved "${spec}" in ${pkg.name}`);
      } else {
        mapSpecifier(spec, from);
      }
    }
  }
}

for (const spec of [...provided, ...Object.keys(lazy), ...typeOnly]) mapSpecifier(spec, root);
walk();

for (const spec of [...provided, ...Object.keys(lazy)])
  if (!paths.has(spec)) throw new Error(`no types found for "${spec}", which dynamic pages can import`);

rmSync(outDir, {recursive: true, force: true});
for (const [file, out] of files) {
  mkdirSync(dirname(join(outDir, out)), {recursive: true});
  cpSync(file, join(outDir, out));
}
// name, version and module type only: resolution goes through the exact paths below, never package.json
for (const pkg of packages.values()) {
  if (![...files.values()].some((f) => f.startsWith(`${pkg.out}/`))) continue;
  const {name, version, type} = pkg.json;
  writeFileSync(join(outDir, pkg.out, 'package.json'), JSON.stringify({name, version, type}, null, 2) + '\n');
}

// what vite gives jasmine's own sources (vite/client, vite-svg-loader), so they check clean when a page imports them
writeFileSync(
  join(outDir, 'env.d.ts'),
  `declare module '*.css';
declare module '*?raw' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  import type {FunctionalComponent, SVGAttributes} from 'vue';
  const component: FunctionalComponent<SVGAttributes>;
  export default component;
}
`,
);

const tsconfig = {
  compilerOptions: {
    target: 'ESNext',
    module: 'ESNext',
    moduleResolution: 'bundler',
    lib: ['ESNext', 'DOM', 'DOM.Iterable'],
    jsx: 'preserve',
    resolveJsonModule: true,
    allowImportingTsExtensions: true,
    skipLibCheck: true,
    noEmit: true,
    // only what is mapped below, nothing from a project's own node_modules/@types
    types: [],
    paths: {
      '@jasmine/js/*': ['./resources/js/*'],
      // jasmine's own sources import each other through @/
      '@/*': ['./resources/*'],
      ...Object.fromEntries(
        [...paths].sort(([a], [b]) => a.localeCompare(b)).map(([spec, out]) => [spec, [`./types/${out}`]]),
      ),
    },
  },
  files: ['./resources/js/globals.d.ts', './types/env.d.ts'],
};

writeFileSync(
  tsconfigPath,
  '// generated by scripts/dynamic-types.ts from resources/js/dynamic-modules.ts, do not edit\n' +
    JSON.stringify(tsconfig, null, 2) +
    '\n',
);

const size = [...files.keys()].reduce((n, f) => n + readFileSync(f).length, 0);
console.log(
  `dynamic types: ${files.size} files from ${
    new Set(
      [...files.values()].map((f) =>
        f
          .split('/')
          .slice(0, f.startsWith('@') ? 2 : 1)
          .join('/'),
      ),
    ).size
  } packages, ${(size / 1024).toFixed(0)} KB, ${paths.size} specifiers`,
);
for (const w of warnings) console.warn(`  ! ${w}`);
