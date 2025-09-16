import { a as FormControlDescription, c as FormControlDescriptionCommonProps, b as FormControlDescriptionOptions, e as FormControlDescriptionProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { F as FormControlErrorMessage, b as FormControlErrorMessageCommonProps, a as FormControlErrorMessageOptions, d as FormControlErrorMessageProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { F as FormControlLabel, b as FormControlLabelCommonProps, a as FormControlLabelOptions, d as FormControlLabelProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
import { s as NumberFieldRoot, b as NumberFieldHiddenInput, c as NumberFieldInput, d as NumberFieldIncrementTrigger, e as NumberFieldDecrementTrigger, p as NumberFieldDecrementTriggerCommonProps, o as NumberFieldDecrementTriggerOptions, r as NumberFieldDecrementTriggerProps, q as NumberFieldDecrementTriggerRenderProps, j as NumberFieldHiddenInputProps, l as NumberFieldIncrementTriggerCommonProps, k as NumberFieldIncrementTriggerOptions, n as NumberFieldIncrementTriggerProps, m as NumberFieldIncrementTriggerRenderProps, g as NumberFieldInputCommonProps, f as NumberFieldInputOptions, i as NumberFieldInputProps, h as NumberFieldInputRenderProps, t as NumberFieldRootCommonProps, N as NumberFieldRootOptions, u as NumberFieldRootProps, a as NumberFieldRootRenderProps } from './number-field-root-30f25adc.js';
import { Accessor, JSX } from 'solid-js';
import { e as SpinButtonIntlTranslations } from './spin-button-root-3a44420a.js';

interface NumberFieldContextValue {
    value: Accessor<number | string | undefined>;
    setValue: (value: number | string) => void;
    rawValue: Accessor<number>;
    generateId: (part: string) => string;
    formatNumber: (number: number) => string;
    format: () => void;
    onInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>;
    textValue: Accessor<string | undefined>;
    minValue: Accessor<number>;
    maxValue: Accessor<number>;
    step: Accessor<number>;
    largeStep: Accessor<number>;
    changeOnWheel: Accessor<boolean>;
    translations: Accessor<SpinButtonIntlTranslations | undefined>;
    inputRef: Accessor<HTMLInputElement | undefined>;
    setInputRef: (el: HTMLInputElement) => void;
    hiddenInputRef: Accessor<HTMLInputElement | undefined>;
    setHiddenInputRef: (el: HTMLInputElement) => void;
    varyValue: (offset: number) => void;
}
declare function useNumberFieldContext(): NumberFieldContextValue;

declare const NumberField: typeof NumberFieldRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    HiddenInput: typeof NumberFieldHiddenInput;
    Input: typeof NumberFieldInput;
    IncrementTrigger: typeof NumberFieldIncrementTrigger;
    DecrementTrigger: typeof NumberFieldDecrementTrigger;
    Label: typeof FormControlLabel;
};

declare const index_NumberField: typeof NumberField;
type index_NumberFieldContextValue = NumberFieldContextValue;
declare const index_NumberFieldDecrementTriggerCommonProps: typeof NumberFieldDecrementTriggerCommonProps;
declare const index_NumberFieldDecrementTriggerOptions: typeof NumberFieldDecrementTriggerOptions;
declare const index_NumberFieldDecrementTriggerProps: typeof NumberFieldDecrementTriggerProps;
declare const index_NumberFieldDecrementTriggerRenderProps: typeof NumberFieldDecrementTriggerRenderProps;
declare const index_NumberFieldHiddenInputProps: typeof NumberFieldHiddenInputProps;
declare const index_NumberFieldIncrementTriggerCommonProps: typeof NumberFieldIncrementTriggerCommonProps;
declare const index_NumberFieldIncrementTriggerOptions: typeof NumberFieldIncrementTriggerOptions;
declare const index_NumberFieldIncrementTriggerProps: typeof NumberFieldIncrementTriggerProps;
declare const index_NumberFieldIncrementTriggerRenderProps: typeof NumberFieldIncrementTriggerRenderProps;
declare const index_NumberFieldInputCommonProps: typeof NumberFieldInputCommonProps;
declare const index_NumberFieldInputOptions: typeof NumberFieldInputOptions;
declare const index_NumberFieldInputProps: typeof NumberFieldInputProps;
declare const index_NumberFieldInputRenderProps: typeof NumberFieldInputRenderProps;
declare const index_NumberFieldRootCommonProps: typeof NumberFieldRootCommonProps;
declare const index_NumberFieldRootOptions: typeof NumberFieldRootOptions;
declare const index_NumberFieldRootProps: typeof NumberFieldRootProps;
declare const index_NumberFieldRootRenderProps: typeof NumberFieldRootRenderProps;
declare const index_useNumberFieldContext: typeof useNumberFieldContext;
declare namespace index {
  export {
    NumberFieldDecrementTrigger as DecrementTrigger,
    FormControlDescription as Description,
    FormControlErrorMessage as ErrorMessage,
    NumberFieldHiddenInput as HiddenInput,
    NumberFieldIncrementTrigger as IncrementTrigger,
    NumberFieldInput as Input,
    FormControlLabel as Label,
    index_NumberField as NumberField,
    index_NumberFieldContextValue as NumberFieldContextValue,
    index_NumberFieldDecrementTriggerCommonProps as NumberFieldDecrementTriggerCommonProps,
    index_NumberFieldDecrementTriggerOptions as NumberFieldDecrementTriggerOptions,
    index_NumberFieldDecrementTriggerProps as NumberFieldDecrementTriggerProps,
    index_NumberFieldDecrementTriggerRenderProps as NumberFieldDecrementTriggerRenderProps,
    FormControlDescriptionCommonProps as NumberFieldDescriptionCommonProps,
    FormControlDescriptionOptions as NumberFieldDescriptionOptions,
    FormControlDescriptionProps as NumberFieldDescriptionProps,
    FormControlDescriptionRenderProps as NumberFieldDescriptionRenderProps,
    FormControlErrorMessageCommonProps as NumberFieldErrorMessageCommonProps,
    FormControlErrorMessageOptions as NumberFieldErrorMessageOptions,
    FormControlErrorMessageProps as NumberFieldErrorMessageProps,
    FormControlErrorMessageRenderProps as NumberFieldErrorMessageRenderProps,
    index_NumberFieldHiddenInputProps as NumberFieldHiddenInputProps,
    index_NumberFieldIncrementTriggerCommonProps as NumberFieldIncrementTriggerCommonProps,
    index_NumberFieldIncrementTriggerOptions as NumberFieldIncrementTriggerOptions,
    index_NumberFieldIncrementTriggerProps as NumberFieldIncrementTriggerProps,
    index_NumberFieldIncrementTriggerRenderProps as NumberFieldIncrementTriggerRenderProps,
    index_NumberFieldInputCommonProps as NumberFieldInputCommonProps,
    index_NumberFieldInputOptions as NumberFieldInputOptions,
    index_NumberFieldInputProps as NumberFieldInputProps,
    index_NumberFieldInputRenderProps as NumberFieldInputRenderProps,
    FormControlLabelCommonProps as NumberFieldLabelCommonProps,
    FormControlLabelOptions as NumberFieldLabelOptions,
    FormControlLabelProps as NumberFieldLabelProps,
    FormControlLabelRenderProps as NumberFieldLabelRenderProps,
    index_NumberFieldRootCommonProps as NumberFieldRootCommonProps,
    index_NumberFieldRootOptions as NumberFieldRootOptions,
    index_NumberFieldRootProps as NumberFieldRootProps,
    index_NumberFieldRootRenderProps as NumberFieldRootRenderProps,
    NumberFieldRoot as Root,
    index_useNumberFieldContext as useNumberFieldContext,
  };
}

export { NumberField as N, NumberFieldContextValue as a, index as i, useNumberFieldContext as u };
