import { a as FormControlDescription, c as FormControlDescriptionCommonProps, b as FormControlDescriptionOptions, e as FormControlDescriptionProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { F as FormControlErrorMessage, b as FormControlErrorMessageCommonProps, a as FormControlErrorMessageOptions, d as FormControlErrorMessageProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { F as FormControlLabel, b as FormControlLabelCommonProps, a as FormControlLabelOptions, d as FormControlLabelProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
import { JSX, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { S as SliderDataSet, a as SliderRoot, b as SliderInput, c as SliderThumb, d as SliderTrack, e as SliderValueLabel, f as SliderContextValue, G as GetValueLabelParams, g as SliderInputProps, h as SliderRootCommonProps, i as SliderRootOptions, j as SliderRootProps, k as SliderRootRenderProps, l as SliderThumbCommonProps, m as SliderThumbOptions, n as SliderThumbProps, o as SliderThumbRenderProps, p as SliderTrackCommonProps, q as SliderTrackOptions, r as SliderTrackProps, s as SliderTrackRenderProps, t as SliderValueLabelCommonProps, u as SliderValueLabelOptions, v as SliderValueLabelProps, w as SliderValueLabelRenderProps, x as useSliderContext } from './slider-value-label-2be90f59.js';

interface SliderFillOptions {
}
interface SliderFillCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
}
interface SliderFillRenderProps extends SliderFillCommonProps, SliderDataSet {
}
type SliderFillProps<T extends ValidComponent | HTMLElement = HTMLElement> = SliderFillOptions & Partial<SliderFillCommonProps<ElementOf<T>>>;
/**
 * The component that visually represents the slider value.
 * Used to visually show the fill of `Slider.Track`.
 */
declare function SliderFill<T extends ValidComponent = "div">(props: PolymorphicProps<T, SliderFillProps<T>>): JSX.Element;

declare const Slider: typeof SliderRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Fill: typeof SliderFill;
    Input: typeof SliderInput;
    Label: typeof FormControlLabel;
    Thumb: typeof SliderThumb;
    Track: typeof SliderTrack;
    ValueLabel: typeof SliderValueLabel;
};

declare const index_Slider: typeof Slider;
declare const index_SliderContextValue: typeof SliderContextValue;
type index_SliderFillCommonProps<T extends HTMLElement = HTMLElement> = SliderFillCommonProps<T>;
type index_SliderFillOptions = SliderFillOptions;
type index_SliderFillProps<T extends ValidComponent | HTMLElement = HTMLElement> = SliderFillProps<T>;
type index_SliderFillRenderProps = SliderFillRenderProps;
declare const index_SliderInputProps: typeof SliderInputProps;
declare const index_SliderRootCommonProps: typeof SliderRootCommonProps;
declare const index_SliderRootOptions: typeof SliderRootOptions;
declare const index_SliderRootProps: typeof SliderRootProps;
declare const index_SliderRootRenderProps: typeof SliderRootRenderProps;
declare const index_SliderThumbCommonProps: typeof SliderThumbCommonProps;
declare const index_SliderThumbOptions: typeof SliderThumbOptions;
declare const index_SliderThumbProps: typeof SliderThumbProps;
declare const index_SliderThumbRenderProps: typeof SliderThumbRenderProps;
declare const index_SliderTrackCommonProps: typeof SliderTrackCommonProps;
declare const index_SliderTrackOptions: typeof SliderTrackOptions;
declare const index_SliderTrackProps: typeof SliderTrackProps;
declare const index_SliderTrackRenderProps: typeof SliderTrackRenderProps;
declare const index_SliderValueLabelCommonProps: typeof SliderValueLabelCommonProps;
declare const index_SliderValueLabelOptions: typeof SliderValueLabelOptions;
declare const index_SliderValueLabelProps: typeof SliderValueLabelProps;
declare const index_SliderValueLabelRenderProps: typeof SliderValueLabelRenderProps;
declare const index_useSliderContext: typeof useSliderContext;
declare namespace index {
  export {
    FormControlDescription as Description,
    FormControlErrorMessage as ErrorMessage,
    SliderFill as Fill,
    SliderInput as Input,
    FormControlLabel as Label,
    SliderRoot as Root,
    index_Slider as Slider,
    index_SliderContextValue as SliderContextValue,
    FormControlDescriptionCommonProps as SliderDescriptionCommonProps,
    FormControlDescriptionOptions as SliderDescriptionOptions,
    FormControlDescriptionProps as SliderDescriptionProps,
    FormControlDescriptionRenderProps as SliderDescriptionRenderProps,
    FormControlErrorMessageCommonProps as SliderErrorMessageCommonProps,
    FormControlErrorMessageOptions as SliderErrorMessageOptions,
    FormControlErrorMessageProps as SliderErrorMessageProps,
    FormControlErrorMessageRenderProps as SliderErrorMessageRenderProps,
    index_SliderFillCommonProps as SliderFillCommonProps,
    index_SliderFillOptions as SliderFillOptions,
    index_SliderFillProps as SliderFillProps,
    index_SliderFillRenderProps as SliderFillRenderProps,
    GetValueLabelParams as SliderGetValueLabelParams,
    index_SliderInputProps as SliderInputProps,
    FormControlLabelCommonProps as SliderLabelCommonProps,
    FormControlLabelOptions as SliderLabelOptions,
    FormControlLabelProps as SliderLabelProps,
    FormControlLabelRenderProps as SliderLabelRenderProps,
    index_SliderRootCommonProps as SliderRootCommonProps,
    index_SliderRootOptions as SliderRootOptions,
    index_SliderRootProps as SliderRootProps,
    index_SliderRootRenderProps as SliderRootRenderProps,
    index_SliderThumbCommonProps as SliderThumbCommonProps,
    index_SliderThumbOptions as SliderThumbOptions,
    index_SliderThumbProps as SliderThumbProps,
    index_SliderThumbRenderProps as SliderThumbRenderProps,
    index_SliderTrackCommonProps as SliderTrackCommonProps,
    index_SliderTrackOptions as SliderTrackOptions,
    index_SliderTrackProps as SliderTrackProps,
    index_SliderTrackRenderProps as SliderTrackRenderProps,
    index_SliderValueLabelCommonProps as SliderValueLabelCommonProps,
    index_SliderValueLabelOptions as SliderValueLabelOptions,
    index_SliderValueLabelProps as SliderValueLabelProps,
    index_SliderValueLabelRenderProps as SliderValueLabelRenderProps,
    SliderThumb as Thumb,
    SliderTrack as Track,
    SliderValueLabel as ValueLabel,
    index_useSliderContext as useSliderContext,
  };
}

export { SliderFillOptions as S, SliderFillCommonProps as a, SliderFillRenderProps as b, SliderFillProps as c, SliderFill as d, Slider as e, index as i };
