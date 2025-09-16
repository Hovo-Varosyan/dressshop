import { Accessor, JSX, ValidComponent, ComponentProps } from 'solid-js';
export { createEventListener } from '@solid-primitives/event-listener';
export { Key } from '@solid-primitives/keyed';
export { ReactiveMap } from '@solid-primitives/map';
export { createMediaQuery } from '@solid-primitives/media';
export { combineProps } from '@solid-primitives/props';
export { mergeRefs } from '@solid-primitives/refs';
export { MaybeAccessor, access, accessWith, chain } from '@solid-primitives/utils';

/**
 * Immutably adds an item at the given index to an array.
 */
declare function addItemToArray<T extends any[]>(array: T, item: T[number], index?: number): T;
/**
 * Immutably removes an item from an array.
 */
declare function removeItemFromArray<T>(array: T[], item: T): T[];

declare function isNumber(value: unknown): value is number;
declare function isArray<T>(value: unknown): value is Array<T>;
declare function isString(value: unknown): value is string;
declare function isFunction<T extends Function = Function>(value: unknown): value is T;

/**
 * Create a function that generate an id from a `baseId` and `suffix`.
 */
declare function createGenerateId(baseId: Accessor<string>): (suffix: string) => string;

interface GlobalListeners {
    addGlobalListener<K extends keyof DocumentEventMap>(el: EventTarget, type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addGlobalListener(el: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeGlobalListener<K extends keyof DocumentEventMap>(el: EventTarget, type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeGlobalListener(el: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    removeAllGlobalListeners(): void;
}
declare function createGlobalListeners(): GlobalListeners;

/**
 * Similar to `Element.prototype.contains`, but a little faster when `element` is the same as `child`.
 */
declare function contains(parent: Node | undefined, child: Node | null): boolean;
/**
 * Returns `element.ownerDocument.activeElement`.
 */
declare function getActiveElement(node?: Node | null, activeDescendant?: boolean): HTMLElement | null;
/**
 * Returns `element.ownerDocument.defaultView || window`.
 */
declare function getWindow(node?: Node | null): Window;
/**
 * Returns `element.ownerDocument || document`.
 */
declare function getDocument(node?: Node | null): Document;
/**
 * Checks whether `element` is a frame element.
 */
declare function isFrame(element: Element): element is HTMLIFrameElement;

declare enum EventKey {
    Escape = "Escape",
    Enter = "Enter",
    Tab = "Tab",
    Space = " ",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowUp = "ArrowUp",
    End = "End",
    Home = "Home",
    PageDown = "PageDown",
    PageUp = "PageUp"
}

/** Call a JSX.EventHandlerUnion with the event. */
declare function callHandler<T, E extends Event>(event: E & {
    currentTarget: T;
    target: Element;
}, handler: JSX.EventHandlerUnion<T, E> | undefined): boolean;
/** Create a new event handler which calls all given handlers in the order they were chained with the same event. */
declare function composeEventHandlers<T>(handlers: Array<JSX.EventHandlerUnion<T, any> | undefined>): (event: any) => void;
declare function isCtrlKey(e: Pick<KeyboardEvent, "ctrlKey" | "metaKey">): boolean;

interface FocusManager {
    /** Moves focus to the next focusable or tabbable element in the focus scope. */
    focusNext(opts?: FocusManagerOptions): HTMLElement | undefined;
    /** Moves focus to the previous focusable or tabbable element in the focus scope. */
    focusPrevious(opts?: FocusManagerOptions): HTMLElement | undefined;
    /** Moves focus to the first focusable or tabbable element in the focus scope. */
    focusFirst(opts?: FocusManagerOptions): HTMLElement | undefined;
    /** Moves focus to the last focusable or tabbable element in the focus scope. */
    focusLast(opts?: FocusManagerOptions): HTMLElement | undefined;
}
interface FocusManagerOptions {
    /** The element to start searching from. The currently focused element by default. */
    from?: Element;
    /** Whether to only include tabbable elements, or all focusable elements. */
    tabbable?: boolean;
    /** Whether focus should wrap around when it reaches the end of the scope. */
    wrap?: boolean;
    /** A callback that determines whether the given element is focused. */
    accept?: (node: Element) => boolean;
}
/**
 * Creates a FocusManager object that can be used to move focus within an element.
 */
declare function createFocusManager(ref: Accessor<HTMLElement | undefined>, defaultOptions?: Accessor<FocusManagerOptions>): FocusManager;
/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */
declare function getFocusableTreeWalker(root: HTMLElement, opts?: FocusManagerOptions, scope?: HTMLElement[]): TreeWalker;

declare function focusWithoutScrolling(element: HTMLElement | null | undefined): void;

declare function getScrollParent(node: Element | null): Element;

declare function isVirtualClick(event: MouseEvent | PointerEvent): boolean;
declare function isVirtualPointerEvent(event: PointerEvent): boolean;

/** A function that does nothing. */
declare function noop(): void;

/**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */
declare function clamp(value: number, min?: number, max?: number): number;
declare function snapValueToStep(value: number, min: number, max: number, step: number): number;
declare const getPrecision: (n: number) => number;

declare function isMac(): boolean;
declare function isIPhone(): boolean;
declare function isIPad(): boolean;
declare function isIOS(): boolean;
declare function isAppleDevice(): boolean;
declare function isWebKit(): any;
declare function isChrome(): any;
declare function isAndroid(): any;

type Point = [number, number];
type Polygon = Point[];
declare function getEventPoint(event: MouseEvent): Point;
declare function isPointInPolygon(point: Point, polygon: Polygon): boolean;
declare function debugPolygon(polygon: Polygon): HTMLElement | null;

/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
type OverrideProps<Source = {}, Override = {}> = Omit<Source, keyof Override> & Override;
/**
 * Allows for extending a set of `ComponentProps` by an overriding set of props,
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
type OverrideComponentProps<T extends ValidComponent, P> = OverrideProps<ComponentProps<T>, P>;
declare function mergeDefaultProps<T extends {}, D extends Partial<T>>(defaultProps: D, props: T): OverrideProps<T, D>;

declare function runAfterTransition(fn: () => void): void;

interface ScrollIntoViewportOpts {
    /** The optional containing element of the target to be centered in the viewport. */
    containingElement?: Element;
}
/**
 * Scrolls `scrollView` so that `element` is visible.
 * Similar to `element.scrollIntoView({block: 'nearest'})` (not supported in Edge),
 * but doesn't affect parents above `scrollView`.
 */
declare function scrollIntoView(scrollView: HTMLElement, element: HTMLElement): void;
/**
 * Scrolls the `targetElement` so it is visible in the viewport. Accepts an optional `opts.containingElement`
 * that will be centered in the viewport prior to scrolling the targetElement into view. If scrolling is prevented on
 * the body (e.g. targetElement is in a popover), this will only scroll the scroll parents of the targetElement up to but not including the body itself.
 */
declare function scrollIntoViewport(targetElement: Element, opts?: ScrollIntoViewportOpts): void;

declare const visuallyHiddenStyles: JSX.CSSProperties;

declare const FOCUSABLE_ELEMENT_SELECTOR: string;
declare const TABBABLE_ELEMENT_SELECTOR: string;
/**
 * Returns all the tabbable elements in `container`.
 */
declare function getAllTabbableIn(container: HTMLElement, includeContainer?: boolean): HTMLElement[];
/**
 * Checks whether `element` is tabbable or not.
 * @example
 * isTabbable(document.querySelector("input")); // true
 * isTabbable(document.querySelector("input[tabindex='-1']")); // false
 * isTabbable(document.querySelector("input[hidden]")); // false
 * isTabbable(document.querySelector("input:disabled")); // false
 */
declare function isTabbable(element: Element): element is HTMLElement;
/**
 * Checks whether `element` is focusable or not.
 * @example
 * isFocusable(document.querySelector("input")); // true
 * isFocusable(document.querySelector("input[tabindex='-1']")); // true
 * isFocusable(document.querySelector("input[hidden]")); // false
 * isFocusable(document.querySelector("input:disabled")); // false
 */
declare function isFocusable(element: Element): element is HTMLElement;
/**
 * Adapted from https://github.com/testing-library/jest-dom and
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 * @param element - Element to evaluate for display or visibility.
 */
declare function isElementVisible(element: Element, childElement?: Element): boolean;
/**
 * Checks if `element` has focus within.
 * Elements that are referenced by `aria-activedescendant` are also considered.
 * @example
 * hasFocusWithin(document.getElementById("id"));
 */
declare function hasFocusWithin(element: Node | Element): boolean;

type ValidationState = "valid" | "invalid";
type Orientation = "horizontal" | "vertical";
interface RangeValue<T> {
    /** The start value of the range. */
    start: T;
    /** The end value of the range. */
    end: T;
}

export { EventKey, FOCUSABLE_ELEMENT_SELECTOR, FocusManager, FocusManagerOptions, Orientation, OverrideComponentProps, OverrideProps, Point, Polygon, RangeValue, TABBABLE_ELEMENT_SELECTOR, ValidationState, addItemToArray, callHandler, clamp, composeEventHandlers, contains, createFocusManager, createGenerateId, createGlobalListeners, debugPolygon, focusWithoutScrolling, getActiveElement, getAllTabbableIn, getDocument, getEventPoint, getFocusableTreeWalker, getPrecision, getScrollParent, getWindow, hasFocusWithin, isAndroid, isAppleDevice, isArray, isChrome, isCtrlKey, isElementVisible, isFocusable, isFrame, isFunction, isIOS, isIPad, isIPhone, isMac, isNumber, isPointInPolygon, isString, isTabbable, isVirtualClick, isVirtualPointerEvent, isWebKit, mergeDefaultProps, noop, removeItemFromArray, runAfterTransition, scrollIntoView, scrollIntoViewport, snapValueToStep, visuallyHiddenStyles };
