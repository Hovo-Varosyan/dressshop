export { A as Axis, S as Side, a as Size } from './types-DjuvUwDr.js';

/**!
 * Original code for "isButton" by Ariakit.
 * MIT License, Copyright (c) Diego Haz
 *
 * https://github.com/ariakit/ariakit/blob/b26cdee02011d2a6b4b544a80842a6fa4ae9e7c5/packages/ariakit-core/src/utils/dom.ts#L90
 */
declare const isFunction: <T extends Function = Function>(value: unknown) => value is T;
declare const isButton: (tagName: string, type?: string) => boolean;
declare const dataIf: (condition: boolean) => "" | undefined;

export { dataIf, isButton, isFunction };
