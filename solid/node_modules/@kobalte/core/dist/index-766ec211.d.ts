import * as solid_js from 'solid-js';
import { Component, JSX, ValidComponent, Accessor } from 'solid-js';
import { d as ButtonRootRenderProps } from './button-root-da654b3e.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

type ToastSwipeDirection = "up" | "down" | "left" | "right";
type ToastPromiseState = "pending" | "fulfilled" | "rejected";
interface ToastComponentProps {
    /** A unique id for the toast. */
    toastId: number;
}
type ToastComponent = Component<ToastComponentProps>;
interface ToastPromiseComponentProps<T, U = any> extends ToastComponentProps {
    /** The state of the promise. */
    state: ToastPromiseState;
    /** The resolved data of the promise when fulfilled. */
    data?: T;
    /** The error of the promise when rejected. */
    error?: U;
}
type ToastPromiseComponent<T, U = any> = Component<ToastPromiseComponentProps<T, U>>;
interface ToastConfig {
    /** The unique id of the toast. */
    id: number;
    /** Whether the toast should be marked for dismiss. */
    dismiss: boolean;
    /** Whether the toast should be marked as an update. */
    update: boolean;
    /** The toast component to render. */
    toastComponent: ToastComponent;
    /** The id of the `<Toast.Region/>` to display the toast in. */
    region?: string;
}
interface ShowToastOptions extends Pick<ToastConfig, "region"> {
}

/** Adds a new toast to the visible toasts or queue depending on current state and limit, and return the id of the created toast. */
declare function show(toastComponent: ToastComponent, options?: ShowToastOptions): number;
/** Update the toast of the given id with a new rendered component. */
declare function update(id: number, toastComponent: ToastComponent): void;
/** Adds a new promise-based toast to the visible toasts or queue depending on current state and limit, and return the id of the created toast. */
declare function promise<T, U = any>(promise: Promise<T> | (() => Promise<T>), toastComponent: ToastPromiseComponent<T, U>, options?: ShowToastOptions): number;
/** Removes toast with given id from visible toasts and queue. */
declare function dismiss(id: number): number;
/** Removes all toasts from visible toasts and queue. */
declare function clear(): void;
declare const toaster: {
    show: typeof show;
    update: typeof update;
    promise: typeof promise;
    dismiss: typeof dismiss;
    clear: typeof clear;
};

interface ToastCloseButtonOptions {
}
interface ToastCloseButtonCommonProps<T extends HTMLElement = HTMLElement> {
    "aria-label": string;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface ToastCloseButtonRenderProps extends ToastCloseButtonCommonProps, ButtonRootRenderProps {
}
type ToastCloseButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastCloseButtonOptions & Partial<ToastCloseButtonCommonProps<ElementOf<T>>>;
/**
 * The button that closes the toast.
 */
declare function ToastCloseButton<T extends ValidComponent = "button">(props: PolymorphicProps<T, ToastCloseButtonProps<T>>): JSX.Element;

interface ToastDescriptionOptions {
}
interface ToastDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ToastDescriptionRenderProps extends ToastDescriptionCommonProps {
}
type ToastDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastDescriptionOptions & Partial<ToastDescriptionCommonProps<ElementOf<T>>>;
/**
 * An optional accessible description to be announced when the toast is open.
 */
declare function ToastDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastDescriptionProps<T>>): solid_js.JSX.Element;

interface ToastListOptions {
}
interface ToastListCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    onFocusIn: JSX.EventHandlerUnion<T, FocusEvent>;
    onFocusOut: JSX.EventHandlerUnion<T, FocusEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface ToastListRenderProps extends ToastListCommonProps {
    children: JSX.Element;
    tabIndex: -1;
}
type ToastListProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastListOptions & Partial<ToastListCommonProps<ElementOf<T>>>;
/**
 * The list containing all rendered toasts.
 * Must be inside a `Toast.Region`.
 */
declare function ToastList<T extends ValidComponent = "ol">(props: PolymorphicProps<T, ToastListProps<T>>): JSX.Element;

interface ToastProgressFillOptions {
}
interface ToastProgressFillCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
}
interface ToastProgressFillRenderProps extends ToastProgressFillCommonProps {
}
type ToastProgressFillProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastProgressFillOptions & Partial<ToastProgressFillCommonProps<ElementOf<T>>>;
/**
 * The component that visually represents the toast remaining lifetime.
 * Used to visually show the fill of `Toast.ProgressTrack`.
 */
declare function ToastProgressFill<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastProgressFillProps<T>>): JSX.Element;

interface ToastProgressTrackOptions {
}
interface ToastProgressTrackCommonProps<T extends HTMLElement = HTMLElement> {
}
interface ToastProgressTrackRenderProps extends ToastProgressTrackCommonProps {
    "aria-hidden": "true";
    role: "presentation";
}
type ToastProgressTrackProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastProgressTrackOptions & Partial<ToastProgressTrackCommonProps<ElementOf<T>>>;
/**
 * The component that visually represents the toast lifetime.
 * Act as a container for `Toast.ProgressFill`.
 */
declare function ToastProgressTrack<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastProgressTrackProps<T>>): solid_js.JSX.Element;

declare const TOAST_INTL_TRANSLATIONS: {
    close: string;
};
type ToastIntlTranslations = typeof TOAST_INTL_TRANSLATIONS;
declare const TOAST_REGION_INTL_TRANSLATIONS: {
    notifications: (hotkeyPlaceholder: string) => string;
};
type ToastRegionIntlTranslations = typeof TOAST_REGION_INTL_TRANSLATIONS;

interface ToastRegionOptions {
    /** The localized strings of the component. */
    translations?: ToastRegionIntlTranslations;
    /**
     * A label for the toast region to provide context for screen reader users when navigating page landmarks.
     * Can contain a `{hotkey}` placeholder which will be replaced for you.
     * @default "Notifications ({hotkey})"
     */
    "aria-label"?: string;
    /**
     * The keys to use as the keyboard shortcut that will move focus to the toast region.
     * Use `event.code` value for each key from [keycode.info](https://www.toptal.com/developers/keycode).
     * For meta keys, use `ctrlKey`, `shiftKey`, `altKey` and/or `metaKey`.
     * @default alt + T
     */
    hotkey?: string[];
    /** The time in milliseconds that should elapse before automatically closing each toast. */
    duration?: number;
    /** The maximum amount of toasts that can be displayed at the same time. */
    limit?: number;
    /** The direction of the pointer swipe that should close the toast. */
    swipeDirection?: ToastSwipeDirection;
    /** The distance in pixels that the swipe gesture must travel before a close is triggered. */
    swipeThreshold?: number;
    /** Whether the toasts close timeout should pause when a toast is hovered or focused. */
    pauseOnInteraction?: boolean;
    /**
     * Whether the toasts close timeout should pause when the document loses focus or the page is idle
     * (e.g. switching to a new browser tab).
     */
    pauseOnPageIdle?: boolean;
    /**
     * Whether the toast region is marked as a "top layer", so that it:
     *  - is not aria-hidden when opening an overlay.
     *  - allows focus even outside a containing focus scope.
     *  - doesn’t dismiss overlays when clicking on it, even though it is outside.
     */
    topLayer?: boolean;
    /** The id of the toast region, used for multiple toast regions. */
    regionId?: string;
}
interface ToastRegionCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
    id: string;
}
interface ToastRegionRenderProps extends ToastRegionCommonProps {
    role: "region";
    tabIndex: -1;
    "aria-label": string;
    "data-kb-top-layer": string | undefined;
}
type ToastRegionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastRegionOptions & Partial<ToastRegionCommonProps<ElementOf<T>>>;
/**
 * The fixed area where toasts appear. Users can jump to by pressing a hotkey.
 * It is up to you to ensure the discoverability of the hotkey for keyboard users.
 */
declare function ToastRegion<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastRegionProps<T>>): JSX.Element;

type SwipeEvent = {
    currentTarget: EventTarget & HTMLLIElement;
} & Omit<CustomEvent<{
    originalEvent: PointerEvent;
    delta: {
        x: number;
        y: number;
    };
}>, "currentTarget">;
interface ToastRootOptions {
    /** The localized strings of the component. */
    translations?: ToastIntlTranslations;
    /** The id of the toast provided by the `toaster`. */
    toastId: number;
    /**
     * Control the sensitivity of the toast for accessibility purposes.
     * For toasts that are the result of a user action, choose `high`.
     * Toasts generated from background tasks should use `low`.
     */
    priority?: "high" | "low";
    /**
     * The time in milliseconds that should elapse before automatically closing the toast.
     * This will override the value supplied to `Toast.Region`.
     */
    duration?: number;
    /** Whether the toast should ignore duration and disappear only by a user action. */
    persistent?: boolean;
    /**
     * Event handler called when the dismiss timer is paused.
     * This occurs when the pointer is moved over the region or the region is focused.
     */
    onPause?: () => void;
    /**
     * Event handler called when the dismiss timer is resumed.
     * This occurs when the pointer is moved away from the region or the region is blurred.
     */
    onResume?: () => void;
    /** Event handler called when starting a swipe interaction. */
    onSwipeStart?: (event: SwipeEvent) => void;
    /** Event handler called during a swipe interaction. */
    onSwipeMove?: (event: SwipeEvent) => void;
    /** Event handler called when a swipe interaction is cancelled. */
    onSwipeCancel?: (event: SwipeEvent) => void;
    /** Event handler called at the end of a swipe interaction. */
    onSwipeEnd?: (event: SwipeEvent) => void;
    /**
     * Event handler called when the escape key is down.
     * It can be prevented by calling `event.preventDefault`.
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
}
interface ToastRootCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
    id: string;
    ref: T | ((el: T) => void);
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface ToastRootRenderProps extends ToastRootCommonProps {
    role: "status";
    tabIndex: 0;
}
type ToastRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastRootOptions & Partial<ToastRootCommonProps<ElementOf<T>>>;
declare function ToastRoot<T extends ValidComponent = "li">(props: PolymorphicProps<T, ToastRootProps<T>>): JSX.Element;

interface ToastTitleOptions {
}
interface ToastTitleCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ToastTitleRenderProps extends ToastTitleCommonProps {
}
type ToastTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastTitleOptions & Partial<ToastTitleCommonProps<ElementOf<T>>>;
/**
 * An accessible title to be announced when the toast is open.
 */
declare function ToastTitle<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastTitleProps<T>>): solid_js.JSX.Element;

interface ToastContextValue {
    translations: Accessor<ToastIntlTranslations>;
    close: () => void;
    duration: Accessor<number>;
    isPersistent: Accessor<boolean>;
    closeTimerStartTime: Accessor<number>;
    generateId: (part: string) => string;
    registerTitleId: (id: string) => () => void;
    registerDescriptionId: (id: string) => () => void;
}
declare function useToastContext(): ToastContextValue;

declare const Toast: typeof ToastRoot & {
    CloseButton: typeof ToastCloseButton;
    Description: typeof ToastDescription;
    List: typeof ToastList;
    ProgressFill: typeof ToastProgressFill;
    ProgressTrack: typeof ToastProgressTrack;
    Region: typeof ToastRegion;
    Title: typeof ToastTitle;
    toaster: {
        show: (toastComponent: ToastComponent, options?: ShowToastOptions | undefined) => number;
        update: (id: number, toastComponent: ToastComponent) => void;
        promise: <T, U = any>(promise: Promise<T> | (() => Promise<T>), toastComponent: ToastPromiseComponent<T, U>, options?: ShowToastOptions | undefined) => number;
        dismiss: (id: number) => number;
        clear: () => void;
    };
};

declare const index_Toast: typeof Toast;
type index_ToastCloseButtonCommonProps<T extends HTMLElement = HTMLElement> = ToastCloseButtonCommonProps<T>;
type index_ToastCloseButtonOptions = ToastCloseButtonOptions;
type index_ToastCloseButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastCloseButtonProps<T>;
type index_ToastCloseButtonRenderProps = ToastCloseButtonRenderProps;
type index_ToastComponent = ToastComponent;
type index_ToastComponentProps = ToastComponentProps;
type index_ToastContextValue = ToastContextValue;
type index_ToastDescriptionCommonProps<T extends HTMLElement = HTMLElement> = ToastDescriptionCommonProps<T>;
type index_ToastDescriptionOptions = ToastDescriptionOptions;
type index_ToastDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastDescriptionProps<T>;
type index_ToastDescriptionRenderProps = ToastDescriptionRenderProps;
type index_ToastListCommonProps<T extends HTMLElement = HTMLElement> = ToastListCommonProps<T>;
type index_ToastListOptions = ToastListOptions;
type index_ToastListProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastListProps<T>;
type index_ToastListRenderProps = ToastListRenderProps;
type index_ToastProgressFillCommonProps<T extends HTMLElement = HTMLElement> = ToastProgressFillCommonProps<T>;
type index_ToastProgressFillOptions = ToastProgressFillOptions;
type index_ToastProgressFillProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastProgressFillProps<T>;
type index_ToastProgressFillRenderProps = ToastProgressFillRenderProps;
type index_ToastProgressTrackCommonProps<T extends HTMLElement = HTMLElement> = ToastProgressTrackCommonProps<T>;
type index_ToastProgressTrackOptions = ToastProgressTrackOptions;
type index_ToastProgressTrackProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastProgressTrackProps<T>;
type index_ToastProgressTrackRenderProps = ToastProgressTrackRenderProps;
type index_ToastPromiseComponent<T, U = any> = ToastPromiseComponent<T, U>;
type index_ToastPromiseComponentProps<T, U = any> = ToastPromiseComponentProps<T, U>;
type index_ToastPromiseState = ToastPromiseState;
type index_ToastRegionCommonProps<T extends HTMLElement = HTMLElement> = ToastRegionCommonProps<T>;
type index_ToastRegionOptions = ToastRegionOptions;
type index_ToastRegionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastRegionProps<T>;
type index_ToastRegionRenderProps = ToastRegionRenderProps;
type index_ToastRootCommonProps<T extends HTMLElement = HTMLElement> = ToastRootCommonProps<T>;
type index_ToastRootOptions = ToastRootOptions;
type index_ToastRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastRootProps<T>;
type index_ToastRootRenderProps = ToastRootRenderProps;
type index_ToastSwipeDirection = ToastSwipeDirection;
type index_ToastTitleCommonProps<T extends HTMLElement = HTMLElement> = ToastTitleCommonProps<T>;
type index_ToastTitleOptions = ToastTitleOptions;
type index_ToastTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastTitleProps<T>;
type index_ToastTitleRenderProps = ToastTitleRenderProps;
declare const index_toaster: typeof toaster;
declare const index_useToastContext: typeof useToastContext;
declare namespace index {
  export {
    ToastCloseButton as CloseButton,
    ToastDescription as Description,
    ToastList as List,
    ToastProgressFill as ProgressFill,
    ToastProgressTrack as ProgressTrack,
    ToastRegion as Region,
    ToastRoot as Root,
    ToastTitle as Title,
    index_Toast as Toast,
    index_ToastCloseButtonCommonProps as ToastCloseButtonCommonProps,
    index_ToastCloseButtonOptions as ToastCloseButtonOptions,
    index_ToastCloseButtonProps as ToastCloseButtonProps,
    index_ToastCloseButtonRenderProps as ToastCloseButtonRenderProps,
    index_ToastComponent as ToastComponent,
    index_ToastComponentProps as ToastComponentProps,
    index_ToastContextValue as ToastContextValue,
    index_ToastDescriptionCommonProps as ToastDescriptionCommonProps,
    index_ToastDescriptionOptions as ToastDescriptionOptions,
    index_ToastDescriptionProps as ToastDescriptionProps,
    index_ToastDescriptionRenderProps as ToastDescriptionRenderProps,
    index_ToastListCommonProps as ToastListCommonProps,
    index_ToastListOptions as ToastListOptions,
    index_ToastListProps as ToastListProps,
    index_ToastListRenderProps as ToastListRenderProps,
    index_ToastProgressFillCommonProps as ToastProgressFillCommonProps,
    index_ToastProgressFillOptions as ToastProgressFillOptions,
    index_ToastProgressFillProps as ToastProgressFillProps,
    index_ToastProgressFillRenderProps as ToastProgressFillRenderProps,
    index_ToastProgressTrackCommonProps as ToastProgressTrackCommonProps,
    index_ToastProgressTrackOptions as ToastProgressTrackOptions,
    index_ToastProgressTrackProps as ToastProgressTrackProps,
    index_ToastProgressTrackRenderProps as ToastProgressTrackRenderProps,
    index_ToastPromiseComponent as ToastPromiseComponent,
    index_ToastPromiseComponentProps as ToastPromiseComponentProps,
    index_ToastPromiseState as ToastPromiseState,
    index_ToastRegionCommonProps as ToastRegionCommonProps,
    index_ToastRegionOptions as ToastRegionOptions,
    index_ToastRegionProps as ToastRegionProps,
    index_ToastRegionRenderProps as ToastRegionRenderProps,
    index_ToastRootCommonProps as ToastRootCommonProps,
    index_ToastRootOptions as ToastRootOptions,
    index_ToastRootProps as ToastRootProps,
    index_ToastRootRenderProps as ToastRootRenderProps,
    index_ToastSwipeDirection as ToastSwipeDirection,
    index_ToastTitleCommonProps as ToastTitleCommonProps,
    index_ToastTitleOptions as ToastTitleOptions,
    index_ToastTitleProps as ToastTitleProps,
    index_ToastTitleRenderProps as ToastTitleRenderProps,
    index_toaster as toaster,
    index_useToastContext as useToastContext,
  };
}

export { ToastRegionOptions as A, ToastRegionCommonProps as B, ToastRegionRenderProps as C, ToastRegionProps as D, ToastRootOptions as E, ToastRootCommonProps as F, ToastRootRenderProps as G, ToastRootProps as H, ToastSwipeDirection as I, ToastTitleOptions as J, ToastTitleCommonProps as K, ToastTitleRenderProps as L, ToastTitleProps as M, ToastCloseButton as N, ToastDescription as O, ToastList as P, ToastProgressFill as Q, ToastProgressTrack as R, ToastRegion as S, ToastCloseButtonOptions as T, ToastRoot as U, ToastTitle as V, Toast as W, useToastContext as X, ToastContextValue as Y, ToastCloseButtonCommonProps as a, ToastCloseButtonRenderProps as b, ToastCloseButtonProps as c, ToastComponent as d, ToastComponentProps as e, ToastDescriptionOptions as f, ToastDescriptionCommonProps as g, ToastDescriptionRenderProps as h, index as i, ToastDescriptionProps as j, ToastListOptions as k, ToastListCommonProps as l, ToastListRenderProps as m, ToastListProps as n, ToastProgressFillOptions as o, ToastProgressFillCommonProps as p, ToastProgressFillRenderProps as q, ToastProgressFillProps as r, ToastProgressTrackOptions as s, toaster as t, ToastProgressTrackCommonProps as u, ToastProgressTrackRenderProps as v, ToastProgressTrackProps as w, ToastPromiseComponent as x, ToastPromiseComponentProps as y, ToastPromiseState as z };
