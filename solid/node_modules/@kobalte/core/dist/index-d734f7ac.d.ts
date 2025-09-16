import { a as FormControlDescription, c as FormControlDescriptionCommonProps, b as FormControlDescriptionOptions, e as FormControlDescriptionProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { F as FormControlErrorMessage, b as FormControlErrorMessageCommonProps, a as FormControlErrorMessageOptions, d as FormControlErrorMessageProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { R as RadioGroupRoot, a as RadioGroupItem, b as RadioGroupItemControl, c as RadioGroupItemDescription, d as RadioGroupItemIndicator, e as RadioGroupItemInput, f as RadioGroupItemLabel, g as RadioGroupLabel, h as RadioGroupItemCommonProps, i as RadioGroupItemControlCommonProps, j as RadioGroupItemControlOptions, k as RadioGroupItemControlProps, l as RadioGroupItemControlRenderProps, m as RadioGroupItemDescriptionCommonProps, n as RadioGroupItemDescriptionOptions, o as RadioGroupItemDescriptionProps, p as RadioGroupItemDescriptionRenderProps, q as RadioGroupItemIndicatorCommonProps, r as RadioGroupItemIndicatorOptions, s as RadioGroupItemIndicatorProps, t as RadioGroupItemIndicatorRenderProps, u as RadioGroupItemInputCommonProps, v as RadioGroupItemInputOptions, w as RadioGroupItemInputProps, x as RadioGroupItemInputRenderProps, y as RadioGroupItemLabelCommonProps, z as RadioGroupItemLabelOptions, A as RadioGroupItemLabelProps, B as RadioGroupItemLabelRenderProps, C as RadioGroupItemOptions, D as RadioGroupItemProps, E as RadioGroupItemRenderProps, F as RadioGroupLabelCommonProps, G as RadioGroupLabelOptions, H as RadioGroupLabelProps, I as RadioGroupLabelRenderProps, J as RadioGroupRootCommonProps, K as RadioGroupRootOptions, L as RadioGroupRootProps, M as RadioGroupRootRenderProps } from './radio-group-root-0af7f9b9.js';
import { Accessor } from 'solid-js';

interface RadioGroupContextValue {
    ariaDescribedBy: Accessor<string | undefined>;
    isDefaultValue: (value: string) => boolean;
    isSelectedValue: (value: string) => boolean;
    setSelectedValue: (value: string) => void;
}
declare function useRadioGroupContext(): RadioGroupContextValue;

declare const RadioGroup: typeof RadioGroupRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Item: typeof RadioGroupItem;
    ItemControl: typeof RadioGroupItemControl;
    ItemDescription: typeof RadioGroupItemDescription;
    ItemIndicator: typeof RadioGroupItemIndicator;
    ItemInput: typeof RadioGroupItemInput;
    ItemLabel: typeof RadioGroupItemLabel;
    Label: typeof RadioGroupLabel;
};

declare const index_RadioGroup: typeof RadioGroup;
type index_RadioGroupContextValue = RadioGroupContextValue;
declare const index_RadioGroupItemCommonProps: typeof RadioGroupItemCommonProps;
declare const index_RadioGroupItemControlCommonProps: typeof RadioGroupItemControlCommonProps;
declare const index_RadioGroupItemControlOptions: typeof RadioGroupItemControlOptions;
declare const index_RadioGroupItemControlProps: typeof RadioGroupItemControlProps;
declare const index_RadioGroupItemControlRenderProps: typeof RadioGroupItemControlRenderProps;
declare const index_RadioGroupItemDescriptionCommonProps: typeof RadioGroupItemDescriptionCommonProps;
declare const index_RadioGroupItemDescriptionOptions: typeof RadioGroupItemDescriptionOptions;
declare const index_RadioGroupItemDescriptionProps: typeof RadioGroupItemDescriptionProps;
declare const index_RadioGroupItemDescriptionRenderProps: typeof RadioGroupItemDescriptionRenderProps;
declare const index_RadioGroupItemIndicatorCommonProps: typeof RadioGroupItemIndicatorCommonProps;
declare const index_RadioGroupItemIndicatorOptions: typeof RadioGroupItemIndicatorOptions;
declare const index_RadioGroupItemIndicatorProps: typeof RadioGroupItemIndicatorProps;
declare const index_RadioGroupItemIndicatorRenderProps: typeof RadioGroupItemIndicatorRenderProps;
declare const index_RadioGroupItemInputCommonProps: typeof RadioGroupItemInputCommonProps;
declare const index_RadioGroupItemInputOptions: typeof RadioGroupItemInputOptions;
declare const index_RadioGroupItemInputProps: typeof RadioGroupItemInputProps;
declare const index_RadioGroupItemInputRenderProps: typeof RadioGroupItemInputRenderProps;
declare const index_RadioGroupItemLabelCommonProps: typeof RadioGroupItemLabelCommonProps;
declare const index_RadioGroupItemLabelOptions: typeof RadioGroupItemLabelOptions;
declare const index_RadioGroupItemLabelProps: typeof RadioGroupItemLabelProps;
declare const index_RadioGroupItemLabelRenderProps: typeof RadioGroupItemLabelRenderProps;
declare const index_RadioGroupItemOptions: typeof RadioGroupItemOptions;
declare const index_RadioGroupItemProps: typeof RadioGroupItemProps;
declare const index_RadioGroupItemRenderProps: typeof RadioGroupItemRenderProps;
declare const index_RadioGroupLabelCommonProps: typeof RadioGroupLabelCommonProps;
declare const index_RadioGroupLabelOptions: typeof RadioGroupLabelOptions;
declare const index_RadioGroupLabelProps: typeof RadioGroupLabelProps;
declare const index_RadioGroupLabelRenderProps: typeof RadioGroupLabelRenderProps;
declare const index_RadioGroupRootCommonProps: typeof RadioGroupRootCommonProps;
declare const index_RadioGroupRootOptions: typeof RadioGroupRootOptions;
declare const index_RadioGroupRootProps: typeof RadioGroupRootProps;
declare const index_RadioGroupRootRenderProps: typeof RadioGroupRootRenderProps;
declare const index_useRadioGroupContext: typeof useRadioGroupContext;
declare namespace index {
  export {
    FormControlDescription as Description,
    FormControlErrorMessage as ErrorMessage,
    RadioGroupItem as Item,
    RadioGroupItemControl as ItemControl,
    RadioGroupItemDescription as ItemDescription,
    RadioGroupItemIndicator as ItemIndicator,
    RadioGroupItemInput as ItemInput,
    RadioGroupItemLabel as ItemLabel,
    RadioGroupLabel as Label,
    index_RadioGroup as RadioGroup,
    index_RadioGroupContextValue as RadioGroupContextValue,
    FormControlDescriptionCommonProps as RadioGroupDescriptionCommonProps,
    FormControlDescriptionOptions as RadioGroupDescriptionOptions,
    FormControlDescriptionProps as RadioGroupDescriptionProps,
    FormControlDescriptionRenderProps as RadioGroupDescriptionRenderProps,
    FormControlErrorMessageCommonProps as RadioGroupErrorMessageCommonProps,
    FormControlErrorMessageOptions as RadioGroupErrorMessageOptions,
    FormControlErrorMessageProps as RadioGroupErrorMessageProps,
    FormControlErrorMessageRenderProps as RadioGroupErrorMessageRenderProps,
    index_RadioGroupItemCommonProps as RadioGroupItemCommonProps,
    index_RadioGroupItemControlCommonProps as RadioGroupItemControlCommonProps,
    index_RadioGroupItemControlOptions as RadioGroupItemControlOptions,
    index_RadioGroupItemControlProps as RadioGroupItemControlProps,
    index_RadioGroupItemControlRenderProps as RadioGroupItemControlRenderProps,
    index_RadioGroupItemDescriptionCommonProps as RadioGroupItemDescriptionCommonProps,
    index_RadioGroupItemDescriptionOptions as RadioGroupItemDescriptionOptions,
    index_RadioGroupItemDescriptionProps as RadioGroupItemDescriptionProps,
    index_RadioGroupItemDescriptionRenderProps as RadioGroupItemDescriptionRenderProps,
    index_RadioGroupItemIndicatorCommonProps as RadioGroupItemIndicatorCommonProps,
    index_RadioGroupItemIndicatorOptions as RadioGroupItemIndicatorOptions,
    index_RadioGroupItemIndicatorProps as RadioGroupItemIndicatorProps,
    index_RadioGroupItemIndicatorRenderProps as RadioGroupItemIndicatorRenderProps,
    index_RadioGroupItemInputCommonProps as RadioGroupItemInputCommonProps,
    index_RadioGroupItemInputOptions as RadioGroupItemInputOptions,
    index_RadioGroupItemInputProps as RadioGroupItemInputProps,
    index_RadioGroupItemInputRenderProps as RadioGroupItemInputRenderProps,
    index_RadioGroupItemLabelCommonProps as RadioGroupItemLabelCommonProps,
    index_RadioGroupItemLabelOptions as RadioGroupItemLabelOptions,
    index_RadioGroupItemLabelProps as RadioGroupItemLabelProps,
    index_RadioGroupItemLabelRenderProps as RadioGroupItemLabelRenderProps,
    index_RadioGroupItemOptions as RadioGroupItemOptions,
    index_RadioGroupItemProps as RadioGroupItemProps,
    index_RadioGroupItemRenderProps as RadioGroupItemRenderProps,
    index_RadioGroupLabelCommonProps as RadioGroupLabelCommonProps,
    index_RadioGroupLabelOptions as RadioGroupLabelOptions,
    index_RadioGroupLabelProps as RadioGroupLabelProps,
    index_RadioGroupLabelRenderProps as RadioGroupLabelRenderProps,
    index_RadioGroupRootCommonProps as RadioGroupRootCommonProps,
    index_RadioGroupRootOptions as RadioGroupRootOptions,
    index_RadioGroupRootProps as RadioGroupRootProps,
    index_RadioGroupRootRenderProps as RadioGroupRootRenderProps,
    RadioGroupRoot as Root,
    index_useRadioGroupContext as useRadioGroupContext,
  };
}

export { RadioGroup as R, RadioGroupContextValue as a, index as i, useRadioGroupContext as u };
