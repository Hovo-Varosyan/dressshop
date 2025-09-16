import * as solid_js from 'solid-js';
import { M as MaybeAccessor } from '../types-CfOU1RES.js';

/**
 * Creates a memo which can be registered/unregistered with the returned `register` and `unregister` functions.
 *
 * @param props.value - The value to memoize.
 * @param props.initialRegistered - Whether the value should be registered initially. *Default = `false`*
 * @returns ```typescript
 * [
 *   registerable: Accessor<T | undefined>,
 *   register: () => void,
 *   unregister: () => void
 * ]
 * ```
 * `registerable` is a memoized signal which returns the value if it is registered and `undefined` if it is not.
 */
declare const createRegister: <T>(props: {
    value: MaybeAccessor<T | undefined>;
    initialRegistered?: boolean;
}) => readonly [solid_js.Accessor<T | undefined>, () => void, () => void];

export { createRegister as default };
