import * as solid_js from 'solid-js';
import { JSX, ValidComponent, ComponentProps, ParentProps } from 'solid-js';
import { b as ButtonRootOptions, a as ButtonRootCommonProps, d as ButtonRootRenderProps } from './button-root-da654b3e.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { a as DismissableLayerCommonProps, D as DismissableLayerRenderProps } from './dismissable-layer-0aef6de3.js';
import { PointerDownOutsideEvent, FocusOutsideEvent, InteractOutsideEvent } from './primitives/create-interact-outside/index.js';
import { Portal } from 'solid-js/web';

interface DialogCloseButtonOptions extends ButtonRootOptions {
}
interface DialogCloseButtonCommonProps<T extends HTMLElement = HTMLElement> extends ButtonRootCommonProps<T> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    "aria-label": string;
}
interface DialogCloseButtonRenderProps extends DialogCloseButtonCommonProps, ButtonRootRenderProps {
}
type DialogCloseButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogCloseButtonOptions & Partial<DialogCloseButtonCommonProps<ElementOf<T>>>;
/**
 * The button that closes the dialog.
 */
declare function DialogCloseButton<T extends ValidComponent = "button">(props: PolymorphicProps<T, DialogCloseButtonProps<T>>): JSX.Element;

interface DialogContentOptions {
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
interface DialogContentCommonProps<T extends HTMLElement = HTMLElement> extends DismissableLayerCommonProps<T> {
    id: string;
}
interface DialogContentRenderProps extends DialogContentCommonProps, DismissableLayerRenderProps {
    role: "dialog" | "alertdialog";
    tabIndex: -1;
}
type DialogContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogContentOptions & Partial<DialogContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content to be rendered when the dialog is open.
 */
declare function DialogContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, DialogContentProps<T>>): solid_js.JSX.Element;

interface DialogDescriptionOptions {
}
interface DialogDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface DialogDescriptionRenderProps extends DialogDescriptionCommonProps {
}
type DialogDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogDescriptionOptions & Partial<DialogDescriptionCommonProps<ElementOf<T>>>;
/**
 * An optional accessible description to be announced when the dialog is open.
 */
declare function DialogDescription<T extends ValidComponent = "p">(props: PolymorphicProps<T, DialogDescriptionProps<T>>): solid_js.JSX.Element;

interface DialogOverlayOptions {
}
interface DialogOverlayCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    style: JSX.CSSProperties | string;
}
interface DialogOverlayRenderProps extends DialogOverlayCommonProps {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
type DialogOverlayProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogOverlayOptions & Partial<DialogOverlayCommonProps<ElementOf<T>>>;
/**
 * A layer that covers the inert portion of the view when the dialog is open.
 */
declare function DialogOverlay<T extends ValidComponent = "div">(props: PolymorphicProps<T, DialogOverlayProps<T>>): JSX.Element;

interface DialogPortalProps extends ComponentProps<typeof Portal> {
}
/**
 * Portals its children into the `body` when the dialog is open.
 */
declare function DialogPortal(props: DialogPortalProps): solid_js.JSX.Element;

declare const DIALOG_INTL_TRANSLATIONS: {
    dismiss: string;
};
type DialogIntlTranslations = typeof DIALOG_INTL_TRANSLATIONS;

interface DialogRootOptions {
    /** The localized strings of the component. */
    translations?: DialogIntlTranslations;
    /** The controlled open state of the dialog. */
    open?: boolean;
    /**
     * The default open state when initially rendered.
     * Useful when you do not need to control the open state.
     */
    defaultOpen?: boolean;
    /** Event handler called when the open state of the dialog changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * Whether the dialog should be the only visible content for screen readers.
     * When set to `true`:
     * - interaction with outside elements will be disabled.
     * - scroll will be locked.
     * - focus will be locked inside the dialog content.
     * - elements outside the dialog content will not be visible for screen readers.
     */
    modal?: boolean;
    /** Whether the scroll should be locked even if the dialog is not modal. */
    preventScroll?: boolean;
    /**
     * Used to force mounting the dialog (portal, overlay and content) when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface DialogRootProps extends ParentProps<DialogRootOptions> {
}
/**
 * A dialog is a window overlaid on either the primary window or another dialog window.
 */
declare function DialogRoot(props: DialogRootProps): solid_js.JSX.Element;

interface DialogTitleOptions {
}
interface DialogTitleCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface DialogTitleRenderProps extends DialogTitleCommonProps {
}
type DialogTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogTitleOptions & Partial<DialogTitleCommonProps<ElementOf<T>>>;
/**
 * An accessible title to be announced when the dialog is open.
 */
declare function DialogTitle<T extends ValidComponent = "h2">(props: PolymorphicProps<T, DialogTitleProps<T>>): solid_js.JSX.Element;

interface DialogTriggerOptions {
}
interface DialogTriggerCommonProps<T extends HTMLElement = HTMLElement> extends ButtonRootCommonProps<T> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface DialogTriggerRenderProps extends DialogTriggerCommonProps, ButtonRootRenderProps {
    "aria-haspopup": "dialog";
    "aria-expanded": boolean;
    "aria-controls": string | undefined;
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
}
type DialogTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogTriggerOptions & Partial<DialogTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that opens the dialog.
 */
declare function DialogTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, DialogTriggerProps<T>>): JSX.Element;

export { DialogTitleProps as A, DialogTitleRenderProps as B, DialogTriggerCommonProps as C, DialogContentOptions as D, DialogTriggerOptions as E, DialogTriggerProps as F, DialogTriggerRenderProps as G, DialogIntlTranslations as H, DialogContent as I, DialogContentProps as J, DialogContentCommonProps as a, DialogContentRenderProps as b, DialogRoot as c, DialogCloseButton as d, DialogDescription as e, DialogOverlay as f, DialogPortal as g, DialogTitle as h, DialogTrigger as i, DialogCloseButtonCommonProps as j, DialogCloseButtonOptions as k, DialogCloseButtonProps as l, DialogCloseButtonRenderProps as m, DialogDescriptionCommonProps as n, DialogDescriptionOptions as o, DialogDescriptionProps as p, DialogDescriptionRenderProps as q, DialogOverlayCommonProps as r, DialogOverlayOptions as s, DialogOverlayProps as t, DialogOverlayRenderProps as u, DialogPortalProps as v, DialogRootOptions as w, DialogRootProps as x, DialogTitleCommonProps as y, DialogTitleOptions as z };
