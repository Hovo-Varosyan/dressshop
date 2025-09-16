import { A as Axis } from '../types-DjuvUwDr.js';

/**
 * Returns the total scroll available at the given location.
 *
 * @param location - The HTMLElement to check.
 * @param axis - The axis to check for.
 * @param stopAt - The HTMLElement to stop at when searching up the tree for scrollable elements. Defaults to the body element. Works with SolidJS portals by using their `_$host` property.
 * @returns The total scroll available at the given location. `[availableScroll, availableScrollTop]`
 */
declare const getScrollAtLocation: (location: HTMLElement, axis: Axis, stopAt?: HTMLElement) => [number, number];

export { getScrollAtLocation };
