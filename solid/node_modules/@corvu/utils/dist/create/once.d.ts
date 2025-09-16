import { Accessor } from 'solid-js';

/**
 * Creates a memoized signal when called for the first time.
 * @param fn - Function to memoize.
 * @returns ```typescript
 * () => Accessor<T>
 * ```
 */
declare const createOnce: <T>(fn: () => T) => () => Accessor<T>;

export { createOnce as default };
