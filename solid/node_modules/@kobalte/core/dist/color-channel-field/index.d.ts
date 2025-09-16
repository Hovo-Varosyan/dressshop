import { a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as ColorChannelFieldDescriptionCommonProps, b as ColorChannelFieldDescriptionOptions, e as ColorChannelFieldDescriptionProps, d as ColorChannelFieldDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as ColorChannelFieldErrorMessageCommonProps, a as ColorChannelFieldErrorMessageOptions, d as ColorChannelFieldErrorMessageProps, c as ColorChannelFieldErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';
import { F as FormControlLabel } from '../form-control-label-2a5ca7a3.js';
export { b as ColorChannelFieldLabelCommonProps, a as ColorChannelFieldLabelOptions, d as ColorChannelFieldLabelProps, c as ColorChannelFieldLabelRenderProps } from '../form-control-label-2a5ca7a3.js';
import { N as NumberFieldRootOptions, a as NumberFieldRootRenderProps, b as NumberFieldHiddenInput, c as NumberFieldInput, d as NumberFieldIncrementTrigger, e as NumberFieldDecrementTrigger } from '../number-field-root-30f25adc.js';
export { p as ColorChannelFieldDecrementTriggerCommonProps, o as ColorChannelFieldDecrementTriggerOptions, r as ColorChannelFieldDecrementTriggerProps, q as ColorChannelFieldDecrementTriggerRenderProps, j as ColorChannelFieldHiddenInputProps, l as ColorChannelFieldIncrementTriggerCommonProps, k as ColorChannelFieldIncrementTriggerOptions, n as ColorChannelFieldIncrementTriggerProps, m as ColorChannelFieldIncrementTriggerRenderProps, g as ColorChannelFieldInputCommonProps, f as ColorChannelFieldInputOptions, i as ColorChannelFieldInputProps, h as ColorChannelFieldInputRenderProps } from '../number-field-root-30f25adc.js';
import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { C as Color, b as ColorChannel, a as ColorSpace } from '../types-877adc4a.js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import '@kobalte/utils';
import '../button-root-da654b3e.js';
import '../spin-button-root-3a44420a.js';

interface ColorChannelFieldRootOptions extends Omit<NumberFieldRootOptions, "value" | "defaultValue" | "rawValue" | "onChange" | "onRawValueChange" | "formatOptions" | "allowedInput"> {
    /** The controlled formatted value of the field. */
    value?: Color;
    /** The default formatted value when initially rendered. */
    defaultValue?: Color;
    /** Event handler called when the value of the field changes. */
    onChange?: (value: Color) => void;
    /** The color channel that the field manipulates. */
    channel: ColorChannel;
    /** The color space that the field operates in. The `channel` must be in this color space.
     */
    colorSpace?: ColorSpace;
}
interface ColorChannelFieldRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ColorChannelFieldRootRenderProps extends ColorChannelFieldRootCommonProps, NumberFieldRootRenderProps {
}
type ColorChannelFieldRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorChannelFieldRootOptions & Partial<ColorChannelFieldRootCommonProps<ElementOf<T>>>;
declare function ColorChannelFieldRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorChannelFieldRootProps<T>>): solid_js.JSX.Element;

declare const ColorChannelField: typeof ColorChannelFieldRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    HiddenInput: typeof NumberFieldHiddenInput;
    Input: typeof NumberFieldInput;
    IncrementTrigger: typeof NumberFieldIncrementTrigger;
    DecrementTrigger: typeof NumberFieldDecrementTrigger;
    Label: typeof FormControlLabel;
};

export { ColorChannelField, ColorChannelFieldRootCommonProps, ColorChannelFieldRootOptions, ColorChannelFieldRootProps, ColorChannelFieldRootRenderProps, NumberFieldDecrementTrigger as DecrementTrigger, FormControlDescription as Description, FormControlErrorMessage as ErrorMessage, NumberFieldHiddenInput as HiddenInput, NumberFieldIncrementTrigger as IncrementTrigger, NumberFieldInput as Input, FormControlLabel as Label, ColorChannelFieldRoot as Root };
