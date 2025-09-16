import { C as ComboboxDataSet, a as ComboboxRoot, b as ComboboxContent, c as ComboboxControl, d as ComboboxHiddenSelect, e as ComboboxIcon, f as ComboboxInput, g as ComboboxListbox, h as ComboboxPortal, i as ComboboxContentCommonProps, j as ComboboxContentOptions, k as ComboboxContentProps, l as ComboboxContentRenderProps, m as ComboboxContextValue, n as ComboboxControlCommonProps, o as ComboboxControlOptions, p as ComboboxControlProps, q as ComboboxControlRenderProps, r as ComboboxHiddenSelectProps, s as ComboboxIconProps, t as ComboboxInputCommonProps, u as ComboboxInputOptions, v as ComboboxInputProps, w as ComboboxInputRenderProps, x as ComboboxListboxCommonProps, y as ComboboxListboxOptions, z as ComboboxListboxProps, A as ComboboxListboxRenderProps, B as ComboboxMultipleSelectionOptions, D as ComboboxPortalProps, E as ComboboxRootCommonProps, F as ComboboxBaseItemComponentProps, G as ComboboxRootOptions, H as ComboboxRootProps, I as ComboboxRootRenderProps, J as ComboboxBaseSectionComponentProps, K as ComboboxSingleSelectionOptions, L as ComboboxTriggerMode, M as useComboboxContext } from './combobox-root-a533b55f.js';
import { a as FormControlDescription, c as FormControlDescriptionCommonProps, b as FormControlDescriptionOptions, e as FormControlDescriptionProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { F as FormControlErrorMessage, b as FormControlErrorMessageCommonProps, a as FormControlErrorMessageOptions, d as FormControlErrorMessageProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { F as FormControlLabel, b as FormControlLabelCommonProps, a as FormControlLabelOptions, d as FormControlLabelProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
import { a as ListboxItem, b as ListboxItemDescription, c as ListboxItemLabel, d as ListboxSection, e as ListboxItemCommonProps, f as ListboxItemDescriptionCommonProps, g as ListboxItemDescriptionOptions, h as ListboxItemDescriptionProps, i as ListboxItemDescriptionRenderProps, j as ListboxItemLabelCommonProps, k as ListboxItemLabelOptions, l as ListboxItemLabelProps, m as ListboxItemLabelRenderProps, n as ListboxItemOptions, o as ListboxItemProps, p as ListboxItemRenderProps, q as ListboxSectionCommonProps, r as ListboxSectionOptions, s as ListboxSectionProps, t as ListboxSectionRenderProps } from './listbox-section-58338bda.js';
import { L as ListboxItemIndicator, a as ListboxItemIndicatorCommonProps, b as ListboxItemIndicatorOptions, c as ListboxItemIndicatorProps, d as ListboxItemIndicatorRenderProps } from './listbox-item-indicator-b8390ce9.js';
import { P as PopperArrow, a as PopperArrowOptions, b as PopperArrowProps } from './popper-root-14a88a55.js';
import { JSX, ValidComponent } from 'solid-js';
import { a as ButtonRootCommonProps, d as ButtonRootRenderProps } from './button-root-da654b3e.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface ComboboxTriggerOptions {
}
interface ComboboxTriggerCommonProps<T extends HTMLElement = HTMLElement> extends ButtonRootCommonProps<T> {
    id: string;
    ref: T | ((el: T) => void);
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    "aria-labelledby": string | undefined;
}
interface ComboboxTriggerRenderProps extends ComboboxTriggerCommonProps, ComboboxDataSet, ButtonRootRenderProps {
    "aria-label": string | undefined;
    "aria-haspopup": "listbox";
    "aria-expanded": boolean;
    "aria-controls": string | undefined;
}
type ComboboxTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = ComboboxTriggerOptions & Partial<ComboboxTriggerCommonProps<ElementOf<T>>>;
declare function ComboboxTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, ComboboxTriggerProps<T>>): JSX.Element;

declare const Combobox: typeof ComboboxRoot & {
    Arrow: typeof PopperArrow;
    Content: typeof ComboboxContent;
    Control: typeof ComboboxControl;
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    HiddenSelect: typeof ComboboxHiddenSelect;
    Icon: typeof ComboboxIcon;
    Input: typeof ComboboxInput;
    Item: typeof ListboxItem;
    ItemDescription: typeof ListboxItemDescription;
    ItemIndicator: typeof ListboxItemIndicator;
    ItemLabel: typeof ListboxItemLabel;
    Label: typeof FormControlLabel;
    Listbox: typeof ComboboxListbox;
    Portal: typeof ComboboxPortal;
    Section: typeof ListboxSection;
    Trigger: typeof ComboboxTrigger;
};

declare const index_Combobox: typeof Combobox;
declare const index_ComboboxContentCommonProps: typeof ComboboxContentCommonProps;
declare const index_ComboboxContentOptions: typeof ComboboxContentOptions;
declare const index_ComboboxContentProps: typeof ComboboxContentProps;
declare const index_ComboboxContentRenderProps: typeof ComboboxContentRenderProps;
declare const index_ComboboxContextValue: typeof ComboboxContextValue;
declare const index_ComboboxControlCommonProps: typeof ComboboxControlCommonProps;
declare const index_ComboboxControlOptions: typeof ComboboxControlOptions;
declare const index_ComboboxControlProps: typeof ComboboxControlProps;
declare const index_ComboboxControlRenderProps: typeof ComboboxControlRenderProps;
declare const index_ComboboxHiddenSelectProps: typeof ComboboxHiddenSelectProps;
declare const index_ComboboxIconProps: typeof ComboboxIconProps;
declare const index_ComboboxInputCommonProps: typeof ComboboxInputCommonProps;
declare const index_ComboboxInputOptions: typeof ComboboxInputOptions;
declare const index_ComboboxInputProps: typeof ComboboxInputProps;
declare const index_ComboboxInputRenderProps: typeof ComboboxInputRenderProps;
declare const index_ComboboxListboxCommonProps: typeof ComboboxListboxCommonProps;
declare const index_ComboboxListboxOptions: typeof ComboboxListboxOptions;
declare const index_ComboboxListboxProps: typeof ComboboxListboxProps;
declare const index_ComboboxListboxRenderProps: typeof ComboboxListboxRenderProps;
declare const index_ComboboxMultipleSelectionOptions: typeof ComboboxMultipleSelectionOptions;
declare const index_ComboboxPortalProps: typeof ComboboxPortalProps;
declare const index_ComboboxRootCommonProps: typeof ComboboxRootCommonProps;
declare const index_ComboboxRootOptions: typeof ComboboxRootOptions;
declare const index_ComboboxRootProps: typeof ComboboxRootProps;
declare const index_ComboboxRootRenderProps: typeof ComboboxRootRenderProps;
declare const index_ComboboxSingleSelectionOptions: typeof ComboboxSingleSelectionOptions;
type index_ComboboxTriggerCommonProps<T extends HTMLElement = HTMLElement> = ComboboxTriggerCommonProps<T>;
declare const index_ComboboxTriggerMode: typeof ComboboxTriggerMode;
type index_ComboboxTriggerOptions = ComboboxTriggerOptions;
type index_ComboboxTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = ComboboxTriggerProps<T>;
type index_ComboboxTriggerRenderProps = ComboboxTriggerRenderProps;
declare const index_useComboboxContext: typeof useComboboxContext;
declare namespace index {
  export {
    PopperArrow as Arrow,
    index_Combobox as Combobox,
    PopperArrowOptions as ComboboxArrowOptions,
    PopperArrowProps as ComboboxArrowProps,
    index_ComboboxContentCommonProps as ComboboxContentCommonProps,
    index_ComboboxContentOptions as ComboboxContentOptions,
    index_ComboboxContentProps as ComboboxContentProps,
    index_ComboboxContentRenderProps as ComboboxContentRenderProps,
    index_ComboboxContextValue as ComboboxContextValue,
    index_ComboboxControlCommonProps as ComboboxControlCommonProps,
    index_ComboboxControlOptions as ComboboxControlOptions,
    index_ComboboxControlProps as ComboboxControlProps,
    index_ComboboxControlRenderProps as ComboboxControlRenderProps,
    FormControlDescriptionCommonProps as ComboboxDescriptionCommonProps,
    FormControlDescriptionOptions as ComboboxDescriptionOptions,
    FormControlDescriptionProps as ComboboxDescriptionProps,
    FormControlDescriptionRenderProps as ComboboxDescriptionRenderProps,
    FormControlErrorMessageCommonProps as ComboboxErrorMessageCommonProps,
    FormControlErrorMessageOptions as ComboboxErrorMessageOptions,
    FormControlErrorMessageProps as ComboboxErrorMessageProps,
    FormControlErrorMessageRenderProps as ComboboxErrorMessageRenderProps,
    index_ComboboxHiddenSelectProps as ComboboxHiddenSelectProps,
    index_ComboboxIconProps as ComboboxIconProps,
    index_ComboboxInputCommonProps as ComboboxInputCommonProps,
    index_ComboboxInputOptions as ComboboxInputOptions,
    index_ComboboxInputProps as ComboboxInputProps,
    index_ComboboxInputRenderProps as ComboboxInputRenderProps,
    ListboxItemCommonProps as ComboboxItemCommonProps,
    ListboxItemDescriptionCommonProps as ComboboxItemDescriptionCommonProps,
    ListboxItemDescriptionOptions as ComboboxItemDescriptionOptions,
    ListboxItemDescriptionProps as ComboboxItemDescriptionProps,
    ListboxItemDescriptionRenderProps as ComboboxItemDescriptionRenderProps,
    ListboxItemIndicatorCommonProps as ComboboxItemIndicatorCommonProps,
    ListboxItemIndicatorOptions as ComboboxItemIndicatorOptions,
    ListboxItemIndicatorProps as ComboboxItemIndicatorProps,
    ListboxItemIndicatorRenderProps as ComboboxItemIndicatorRenderProps,
    ListboxItemLabelCommonProps as ComboboxItemLabelCommonProps,
    ListboxItemLabelOptions as ComboboxItemLabelOptions,
    ListboxItemLabelProps as ComboboxItemLabelProps,
    ListboxItemLabelRenderProps as ComboboxItemLabelRenderProps,
    ListboxItemOptions as ComboboxItemOptions,
    ListboxItemProps as ComboboxItemProps,
    ListboxItemRenderProps as ComboboxItemRenderProps,
    FormControlLabelCommonProps as ComboboxLabelCommonProps,
    FormControlLabelOptions as ComboboxLabelOptions,
    FormControlLabelProps as ComboboxLabelProps,
    FormControlLabelRenderProps as ComboboxLabelRenderProps,
    index_ComboboxListboxCommonProps as ComboboxListboxCommonProps,
    index_ComboboxListboxOptions as ComboboxListboxOptions,
    index_ComboboxListboxProps as ComboboxListboxProps,
    index_ComboboxListboxRenderProps as ComboboxListboxRenderProps,
    index_ComboboxMultipleSelectionOptions as ComboboxMultipleSelectionOptions,
    index_ComboboxPortalProps as ComboboxPortalProps,
    index_ComboboxRootCommonProps as ComboboxRootCommonProps,
    ComboboxBaseItemComponentProps as ComboboxRootItemComponentProps,
    index_ComboboxRootOptions as ComboboxRootOptions,
    index_ComboboxRootProps as ComboboxRootProps,
    index_ComboboxRootRenderProps as ComboboxRootRenderProps,
    ComboboxBaseSectionComponentProps as ComboboxRootSectionComponentProps,
    ListboxSectionCommonProps as ComboboxSectionCommonProps,
    ListboxSectionOptions as ComboboxSectionOptions,
    ListboxSectionProps as ComboboxSectionProps,
    ListboxSectionRenderProps as ComboboxSectionRenderProps,
    index_ComboboxSingleSelectionOptions as ComboboxSingleSelectionOptions,
    index_ComboboxTriggerCommonProps as ComboboxTriggerCommonProps,
    index_ComboboxTriggerMode as ComboboxTriggerMode,
    index_ComboboxTriggerOptions as ComboboxTriggerOptions,
    index_ComboboxTriggerProps as ComboboxTriggerProps,
    index_ComboboxTriggerRenderProps as ComboboxTriggerRenderProps,
    ComboboxContent as Content,
    ComboboxControl as Control,
    FormControlDescription as Description,
    FormControlErrorMessage as ErrorMessage,
    ComboboxHiddenSelect as HiddenSelect,
    ComboboxIcon as Icon,
    ComboboxInput as Input,
    ListboxItem as Item,
    ListboxItemDescription as ItemDescription,
    ListboxItemIndicator as ItemIndicator,
    ListboxItemLabel as ItemLabel,
    FormControlLabel as Label,
    ComboboxListbox as Listbox,
    ComboboxPortal as Portal,
    ComboboxRoot as Root,
    ListboxSection as Section,
    ComboboxTrigger as Trigger,
    index_useComboboxContext as useComboboxContext,
  };
}

export { ComboboxTriggerOptions as C, ComboboxTriggerCommonProps as a, ComboboxTriggerRenderProps as b, ComboboxTriggerProps as c, ComboboxTrigger as d, Combobox as e, index as i };
