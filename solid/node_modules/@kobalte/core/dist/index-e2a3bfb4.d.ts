import { g as PopperRootOptions, P as PopperArrow, c as PopperArrowCommonProps, a as PopperArrowOptions, b as PopperArrowProps, d as PopperArrowRenderProps } from './popper-root-14a88a55.js';
import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent, ComponentProps, ParentProps } from 'solid-js';
import { D as DismissableLayerRenderProps } from './dismissable-layer-0aef6de3.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { PointerDownOutsideEvent } from './primitives/create-interact-outside/index.js';
import { Portal } from 'solid-js/web';

interface TooltipDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
interface TooltipContextValue {
    dataset: Accessor<TooltipDataSet>;
    isOpen: Accessor<boolean>;
    isDisabled: Accessor<boolean>;
    triggerOnFocusOnly: Accessor<boolean>;
    contentId: Accessor<string | undefined>;
    contentPresent: Accessor<boolean>;
    openTooltip: (immediate?: boolean) => void;
    hideTooltip: (immediate?: boolean) => void;
    cancelOpening: () => void;
    generateId: (part: string) => string;
    registerContentId: (id: string) => () => void;
    isTargetOnTooltip: (target: Node | null) => boolean;
    setTriggerRef: (el: HTMLElement) => void;
    setContentRef: (el: HTMLElement) => void;
}
declare function useTooltipContext(): TooltipContextValue;

interface TooltipContentOptions {
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
}
interface TooltipContentCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    style?: JSX.CSSProperties | string;
}
interface TooltipContentRenderProps extends TooltipContentCommonProps, DismissableLayerRenderProps, TooltipDataSet {
    role: "tooltip";
}
type TooltipContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = TooltipContentOptions & Partial<TooltipContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content to be rendered when the tooltip is open.
 */
declare function TooltipContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, TooltipContentProps<T>>): JSX.Element;

interface TooltipPortalProps extends ComponentProps<typeof Portal> {
}
/**
 * Portals its children into the `body` when the tooltip is open.
 */
declare function TooltipPortal(props: TooltipPortalProps): solid_js.JSX.Element;

interface TooltipRootOptions extends Omit<PopperRootOptions, "anchorRef" | "contentRef" | "onCurrentPlacementChange"> {
    /** The controlled open state of the tooltip. */
    open?: boolean;
    /**
     * The default open state when initially rendered.
     * Useful when you do not need to control the open state.
     */
    defaultOpen?: boolean;
    /** Event handler called when the open state of the tooltip changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Whether the tooltip should be disabled, independent of the trigger. */
    disabled?: boolean;
    /**
     * Whether to open the tooltip only when the trigger is focused.
     * By default, opens for both focus and hover.
     */
    triggerOnFocusOnly?: boolean;
    /** The duration from when the mouse enters the trigger until the tooltip opens. */
    openDelay?: number;
    /** The duration from when the mouse leaves the trigger or content until the tooltip closes. */
    closeDelay?: number;
    /** The duration from when the mouse leaves the trigger or content and moves to another tooltip trigger or content */
    skipDelayDuration?: number;
    /** Whether to close the tooltip even if the user cursor is inside the safe area between the trigger and tooltip. */
    ignoreSafeArea?: boolean;
    /**
     * Used to force mounting the tooltip (portal and content) when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
}
interface TooltipRootProps extends ParentProps<TooltipRootOptions> {
}
/**
 * A popup that displays information related to an element
 * when the element receives keyboard focus or the mouse hovers over it.
 */
declare function TooltipRoot(props: TooltipRootProps): solid_js.JSX.Element;

interface TooltipTriggerOptions {
}
interface TooltipTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    onPointerEnter: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface TooltipTriggerRenderProps extends TooltipTriggerCommonProps {
    "aria-describedby": string | undefined;
}
type TooltipTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = TooltipTriggerOptions & Partial<TooltipTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that opens the tooltip when hovered.
 */
declare function TooltipTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, TooltipTriggerProps<T>>): JSX.Element;

declare const Tooltip: typeof TooltipRoot & {
    Arrow: typeof PopperArrow;
    Content: typeof TooltipContent;
    Portal: typeof TooltipPortal;
    Trigger: typeof TooltipTrigger;
};

declare const index_Tooltip: typeof Tooltip;
type index_TooltipContentCommonProps<T extends HTMLElement = HTMLElement> = TooltipContentCommonProps<T>;
type index_TooltipContentOptions = TooltipContentOptions;
type index_TooltipContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = TooltipContentProps<T>;
type index_TooltipContentRenderProps = TooltipContentRenderProps;
type index_TooltipContextValue = TooltipContextValue;
type index_TooltipPortalProps = TooltipPortalProps;
type index_TooltipRootOptions = TooltipRootOptions;
type index_TooltipRootProps = TooltipRootProps;
type index_TooltipTriggerCommonProps<T extends HTMLElement = HTMLElement> = TooltipTriggerCommonProps<T>;
type index_TooltipTriggerOptions = TooltipTriggerOptions;
type index_TooltipTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = TooltipTriggerProps<T>;
type index_TooltipTriggerRenderProps = TooltipTriggerRenderProps;
declare const index_useTooltipContext: typeof useTooltipContext;
declare namespace index {
  export {
    PopperArrow as Arrow,
    TooltipContent as Content,
    TooltipPortal as Portal,
    TooltipRoot as Root,
    index_Tooltip as Tooltip,
    PopperArrowCommonProps as TooltipArrowCommonProps,
    PopperArrowOptions as TooltipArrowOptions,
    PopperArrowProps as TooltipArrowProps,
    PopperArrowRenderProps as TooltipArrowRenderProps,
    index_TooltipContentCommonProps as TooltipContentCommonProps,
    index_TooltipContentOptions as TooltipContentOptions,
    index_TooltipContentProps as TooltipContentProps,
    index_TooltipContentRenderProps as TooltipContentRenderProps,
    index_TooltipContextValue as TooltipContextValue,
    index_TooltipPortalProps as TooltipPortalProps,
    index_TooltipRootOptions as TooltipRootOptions,
    index_TooltipRootProps as TooltipRootProps,
    index_TooltipTriggerCommonProps as TooltipTriggerCommonProps,
    index_TooltipTriggerOptions as TooltipTriggerOptions,
    index_TooltipTriggerProps as TooltipTriggerProps,
    index_TooltipTriggerRenderProps as TooltipTriggerRenderProps,
    TooltipTrigger as Trigger,
    index_useTooltipContext as useTooltipContext,
  };
}

export { TooltipContentOptions as T, TooltipContentCommonProps as a, TooltipContentRenderProps as b, TooltipContentProps as c, TooltipPortalProps as d, TooltipRootOptions as e, TooltipRootProps as f, TooltipTriggerOptions as g, TooltipTriggerCommonProps as h, index as i, TooltipTriggerRenderProps as j, TooltipTriggerProps as k, TooltipContent as l, TooltipPortal as m, TooltipRoot as n, TooltipTrigger as o, Tooltip as p, TooltipContextValue as q, useTooltipContext as u };
