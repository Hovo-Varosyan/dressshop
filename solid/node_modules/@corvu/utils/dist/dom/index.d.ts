import { JSX } from 'solid-js';
import { E as EventHandlerEvent } from '../types-pua9WoMq.js';
export { a as ElementOf, R as Ref } from '../types-pua9WoMq.js';

/**!
 * Part of this code is taken from and inspired by solid-primitives.
 * MIT License, Copyright (c) Solid Core Team
 *
 * https://github.com/solidjs-community/solid-primitives
 */

declare function combineStyle(a: JSX.CSSProperties, b: JSX.CSSProperties | string | undefined): JSX.CSSProperties | string;
declare const afterPaint: (fn: () => void) => number;
declare const callEventHandler: <T, E extends Event>(eventHandler: JSX.EventHandlerUnion<T, E> | undefined, event: EventHandlerEvent<T, E>) => boolean;
/**
 * Checks whether an element contains another element.
 * Works with SolidJS portals by using their `_$host` property.
 *
 * @param wrapper - The wrapper element that should contain the target element.
 * @param target - The target element.
 * @returns Whether the wrapper contains the target element.
 */
declare const contains: (wrapper: HTMLElement, target: HTMLElement) => boolean;
declare const sortByDocumentPosition: (a: HTMLElement, b: HTMLElement) => 0 | 1 | -1;

export { EventHandlerEvent, afterPaint, callEventHandler, combineStyle, contains, sortByDocumentPosition };
