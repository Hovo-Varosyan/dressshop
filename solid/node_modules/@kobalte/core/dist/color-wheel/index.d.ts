import { F as FormControlDataSet, a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as ColorWheelDescriptionCommonProps, b as ColorWheelDescriptionOptions, e as ColorWheelDescriptionProps, d as ColorWheelDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as ColorWheelErrorMessageCommonProps, a as ColorWheelErrorMessageOptions, d as ColorWheelErrorMessageProps, c as ColorWheelErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';
import { F as FormControlLabel } from '../form-control-label-2a5ca7a3.js';
export { b as ColorWheelLabelCommonProps, a as ColorWheelLabelOptions, d as ColorWheelLabelProps, c as ColorWheelLabelRenderProps } from '../form-control-label-2a5ca7a3.js';
import * as solid_js from 'solid-js';
import { ComponentProps, JSX, ValidComponent, Accessor } from 'solid-js';
import { ValidationState } from '@kobalte/utils';
import { d as ColorIntlTranslations, C as Color } from '../types-877adc4a.js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';

interface ColorWheelInputProps extends ComponentProps<"input"> {
    style?: JSX.CSSProperties | string;
}
declare function ColorWheelInput(props: ColorWheelInputProps): JSX.Element;

interface ColorWheelRootOptions {
    /** The localized strings of the component. */
    translations?: ColorIntlTranslations;
    /** The controlled value of the color wheel. */
    value?: Color;
    /** The value of the color wheel when initially rendered. */
    defaultValue?: Color;
    /** The thickness of the track. */
    thickness: number;
    /** Event handler called when the value changes. */
    onChange?: (value: Color) => void;
    /** Called when the value changes at the end of an interaction. */
    onChangeEnd?: (value: Color) => void;
    /**
     * A function to get the accessible label text representing the current value in a human-readable format.
     */
    getValueLabel?: (param: Color) => string;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * The name of the color wheel, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /** Whether the color wheel should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must select an item before the owning form can be submitted. */
    required?: boolean;
    /** Whether the color wheel is disabled. */
    disabled?: boolean;
    /** Whether the color wheel is read only. */
    readOnly?: boolean;
}
interface ColorWheelRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface ColorWheelRootRenderProps extends ColorWheelRootCommonProps, FormControlDataSet {
    role: "group";
}
type ColorWheelRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorWheelRootOptions & Partial<ColorWheelRootCommonProps<ElementOf<T>>>;
declare function ColorWheelRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorWheelRootProps<T>>): solid_js.JSX.Element;

interface ColorWheelThumbOptions {
}
interface ColorWheelThumbCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    style: JSX.CSSProperties | string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
}
interface ColorWheelThumbRenderProps extends ColorWheelThumbCommonProps {
    role: "slider";
    tabIndex: 0 | undefined;
    "aria-valuetext": string;
    "aria-valuemin": number;
    "aria-valuenow": number | undefined;
    "aria-valuemax": number;
}
type ColorWheelThumbProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorWheelThumbOptions & Partial<ColorWheelThumbCommonProps<ElementOf<T>>>;
declare function ColorWheelThumb<T extends ValidComponent = "span">(props: PolymorphicProps<T, ColorWheelThumbProps<T>>): JSX.Element;

interface ColorWheelTrackOptions {
}
interface ColorWheelTrackCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface ColorWheelTrackRenderProps extends ColorWheelTrackCommonProps, FormControlDataSet {
}
type ColorWheelTrackProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorWheelTrackOptions & Partial<ColorWheelTrackCommonProps<ElementOf<T>>>;
declare function ColorWheelTrack<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorWheelTrackProps<T>>): JSX.Element;

interface ColorWheelValueLabelOptions {
}
interface ColorWheelValueLabelCommonProps<T extends HTMLElement = HTMLElement> {
}
interface ColorWheelValueLabelRenderProps extends ColorWheelValueLabelCommonProps, FormControlDataSet {
    children: JSX.Element;
}
type ColorWheelValueLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorWheelValueLabelOptions & Partial<ColorWheelValueLabelCommonProps<ElementOf<T>>>;
declare function ColorWheelValueLabel<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorWheelValueLabelProps<T>>): JSX.Element;

interface ColorWheelState {
    readonly value: Accessor<Color>;
    setValue: (value: Color) => void;
    readonly hue: Accessor<number>;
    setHue: (value: number) => void;
    step: Accessor<number>;
    pageSize: Accessor<number>;
    maxValue: Accessor<number>;
    minValue: Accessor<number>;
    increment: (stepSize: number) => void;
    decrement: (stepSize: number) => void;
    getThumbPosition: () => {
        x: number;
        y: number;
    };
    setThumbValue: (x: number, y: number, radius: number) => void;
    readonly isDragging: Accessor<boolean>;
    setIsDragging: (value: boolean) => void;
    resetValue: () => void;
    readonly isDisabled: Accessor<boolean>;
}

interface ColorWheelContextValue {
    state: ColorWheelState;
    outerRadius: Accessor<number | undefined>;
    thickness: Accessor<number>;
    onDragStart: ((value: number[]) => void) | undefined;
    onDrag: ((deltas: {
        deltaX: number;
        deltaY: number;
    }) => void) | undefined;
    onDragEnd: (() => void) | undefined;
    getThumbValueLabel: () => string;
    getValueLabel: (param: Color) => string;
    onStepKeyDown: (event: KeyboardEvent) => void;
    thumbRef: Accessor<HTMLElement | undefined>;
    setThumbRef: (el: HTMLElement) => void;
    trackRef: Accessor<HTMLElement | undefined>;
    setTrackRef: (el: HTMLElement) => void;
    generateId: (part: string) => string;
}
declare function useColorWheelContext(): ColorWheelContextValue;

declare const ColorWheel: typeof ColorWheelRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Input: typeof ColorWheelInput;
    Label: typeof FormControlLabel;
    Thumb: typeof ColorWheelThumb;
    Track: typeof ColorWheelTrack;
    ValueLabel: typeof ColorWheelValueLabel;
};

export { ColorWheel, ColorWheelContextValue, ColorWheelInputProps, ColorWheelRootCommonProps, ColorWheelRootOptions, ColorWheelRootProps, ColorWheelRootRenderProps, ColorWheelThumbCommonProps, ColorWheelThumbOptions, ColorWheelThumbProps, ColorWheelThumbRenderProps, ColorWheelTrackCommonProps, ColorWheelTrackOptions, ColorWheelTrackProps, ColorWheelTrackRenderProps, ColorWheelValueLabelCommonProps, ColorWheelValueLabelOptions, ColorWheelValueLabelProps, ColorWheelValueLabelRenderProps, FormControlDescription as Description, FormControlErrorMessage as ErrorMessage, ColorWheelInput as Input, FormControlLabel as Label, ColorWheelRoot as Root, ColorWheelThumb as Thumb, ColorWheelTrack as Track, ColorWheelValueLabel as ValueLabel, useColorWheelContext };
