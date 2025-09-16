import { H as DialogIntlTranslations, c as DialogRoot, d as DialogCloseButton, I as DialogContent, e as DialogDescription, f as DialogOverlay, g as DialogPortal, h as DialogTitle, i as DialogTrigger, j as DialogCloseButtonCommonProps, k as DialogCloseButtonOptions, l as DialogCloseButtonProps, m as DialogCloseButtonRenderProps, a as DialogContentCommonProps, D as DialogContentOptions, J as DialogContentProps, b as DialogContentRenderProps, n as DialogDescriptionCommonProps, o as DialogDescriptionOptions, p as DialogDescriptionProps, q as DialogDescriptionRenderProps, r as DialogOverlayCommonProps, s as DialogOverlayOptions, t as DialogOverlayProps, u as DialogOverlayRenderProps, v as DialogPortalProps, w as DialogRootOptions, x as DialogRootProps, y as DialogTitleCommonProps, z as DialogTitleOptions, A as DialogTitleProps, B as DialogTitleRenderProps, C as DialogTriggerCommonProps, E as DialogTriggerOptions, F as DialogTriggerProps, G as DialogTriggerRenderProps } from './dialog-trigger-f96c918f.js';
import { Accessor, Setter } from 'solid-js';

interface DialogContextValue {
    translations: Accessor<DialogIntlTranslations>;
    isOpen: Accessor<boolean>;
    modal: Accessor<boolean>;
    preventScroll: Accessor<boolean>;
    contentId: Accessor<string | undefined>;
    titleId: Accessor<string | undefined>;
    descriptionId: Accessor<string | undefined>;
    triggerRef: Accessor<HTMLElement | undefined>;
    overlayRef: Accessor<HTMLElement | undefined>;
    setOverlayRef: Setter<HTMLElement | undefined>;
    contentRef: Accessor<HTMLElement | undefined>;
    setContentRef: Setter<HTMLElement | undefined>;
    overlayPresent: Accessor<boolean>;
    contentPresent: Accessor<boolean>;
    close: () => void;
    toggle: () => void;
    setTriggerRef: Setter<HTMLElement | undefined>;
    generateId: (part: string) => string;
    registerContentId: (id: string) => () => void;
    registerTitleId: (id: string) => () => void;
    registerDescriptionId: (id: string) => () => void;
}
declare function useDialogContext(): DialogContextValue;

declare const Dialog: typeof DialogRoot & {
    CloseButton: typeof DialogCloseButton;
    Content: typeof DialogContent;
    Description: typeof DialogDescription;
    Overlay: typeof DialogOverlay;
    Portal: typeof DialogPortal;
    Title: typeof DialogTitle;
    Trigger: typeof DialogTrigger;
};

declare const index_Dialog: typeof Dialog;
declare const index_DialogCloseButtonCommonProps: typeof DialogCloseButtonCommonProps;
declare const index_DialogCloseButtonOptions: typeof DialogCloseButtonOptions;
declare const index_DialogCloseButtonProps: typeof DialogCloseButtonProps;
declare const index_DialogCloseButtonRenderProps: typeof DialogCloseButtonRenderProps;
declare const index_DialogContentCommonProps: typeof DialogContentCommonProps;
declare const index_DialogContentOptions: typeof DialogContentOptions;
declare const index_DialogContentProps: typeof DialogContentProps;
declare const index_DialogContentRenderProps: typeof DialogContentRenderProps;
type index_DialogContextValue = DialogContextValue;
declare const index_DialogDescriptionCommonProps: typeof DialogDescriptionCommonProps;
declare const index_DialogDescriptionOptions: typeof DialogDescriptionOptions;
declare const index_DialogDescriptionProps: typeof DialogDescriptionProps;
declare const index_DialogDescriptionRenderProps: typeof DialogDescriptionRenderProps;
declare const index_DialogOverlayCommonProps: typeof DialogOverlayCommonProps;
declare const index_DialogOverlayOptions: typeof DialogOverlayOptions;
declare const index_DialogOverlayProps: typeof DialogOverlayProps;
declare const index_DialogOverlayRenderProps: typeof DialogOverlayRenderProps;
declare const index_DialogPortalProps: typeof DialogPortalProps;
declare const index_DialogRootOptions: typeof DialogRootOptions;
declare const index_DialogRootProps: typeof DialogRootProps;
declare const index_DialogTitleCommonProps: typeof DialogTitleCommonProps;
declare const index_DialogTitleOptions: typeof DialogTitleOptions;
declare const index_DialogTitleProps: typeof DialogTitleProps;
declare const index_DialogTitleRenderProps: typeof DialogTitleRenderProps;
declare const index_DialogTriggerCommonProps: typeof DialogTriggerCommonProps;
declare const index_DialogTriggerOptions: typeof DialogTriggerOptions;
declare const index_DialogTriggerProps: typeof DialogTriggerProps;
declare const index_DialogTriggerRenderProps: typeof DialogTriggerRenderProps;
declare const index_useDialogContext: typeof useDialogContext;
declare namespace index {
  export {
    DialogCloseButton as CloseButton,
    DialogContent as Content,
    DialogDescription as Description,
    index_Dialog as Dialog,
    index_DialogCloseButtonCommonProps as DialogCloseButtonCommonProps,
    index_DialogCloseButtonOptions as DialogCloseButtonOptions,
    index_DialogCloseButtonProps as DialogCloseButtonProps,
    index_DialogCloseButtonRenderProps as DialogCloseButtonRenderProps,
    index_DialogContentCommonProps as DialogContentCommonProps,
    index_DialogContentOptions as DialogContentOptions,
    index_DialogContentProps as DialogContentProps,
    index_DialogContentRenderProps as DialogContentRenderProps,
    index_DialogContextValue as DialogContextValue,
    index_DialogDescriptionCommonProps as DialogDescriptionCommonProps,
    index_DialogDescriptionOptions as DialogDescriptionOptions,
    index_DialogDescriptionProps as DialogDescriptionProps,
    index_DialogDescriptionRenderProps as DialogDescriptionRenderProps,
    index_DialogOverlayCommonProps as DialogOverlayCommonProps,
    index_DialogOverlayOptions as DialogOverlayOptions,
    index_DialogOverlayProps as DialogOverlayProps,
    index_DialogOverlayRenderProps as DialogOverlayRenderProps,
    index_DialogPortalProps as DialogPortalProps,
    index_DialogRootOptions as DialogRootOptions,
    index_DialogRootProps as DialogRootProps,
    index_DialogTitleCommonProps as DialogTitleCommonProps,
    index_DialogTitleOptions as DialogTitleOptions,
    index_DialogTitleProps as DialogTitleProps,
    index_DialogTitleRenderProps as DialogTitleRenderProps,
    index_DialogTriggerCommonProps as DialogTriggerCommonProps,
    index_DialogTriggerOptions as DialogTriggerOptions,
    index_DialogTriggerProps as DialogTriggerProps,
    index_DialogTriggerRenderProps as DialogTriggerRenderProps,
    DialogOverlay as Overlay,
    DialogPortal as Portal,
    DialogRoot as Root,
    DialogTitle as Title,
    DialogTrigger as Trigger,
    index_useDialogContext as useDialogContext,
  };
}

export { Dialog as D, DialogContextValue as a, index as i, useDialogContext as u };
