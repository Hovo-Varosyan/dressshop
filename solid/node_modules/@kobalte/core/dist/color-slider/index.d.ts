import { a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as ColorSliderDescriptionCommonProps, b as ColorSliderDescriptionOptions, e as ColorSliderDescriptionProps, d as ColorSliderDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as ColorSliderErrorMessageCommonProps, a as ColorSliderErrorMessageOptions, d as ColorSliderErrorMessageProps, c as ColorSliderErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';
import { F as FormControlLabel } from '../form-control-label-2a5ca7a3.js';
export { b as ColorSliderLabelCommonProps, a as ColorSliderLabelOptions, d as ColorSliderLabelProps, c as ColorSliderLabelRenderProps } from '../form-control-label-2a5ca7a3.js';
import { k as SliderRootRenderProps, m as SliderThumbOptions, o as SliderThumbRenderProps, q as SliderTrackOptions, s as SliderTrackRenderProps, b as SliderInput, e as SliderValueLabel } from '../slider-value-label-2be90f59.js';
export { g as ColorSliderInputProps, t as ColorSliderValueLabelCommonProps, u as ColorSliderValueLabelOptions, v as ColorSliderValueLabelProps, w as ColorSliderValueLabelRenderProps } from '../slider-value-label-2be90f59.js';
import * as solid_js from 'solid-js';
import { ValidComponent, JSX, Accessor } from 'solid-js';
import { ValidationState } from '@kobalte/utils';
import { C as Color, b as ColorChannel, a as ColorSpace, d as ColorIntlTranslations } from '../types-877adc4a.js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import '../types-f8ae18e5.js';
import '../types-6adf33e1.js';

interface ColorSliderRootOptions {
    /** The controlled values of the slider. */
    value?: Color;
    /** The value of the slider when initially rendered. */
    defaultValue?: Color;
    /** Called when the value changes. */
    onChange?: (value: Color) => void;
    /** Called when the value changes at the end of an interaction. */
    onChangeEnd?: (value: Color) => void;
    /** The color channel that the slider manipulates. */
    channel: ColorChannel;
    /** The color space that the slider operates in. The `channel` must be in this color space.
     */
    colorSpace?: ColorSpace;
    /**
     * The orientation of the slider.
     * @default horizontal
     */
    orientation?: "horizontal" | "vertical";
    /**
     * A function to get the accessible label text representing the current value in a human-readable format.
     */
    getValueLabel?: (value: Color) => string;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * The name of the slider, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /** Whether the slider should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must fill the slider before the owning form can be submitted. */
    required?: boolean;
    /** Whether the slider is disabled. */
    disabled?: boolean;
    /** Whether the slider is read only. */
    readOnly?: boolean;
    /** The localized strings of the component. */
    translations?: ColorIntlTranslations;
}
interface ColorSliderRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ColorSliderRootRenderProps extends ColorSliderRootCommonProps, SliderRootRenderProps {
}
type ColorSliderRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorSliderRootOptions & Partial<ColorSliderRootCommonProps<ElementOf<T>>>;
declare function ColorSliderRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorSliderRootProps<T>>): solid_js.JSX.Element;

interface ColorSliderThumbOptions extends SliderThumbOptions {
}
interface ColorSliderThumbCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
}
interface ColorSliderThumbRenderProps extends ColorSliderThumbCommonProps, SliderThumbRenderProps {
}
type ColorSliderThumbProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorSliderThumbOptions & Partial<ColorSliderThumbCommonProps<ElementOf<T>>>;
declare function ColorSliderThumb<T extends ValidComponent = "span">(props: PolymorphicProps<T, ColorSliderThumbProps<T>>): JSX.Element;

interface ColorSliderTrackOptions extends SliderTrackOptions {
}
interface ColorSliderTrackCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
}
interface ColorSliderTrackRenderProps extends ColorSliderTrackCommonProps, SliderTrackRenderProps {
}
type ColorSliderTrackProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorSliderTrackOptions & Partial<ColorSliderTrackCommonProps<ElementOf<T>>>;
declare function ColorSliderTrack<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorSliderTrackProps<T>>): JSX.Element;

interface ColorSliderContextValue {
    readonly value: Accessor<Color>;
    channel: Accessor<ColorChannel>;
    getDisplayColor: () => Color;
    translations: Accessor<ColorIntlTranslations>;
}
declare function useColorSliderContext(): ColorSliderContextValue;

declare const ColorSlider: typeof ColorSliderRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Input: typeof SliderInput;
    Label: typeof FormControlLabel;
    Thumb: typeof ColorSliderThumb;
    Track: typeof ColorSliderTrack;
    ValueLabel: typeof SliderValueLabel;
};

export { ColorSlider, ColorSliderContextValue, ColorSliderRootCommonProps, ColorSliderRootOptions, ColorSliderRootProps, ColorSliderRootRenderProps, ColorSliderThumbCommonProps, ColorSliderThumbOptions, ColorSliderThumbProps, ColorSliderThumbRenderProps, ColorSliderTrackCommonProps, ColorSliderTrackOptions, ColorSliderTrackProps, ColorSliderTrackRenderProps, FormControlDescription as Description, FormControlErrorMessage as ErrorMessage, SliderInput as Input, FormControlLabel as Label, ColorSliderRoot as Root, ColorSliderThumb as Thumb, ColorSliderTrack as Track, SliderValueLabel as ValueLabel, useColorSliderContext };
