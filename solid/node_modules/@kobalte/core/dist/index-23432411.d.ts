import { g as PopperRootOptions, P as PopperArrow, c as PopperArrowCommonProps, a as PopperArrowOptions, b as PopperArrowProps, d as PopperArrowRenderProps } from './popper-root-14a88a55.js';
import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent, ComponentProps, ParentProps } from 'solid-js';
import { D as DismissableLayerRenderProps } from './dismissable-layer-0aef6de3.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { Portal } from 'solid-js/web';
import { d as LinkRootRenderProps } from './link-root-bf54d4f3.js';

interface HoverCardDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
interface HoverCardContextValue {
    dataset: Accessor<HoverCardDataSet>;
    isOpen: Accessor<boolean>;
    contentPresent: Accessor<boolean>;
    openWithDelay: () => void;
    closeWithDelay: () => void;
    cancelOpening: () => void;
    cancelClosing: () => void;
    close: () => void;
    isTargetOnHoverCard: (target: Node | null) => boolean;
    setTriggerRef: (el: HTMLElement) => void;
    setContentRef: (el: HTMLElement) => void;
}
declare function useHoverCardContext(): HoverCardContextValue;

interface HoverCardContentOptions {
}
interface HoverCardContentOptions {
}
interface HoverCardContentCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    style?: JSX.CSSProperties | string;
}
interface HoverCardContentRenderProps extends HoverCardContentCommonProps, DismissableLayerRenderProps, HoverCardDataSet {
}
type HoverCardContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = HoverCardContentOptions & Partial<HoverCardContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content to be rendered when the hovercard is open.
 */
declare function HoverCardContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, HoverCardContentProps<T>>): JSX.Element;

interface HoverCardPortalProps extends ComponentProps<typeof Portal> {
}
/**
 * Portals its children into the `body` when the hovercard is open.
 */
declare function HoverCardPortal(props: HoverCardPortalProps): solid_js.JSX.Element;

interface HoverCardRootOptions extends Omit<PopperRootOptions, "anchorRef" | "contentRef" | "onCurrentPlacementChange"> {
    /** The controlled open state of the hovercard. */
    open?: boolean;
    /**
     * The default open state when initially rendered.
     * Useful when you do not need to control the open state.
     */
    defaultOpen?: boolean;
    /** Event handler called when the open state of the hovercard changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /** The duration from when the mouse enters the trigger until the hovercard opens. */
    openDelay?: number;
    /** The duration from when the mouse leaves the trigger or content until the hovercard closes. */
    closeDelay?: number;
    /** Whether to close the hovercard even if the user cursor is inside the safe area between the trigger and hovercard. */
    ignoreSafeArea?: boolean;
    /**
     * Used to force mounting the hovercard (portal and content) when more control is needed.
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
interface HoverCardRootProps extends ParentProps<HoverCardRootOptions> {
}
/**
 * A popover that allows sighted users to preview content available behind a link.
 */
declare function HoverCardRoot(props: HoverCardRootProps): solid_js.JSX.Element;

interface HoverCardTriggerOptions {
}
interface HoverCardTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    disabled: boolean;
    ref: T | ((el: T) => void);
    onPointerEnter: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerLeave: JSX.EventHandlerUnion<T, PointerEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface HoverCardTriggerRenderProps extends HoverCardTriggerCommonProps, LinkRootRenderProps, HoverCardDataSet {
}
type HoverCardTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = HoverCardTriggerOptions & Partial<HoverCardTriggerCommonProps<ElementOf<T>>>;
/**
 * The link that opens the hovercard when hovered.
 */
declare function HoverCardTrigger<T extends ValidComponent = "a">(props: PolymorphicProps<T, HoverCardTriggerProps<T>>): JSX.Element;

declare const HoverCard: typeof HoverCardRoot & {
    Arrow: typeof PopperArrow;
    Content: typeof HoverCardContent;
    Portal: typeof HoverCardPortal;
    Trigger: typeof HoverCardTrigger;
};

declare const index_HoverCard: typeof HoverCard;
type index_HoverCardContentCommonProps<T extends HTMLElement = HTMLElement> = HoverCardContentCommonProps<T>;
type index_HoverCardContentOptions = HoverCardContentOptions;
type index_HoverCardContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = HoverCardContentProps<T>;
type index_HoverCardContentRenderProps = HoverCardContentRenderProps;
type index_HoverCardContextValue = HoverCardContextValue;
type index_HoverCardPortalProps = HoverCardPortalProps;
type index_HoverCardRootOptions = HoverCardRootOptions;
type index_HoverCardRootProps = HoverCardRootProps;
type index_HoverCardTriggerCommonProps<T extends HTMLElement = HTMLElement> = HoverCardTriggerCommonProps<T>;
type index_HoverCardTriggerOptions = HoverCardTriggerOptions;
type index_HoverCardTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = HoverCardTriggerProps<T>;
type index_HoverCardTriggerRenderProps = HoverCardTriggerRenderProps;
declare const index_useHoverCardContext: typeof useHoverCardContext;
declare namespace index {
  export {
    PopperArrow as Arrow,
    HoverCardContent as Content,
    index_HoverCard as HoverCard,
    PopperArrowCommonProps as HoverCardArrowCommonProps,
    PopperArrowOptions as HoverCardArrowOptions,
    PopperArrowProps as HoverCardArrowProps,
    PopperArrowRenderProps as HoverCardArrowRenderProps,
    index_HoverCardContentCommonProps as HoverCardContentCommonProps,
    index_HoverCardContentOptions as HoverCardContentOptions,
    index_HoverCardContentProps as HoverCardContentProps,
    index_HoverCardContentRenderProps as HoverCardContentRenderProps,
    index_HoverCardContextValue as HoverCardContextValue,
    index_HoverCardPortalProps as HoverCardPortalProps,
    index_HoverCardRootOptions as HoverCardRootOptions,
    index_HoverCardRootProps as HoverCardRootProps,
    index_HoverCardTriggerCommonProps as HoverCardTriggerCommonProps,
    index_HoverCardTriggerOptions as HoverCardTriggerOptions,
    index_HoverCardTriggerProps as HoverCardTriggerProps,
    index_HoverCardTriggerRenderProps as HoverCardTriggerRenderProps,
    HoverCardPortal as Portal,
    HoverCardRoot as Root,
    HoverCardTrigger as Trigger,
    index_useHoverCardContext as useHoverCardContext,
  };
}

export { HoverCardContentOptions as H, HoverCardContentCommonProps as a, HoverCardContentRenderProps as b, HoverCardContentProps as c, HoverCardPortalProps as d, HoverCardRootOptions as e, HoverCardRootProps as f, HoverCardTriggerOptions as g, HoverCardTriggerCommonProps as h, index as i, HoverCardTriggerRenderProps as j, HoverCardTriggerProps as k, HoverCardContent as l, HoverCardPortal as m, HoverCardRoot as n, HoverCardTrigger as o, HoverCard as p, HoverCardContextValue as q, useHoverCardContext as u };
