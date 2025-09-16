import * as solid_js from 'solid-js';
import { M as MaybeAccessor } from '../types-CfOU1RES.js';

/**
 * Returns a memoized signal with the tag name of the element.
 *
 * @param props.element - The element to get the tag name of.
 * @param props.fallback - The fallback tag name to use if the element is `null`.
 * @returns ```typescript
 * Accessor<string>
 * ```
 */
declare const createTagName: (props: {
    element: MaybeAccessor<HTMLElement | null>;
    fallback: string;
}) => solid_js.Accessor<string>;

export { createTagName as default };
