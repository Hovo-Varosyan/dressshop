import { g as PopperRootOptions, P as PopperArrow, c as PopperArrowCommonProps, a as PopperArrowOptions, b as PopperArrowProps, d as PopperArrowRenderProps } from './popper-root-14a88a55.js';
import * as solid_js from 'solid-js';
import { Accessor, ValidComponent, JSX, ComponentProps, ParentProps } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { d as ButtonRootRenderProps } from './button-root-da654b3e.js';
import { D as DismissableLayerRenderProps } from './dismissable-layer-0aef6de3.js';
import { PointerDownOutsideEvent, FocusOutsideEvent, InteractOutsideEvent } from './primitives/create-interact-outside/index.js';
import { Portal } from 'solid-js/web';

declare const POPOVER_INTL_TRANSLATIONS: {
    dismiss: string;
};
type PopoverIntlTranslations = typeof POPOVER_INTL_TRANSLATIONS;

interface PopoverDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
interface PopoverContextValue {
    translations: Accessor<PopoverIntlTranslations>;
    dataset: Accessor<PopoverDataSet>;
    isOpen: Accessor<boolean>;
    isModal: Accessor<boolean>;
    preventScroll: Accessor<boolean>;
    contentPresent: Accessor<boolean>;
    triggerRef: Accessor<HTMLElement | undefined>;
    contentId: Accessor<string | undefined>;
    titleId: Accessor<string | undefined>;
    descriptionId: Accessor<string | undefined>;
    setDefaultAnchorRef: (el: HTMLElement) => void;
    setTriggerRef: (el: HTMLElement) => void;
    setContentRef: (el: HTMLElement) => void;
    close: () => void;
    toggle: () => void;
    generateId: (part: string) => string;
    registerContentId: (id: string) => () => void;
    registerTitleId: (id: string) => () => void;
    registerDescriptionId: (id: string) => () => void;
}
declare function usePopoverContext(): PopoverContextValue;

interface PopoverAnchorOptions {
}
interface PopoverAnchorCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
}
interface PopoverAnchorRenderProps extends PopoverAnchorCommonProps, PopoverDataSet {
}
type PopoverAnchorProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverAnchorOptions & Partial<PopoverAnchorCommonProps<ElementOf<T>>>;
/**
 * An optional element to position the `Popover.Content` against.
 * If this part is not used, the content will position alongside the `Popover.Trigger`.
 */
declare function PopoverAnchor<T extends ValidComponent = "div">(props: PolymorphicProps<T, PopoverAnchorProps<T>>): solid_js.JSX.Element;

interface PopoverCloseButtonOptions {
}
interface PopoverCloseButtonCommonProps<T extends HTMLElement = HTMLElement> {
    "aria-label": string;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface PopoverCloseButtonRenderProps extends PopoverCloseButtonCommonProps, ButtonRootRenderProps, PopoverDataSet {
}
type PopoverCloseButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverCloseButtonOptions & Partial<PopoverCloseButtonCommonProps<ElementOf<T>>>;
/**
 * The button that closes the popover.
 */
declare function PopoverCloseButton<T extends ValidComponent = "button">(props: PolymorphicProps<T, PopoverCloseButtonProps<T>>): JSX.Element;

interface PopoverContentOptions {
    /**
     * Event handler called when focus moves into the component after opening.
     * It can be prevented by calling `event.preventDefault`.
     */
    onOpenAutoFocus?: (event: Event) => void;
    /**
     * Event handler called when focus moves to the trigger after closing.
     * It can be prevented by calling `event.preventDefault`.
     */
    onCloseAutoFocus?: (event: Event) => void;
    /**
     * Event handler called when the escape key is down.
     * It can be prevented by calling `event.preventDefault`.
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    /**
     * Event handler called when a pointer event occurs outside the bounds of the component.
     * It can be prevented by calling `event.preventDefault`.
     */
    onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
    /**
     * Event handler called when the focus moves outside the bounds of the component.
     * It can be prevented by calling `event.preventDefault`.
     */
    onFocusOutside?: (event: FocusOutsideEvent) => void;
    /**
     * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component.
     * It can be prevented by calling `event.preventDefault`.
     */
    onInteractOutside?: (event: InteractOutsideEvent) => void;
}
interface PopoverContentCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    style?: JSX.CSSProperties | string;
}
interface PopoverContentRenderProps extends PopoverContentCommonProps, DismissableLayerRenderProps, PopoverDataSet {
    role: "dialog";
    tabIndex: -1;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
}
type PopoverContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverContentOptions & Partial<PopoverContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content to be rendered when the popover is open.
 */
declare function PopoverContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, PopoverContentProps<T>>): JSX.Element;

interface PopoverDescriptionOptions {
}
interface PopoverDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface PopoverDescriptionRenderProps extends PopoverDescriptionCommonProps, PopoverDataSet {
}
type PopoverDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverDescriptionOptions & Partial<PopoverDescriptionCommonProps<ElementOf<T>>>;
/**
 * An optional accessible description to be announced when the popover is open.
 */
declare function PopoverDescription<T extends ValidComponent = "p">(props: PolymorphicProps<T, PopoverDescriptionProps<T>>): solid_js.JSX.Element;

interface PopoverPortalProps extends ComponentProps<typeof Portal> {
}
/**
 * Portals its children into the `body` when the popover is open.
 */
declare function PopoverPortal(props: PopoverPortalProps): solid_js.JSX.Element;

interface PopoverRootOptions extends Omit<PopperRootOptions, "anchorRef" | "contentRef" | "onCurrentPlacementChange"> {
    /**
     * A ref for the anchor element.
     * Useful if you want to use an element outside `Popover` as the popover anchor.
     */
    anchorRef?: Accessor<HTMLElement | undefined>;
    /** The controlled open state of the popover. */
    open?: boolean;
    /**
     * The default open state when initially rendered.
     * Useful when you do not need to control the open state.
     */
    defaultOpen?: boolean;
    /** Event handler called when the open state of the popover changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * Whether the popover should be the only visible content for screen readers.
     * When set to `true`:
     * - interaction with outside elements will be disabled.
     * - scroll will be locked.
     * - focus will be locked inside the popover content.
     * - elements outside the popover content will not be visible for screen readers.
     */
    modal?: boolean;
    /** Whether the scroll should be locked even if the popover is not modal. */
    preventScroll?: boolean;
    /**
     * Used to force mounting the popover (portal, positioner and content) when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
    /** The localized strings of the component. */
    translations?: PopoverIntlTranslations;
}
interface PopoverRootProps extends ParentProps<PopoverRootOptions> {
}
/**
 * A popover is a dialog positioned relative to an anchor element.
 */
declare function PopoverRoot(props: PopoverRootProps): solid_js.JSX.Element;

interface PopoverTitleOptions {
}
interface PopoverTitleCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface PopoverTitleRenderProps extends PopoverTitleCommonProps, PopoverDataSet {
}
type PopoverTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverTitleOptions & Partial<PopoverTitleCommonProps<ElementOf<T>>>;
/**
 * An accessible title to be announced when the popover is open.
 */
declare function PopoverTitle<T extends ValidComponent = "h2">(props: PolymorphicProps<T, PopoverTitleProps<T>>): solid_js.JSX.Element;

interface PopoverTriggerOptions {
}
interface PopoverTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface PopoverTriggerRenderProps extends PopoverTriggerCommonProps, ButtonRootRenderProps, PopoverDataSet {
    "aria-haspopup": "dialog";
    "aria-expanded": boolean;
    "aria-controls": string | undefined;
}
type PopoverTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverTriggerOptions & Partial<PopoverTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that opens the popover.
 */
declare function PopoverTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, PopoverTriggerProps<T>>): JSX.Element;

declare const Popover: typeof PopoverRoot & {
    Anchor: typeof PopoverAnchor;
    Arrow: typeof PopperArrow;
    CloseButton: typeof PopoverCloseButton;
    Content: typeof PopoverContent;
    Description: typeof PopoverDescription;
    Portal: typeof PopoverPortal;
    Title: typeof PopoverTitle;
    Trigger: typeof PopoverTrigger;
};

declare const index_Popover: typeof Popover;
type index_PopoverAnchorCommonProps<T extends HTMLElement = HTMLElement> = PopoverAnchorCommonProps<T>;
type index_PopoverAnchorOptions = PopoverAnchorOptions;
type index_PopoverAnchorProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverAnchorProps<T>;
type index_PopoverAnchorRenderProps = PopoverAnchorRenderProps;
type index_PopoverCloseButtonCommonProps<T extends HTMLElement = HTMLElement> = PopoverCloseButtonCommonProps<T>;
type index_PopoverCloseButtonOptions = PopoverCloseButtonOptions;
type index_PopoverCloseButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverCloseButtonProps<T>;
type index_PopoverCloseButtonRenderProps = PopoverCloseButtonRenderProps;
type index_PopoverContentCommonProps<T extends HTMLElement = HTMLElement> = PopoverContentCommonProps<T>;
type index_PopoverContentOptions = PopoverContentOptions;
type index_PopoverContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverContentProps<T>;
type index_PopoverContentRenderProps = PopoverContentRenderProps;
type index_PopoverContextValue = PopoverContextValue;
type index_PopoverDescriptionCommonProps<T extends HTMLElement = HTMLElement> = PopoverDescriptionCommonProps<T>;
type index_PopoverDescriptionOptions = PopoverDescriptionOptions;
type index_PopoverDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverDescriptionProps<T>;
type index_PopoverDescriptionRenderProps = PopoverDescriptionRenderProps;
type index_PopoverPortalProps = PopoverPortalProps;
type index_PopoverRootOptions = PopoverRootOptions;
type index_PopoverRootProps = PopoverRootProps;
type index_PopoverTitleCommonProps<T extends HTMLElement = HTMLElement> = PopoverTitleCommonProps<T>;
type index_PopoverTitleOptions = PopoverTitleOptions;
type index_PopoverTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverTitleProps<T>;
type index_PopoverTitleRenderProps = PopoverTitleRenderProps;
type index_PopoverTriggerCommonProps<T extends HTMLElement = HTMLElement> = PopoverTriggerCommonProps<T>;
type index_PopoverTriggerOptions = PopoverTriggerOptions;
type index_PopoverTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopoverTriggerProps<T>;
type index_PopoverTriggerRenderProps = PopoverTriggerRenderProps;
declare const index_usePopoverContext: typeof usePopoverContext;
declare namespace index {
  export {
    PopoverAnchor as Anchor,
    PopperArrow as Arrow,
    PopoverCloseButton as CloseButton,
    PopoverContent as Content,
    PopoverDescription as Description,
    index_Popover as Popover,
    index_PopoverAnchorCommonProps as PopoverAnchorCommonProps,
    index_PopoverAnchorOptions as PopoverAnchorOptions,
    index_PopoverAnchorProps as PopoverAnchorProps,
    index_PopoverAnchorRenderProps as PopoverAnchorRenderProps,
    PopperArrowCommonProps as PopoverArrowCommonProps,
    PopperArrowOptions as PopoverArrowOptions,
    PopperArrowProps as PopoverArrowProps,
    PopperArrowRenderProps as PopoverArrowRenderProps,
    index_PopoverCloseButtonCommonProps as PopoverCloseButtonCommonProps,
    index_PopoverCloseButtonOptions as PopoverCloseButtonOptions,
    index_PopoverCloseButtonProps as PopoverCloseButtonProps,
    index_PopoverCloseButtonRenderProps as PopoverCloseButtonRenderProps,
    index_PopoverContentCommonProps as PopoverContentCommonProps,
    index_PopoverContentOptions as PopoverContentOptions,
    index_PopoverContentProps as PopoverContentProps,
    index_PopoverContentRenderProps as PopoverContentRenderProps,
    index_PopoverContextValue as PopoverContextValue,
    index_PopoverDescriptionCommonProps as PopoverDescriptionCommonProps,
    index_PopoverDescriptionOptions as PopoverDescriptionOptions,
    index_PopoverDescriptionProps as PopoverDescriptionProps,
    index_PopoverDescriptionRenderProps as PopoverDescriptionRenderProps,
    index_PopoverPortalProps as PopoverPortalProps,
    index_PopoverRootOptions as PopoverRootOptions,
    index_PopoverRootProps as PopoverRootProps,
    index_PopoverTitleCommonProps as PopoverTitleCommonProps,
    index_PopoverTitleOptions as PopoverTitleOptions,
    index_PopoverTitleProps as PopoverTitleProps,
    index_PopoverTitleRenderProps as PopoverTitleRenderProps,
    index_PopoverTriggerCommonProps as PopoverTriggerCommonProps,
    index_PopoverTriggerOptions as PopoverTriggerOptions,
    index_PopoverTriggerProps as PopoverTriggerProps,
    index_PopoverTriggerRenderProps as PopoverTriggerRenderProps,
    PopoverPortal as Portal,
    PopoverRoot as Root,
    PopoverTitle as Title,
    PopoverTrigger as Trigger,
    index_usePopoverContext as usePopoverContext,
  };
}

export { PopoverTriggerProps as A, PopoverAnchor as B, PopoverCloseButton as C, PopoverContent as D, PopoverDescription as E, PopoverPortal as F, PopoverRoot as G, PopoverTitle as H, PopoverTrigger as I, Popover as J, usePopoverContext as K, PopoverContextValue as L, PopoverAnchorOptions as P, PopoverAnchorCommonProps as a, PopoverAnchorRenderProps as b, PopoverAnchorProps as c, PopoverCloseButtonOptions as d, PopoverCloseButtonCommonProps as e, PopoverCloseButtonRenderProps as f, PopoverCloseButtonProps as g, PopoverContentOptions as h, index as i, PopoverContentCommonProps as j, PopoverContentRenderProps as k, PopoverContentProps as l, PopoverDescriptionOptions as m, PopoverDescriptionCommonProps as n, PopoverDescriptionRenderProps as o, PopoverDescriptionProps as p, PopoverPortalProps as q, PopoverRootOptions as r, PopoverRootProps as s, PopoverTitleOptions as t, PopoverTitleCommonProps as u, PopoverTitleRenderProps as v, PopoverTitleProps as w, PopoverTriggerOptions as x, PopoverTriggerCommonProps as y, PopoverTriggerRenderProps as z };
