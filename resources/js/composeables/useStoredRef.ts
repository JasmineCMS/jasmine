import {ref, watch, type Ref} from 'vue';

const read = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
};

// A ref whose value is mirrored to localStorage under `key` (JSON-encoded).
export function useStoredRef<T>(key: string, fallback: T): Ref<T> {
  const state = ref(read(key, fallback)) as Ref<T>;

  watch(
    state,
    (v) => {
      try {
        localStorage.setItem(key, JSON.stringify(v));
      } catch {
        // storage unavailable (private mode, quota) — keep in-memory state only
      }
    },
    {deep: true},
  );

  return state;
}
