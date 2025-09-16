import { Context } from 'solid-js';

/**
 * Creates a keyed context that can be obtained and used with `getKeyedContext` and `useKeyedContext`.
 *
 * @param key - The key of the context.
 * @param defaultValue - The default value of the context.
 * @returns ```typescript
 * Context<T | undefined>
 * ```
 */
declare const createKeyedContext: <T>(key: string, defaultValue?: T) => Context<T | undefined>;
/**
 * Gets a keyed context created with `createKeyedContext`.
 *
 * @param key - The key of the context.
 * @returns ```typescript
 * Context<T | undefined> | undefined
 * ```
 */
declare const getKeyedContext: <T>(key: string) => Context<T | undefined> | undefined;
/**
 * Use a keyed context created with `createKeyedContext` to receive a scoped state from a parent's Context.Provider.
 *
 * @param key - The key of the context.
 * @returns ```typescript
 * T | undefined
 * ```
 */
declare const useKeyedContext: <T>(key: string) => T | undefined;

export { createKeyedContext, getKeyedContext, useKeyedContext };
