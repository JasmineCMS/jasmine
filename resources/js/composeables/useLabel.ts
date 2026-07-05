import {useI18n} from 'vue-i18n';

const humanize = (s: string) =>
  s
    .split(/[.\-_]|(?=[A-Z])/)
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

    if (id.includes('.')) {
      const parts = id.split('.');
      id = parts.pop()!;
      scope = [...scope.filter(Boolean), ...parts];
    }

    const hit = buildKeys(id, scope).find((k) => te(k));
    return hit ? t(hit) : humanize(id);
  };
}
