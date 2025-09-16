import { D as DialogContentOptions, a as DialogContentCommonProps, b as DialogContentRenderProps, c as DialogRoot, d as DialogCloseButton, e as DialogDescription, f as DialogOverlay, g as DialogPortal, h as DialogTitle, i as DialogTrigger, j as DialogCloseButtonCommonProps, k as DialogCloseButtonOptions, l as DialogCloseButtonProps, m as DialogCloseButtonRenderProps, n as DialogDescriptionCommonProps, o as DialogDescriptionOptions, p as DialogDescriptionProps, q as DialogDescriptionRenderProps, r as DialogOverlayCommonProps, s as DialogOverlayOptions, t as DialogOverlayProps, u as DialogOverlayRenderProps, v as DialogPortalProps, w as DialogRootOptions, x as DialogRootProps, y as DialogTitleCommonProps, z as DialogTitleOptions, A as DialogTitleProps, B as DialogTitleRenderProps, C as DialogTriggerCommonProps, E as DialogTriggerOptions, F as DialogTriggerProps, G as DialogTriggerRenderProps } from './dialog-trigger-f96c918f.js';
import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface AlertDialogContentOptions extends DialogContentOptions {
}
interface AlertDialogContentCommonProps<T extends HTMLElement = HTMLElement> extends DialogContentCommonProps<T> {
}
interface AlertDialogContentRenderProps extends AlertDialogContentCommonProps, DialogContentRenderProps {
    role: "alertdialog";
}
type AlertDialogContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = AlertDialogContentOptions & Partial<AlertDialogContentCommonProps<ElementOf<T>>>;
/**
 * Overrides the regular `Dialog.Content` with role="alertdialog" to interrupt the user.
 */
declare function AlertDialogContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, AlertDialogContentProps<T>>): solid_js.JSX.Element;

declare const AlertDialog: typeof DialogRoot & {
    CloseButton: typeof DialogCloseButton;
    Content: typeof AlertDialogContent;
    Description: typeof DialogDescription;
    Overlay: typeof DialogOverlay;
    Portal: typeof DialogPortal;
    Title: typeof DialogTitle;
    Trigger: typeof DialogTrigger;
};

declare const index_AlertDialog: typeof AlertDialog;
type index_AlertDialogContentCommonProps<T extends HTMLElement = HTMLElement> = AlertDialogContentCommonProps<T>;
type index_AlertDialogContentOptions = AlertDialogContentOptions;
type index_AlertDialogContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = AlertDialogContentProps<T>;
type index_AlertDialogContentRenderProps = AlertDialogContentRenderProps;
declare namespace index {
  export {
    index_AlertDialog as AlertDialog,
    DialogCloseButtonCommonProps as AlertDialogCloseButtonCommonProps,
    DialogCloseButtonOptions as AlertDialogCloseButtonOptions,
    DialogCloseButtonProps as AlertDialogCloseButtonProps,
    DialogCloseButtonRenderProps as AlertDialogCloseButtonRenderProps,
    index_AlertDialogContentCommonProps as AlertDialogContentCommonProps,
    index_AlertDialogContentOptions as AlertDialogContentOptions,
    index_AlertDialogContentProps as AlertDialogContentProps,
    index_AlertDialogContentRenderProps as AlertDialogContentRenderProps,
    DialogDescriptionCommonProps as AlertDialogDescriptionCommonProps,
    DialogDescriptionOptions as AlertDialogDescriptionOptions,
    DialogDescriptionProps as AlertDialogDescriptionProps,
    DialogDescriptionRenderProps as AlertDialogDescriptionRenderProps,
    DialogOverlayCommonProps as AlertDialogOverlayCommonProps,
    DialogOverlayOptions as AlertDialogOverlayOptions,
    DialogOverlayProps as AlertDialogOverlayProps,
    DialogOverlayRenderProps as AlertDialogOverlayRenderProps,
    DialogPortalProps as AlertDialogPortalProps,
    DialogRootOptions as AlertDialogRootOptions,
    DialogRootProps as AlertDialogRootProps,
    DialogTitleCommonProps as AlertDialogTitleCommonProps,
    DialogTitleOptions as AlertDialogTitleOptions,
    DialogTitleProps as AlertDialogTitleProps,
    DialogTitleRenderProps as AlertDialogTitleRenderProps,
    DialogTriggerCommonProps as AlertDialogTriggerCommonProps,
    DialogTriggerOptions as AlertDialogTriggerOptions,
    DialogTriggerProps as AlertDialogTriggerProps,
    DialogTriggerRenderProps as AlertDialogTriggerRenderProps,
    DialogCloseButton as CloseButton,
    AlertDialogContent as Content,
    DialogDescription as Description,
    DialogOverlay as Overlay,
    DialogPortal as Portal,
    DialogRoot as Root,
    DialogTitle as Title,
    DialogTrigger as Trigger,
  };
}

export { AlertDialogContentOptions as A, AlertDialogContentCommonProps as a, AlertDialogContentRenderProps as b, AlertDialogContentProps as c, AlertDialogContent as d, AlertDialog as e, index as i };
