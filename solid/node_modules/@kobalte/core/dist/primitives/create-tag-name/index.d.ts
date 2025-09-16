import { Accessor, Component } from 'solid-js';

/**
 * Returns the tag name by parsing an element ref.
 * @example
 * function Component(props) {
 *   let ref: HTMLDivElement | undefined;
 *   const tagName = createTagName(() => ref, () => "button"); // div
 *   return <div ref={ref} {...props} />;
 * }
 */
declare function createTagName(ref: Accessor<HTMLElement | undefined>, fallback?: Accessor<string | Component | undefined>): Accessor<string | undefined>;

export { createTagName };
