import { Accessor } from 'solid-js';
import { M as MaybeAccessor, a as MaybeAccessorValue } from '../types-CfOU1RES.js';

/**!
 * Part of this code is taken from and inspired by solid-primitives.
 * MIT License, Copyright (c) Solid Core Team
 *
 * https://github.com/solidjs-community/solid-primitives
 */

declare const access: <T extends MaybeAccessor<unknown>>(v: T) => MaybeAccessorValue<T>;
declare const chain: <Args extends [] | unknown[]>(callbacks: {
    [Symbol.iterator]: () => IterableIterator<((...args: Args) => unknown) | undefined>;
}) => ((...args: Args) => void);
declare const mergeRefs: <T>(...refs: (T | ((val: T) => void) | undefined)[]) => ((el: T) => void);
declare const some: (...signals: Accessor<unknown>[]) => boolean;

export { MaybeAccessor, MaybeAccessorValue, access, chain, mergeRefs, some };
