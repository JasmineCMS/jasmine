import {useI18n} from 'vue-i18n';

/** An identifier made readable: `lead_target` and `leadTarget` read "Lead Target", `URL` stays whole. */
const humanize = (s: string) =>
  s
    .split(/[.\-_]|(?<=[a-z0-9])(?=[A-Z])/)
    .filter(Boolean)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');

function buildKeys(id: string, scope: string[]): string[] {
  const n = scope.length;
  const subsets: string[][] = [];

  // every ordered subset of scope (preserving original order)
  for (let mask = (1 << n) - 1; mask >= 0; mask--) {
    const subset: string[] = [];
    for (let i = 0; i < n; i++) if (mask & (1 << i)) subset.push(scope[i]);
    subsets.push(subset);
  }

  // most segments first; ties keep left-to-right order
  subsets.sort((a, b) => b.length - a.length);

  const base = subsets.map((s) => [...s, id].join('.'));

  // manifest tier (all) wins over bare tier (all)
  return [...base.map((k) => `manifest.${k}`), ...base];
}

export function useLabel() {
  const {t, te} = useI18n();

  /**
   * @param id     stable identifier (column.data, action.name, 'plural', …).
   *               May inline scope via dots: 'columns.id' === ('id', 'columns').
   * @param scope  context segments, entity-first: (entity, type).
   */
  return (id: string, ...scope: string[]): string => {
    if (!id) return '';

    /**
     * Text rather than an identifier: a label or a sentence written out in
     * full. Looked up as it stands, and shown as it stands when nothing
     * translates it; its full stops are punctuation, not scope, so one that
     * has any cannot be a key at all.
     */
    if (/\s/.test(id)) {
      const hit = id.includes('.') ? undefined : buildKeys(id, scope).find((k) => te(k));
      return hit ? t(hit) : id;
    }

    if (id.includes('.')) {
      const parts = id.split('.');
      id = parts.pop()!;
      scope = [...scope.filter(Boolean), ...parts];
    }

    const hit = buildKeys(id, scope).find((k) => te(k));
    return hit ? t(hit) : humanize(id);
  };
}
