import * as solid_js from 'solid-js';
import { Accessor, ValidComponent, Setter, ComponentProps, JSX } from 'solid-js';
import { ValidationState, Orientation } from '@kobalte/utils';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { F as FormControlDataSet } from './form-control-description-330657bc.js';
import { c as CollectionItemWithRef } from './types-f8ae18e5.js';

interface SliderState {
    readonly values: Accessor<number[]>;
    getThumbValue(index: number): number;
    setThumbValue(index: number, value: number): void;
    getThumbPercent(index: number): number;
    setThumbPercent(index: number, percent: number): void;
    isThumbDragging(index: number): boolean;
    setThumbDragging(index: number, dragging: boolean): void;
    readonly focusedThumb: Accessor<number | undefined>;
    setFocusedThumb(index: number | undefined): void;
    getValuePercent(value: number): number;
    getThumbValueLabel(index: number): string;
    getFormattedValue(value: number): string;
    getThumbMinValue(index: number): number;
    getThumbMaxValue(index: number): number;
    getPercentValue(percent: number): number;
    isThumbEditable(index: number): boolean;
    setThumbEditable(index: number, editable: boolean): void;
    incrementThumb(index: number, stepSize?: number): void;
    decrementThumb(index: number, stepSize?: number): void;
    readonly step: Accessor<number>;
    readonly pageSize: Accessor<number>;
    readonly orientation: Accessor<"horizontal" | "vertical">;
    readonly isDisabled: Accessor<boolean>;
    setValues: (next: number[] | ((prev: number[]) => number[])) => void;
    resetValues: () => void;
}

interface GetValueLabelParams {
    values: number[];
    min: number;
    max: number;
}
interface SliderRootOptions {
    /** The slider values. */
    value?: number[];
    /** The value of the slider when initially rendered. */
    defaultValue?: number[];
    /** Called when the value changes. */
    onChange?: (value: number[]) => void;
    /** Called when the value changes at the end of an interaction. */
    onChangeEnd?: (value: number[]) => void;
    /**
     * Whether the slider is visually inverted.
     * @default false
     */
    inverted?: boolean;
    /**
     * The minimum slider value.
     * @default 0
     */
    minValue?: number;
    /**
     * The maximum slider value.
     * @default 100
     */
    maxValue?: number;
    /**
     * The step amount.
     * @default 1
     */
    step?: number;
    /**
     * The minimum permitted steps between multiple thumbs.
     * @default 0
     */
    minStepsBetweenThumbs?: number;
    /**
     * A function to get the accessible label text representing the current value in a human-readable format.
     * If not provided, the value label will be read as a percentage of the max value.
     */
    getValueLabel?: (params: GetValueLabelParams) => string;
    /**
     * The orientation of the slider.
     * @default horizontal
     */
    orientation?: "horizontal" | "vertical";
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
}
interface SliderRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface SliderRootRenderProps extends SliderRootCommonProps, SliderDataSet {
    role: "group";
}
type SliderRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SliderRootOptions & Partial<SliderRootCommonProps<ElementOf<T>>>;
declare function SliderRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, SliderRootProps<T>>): solid_js.JSX.Element;

interface SliderDataSet extends FormControlDataSet {
    "data-orientation": "vertical" | "horizontal" | undefined;
}
type Side = "left" | "top" | "bottom" | "right";
interface SliderContextValue {
    dataset: Accessor<SliderDataSet>;
    state: SliderState;
    thumbs: Accessor<CollectionItemWithRef[]>;
    setThumbs: Setter<CollectionItemWithRef[]>;
    onSlideStart: ((index: number, value: number) => void) | undefined;
    onSlideMove: ((deltas: {
        deltaX: number;
        deltaY: number;
    }) => void) | undefined;
    onSlideEnd: (() => void) | undefined;
    onStepKeyDown: (event: KeyboardEvent, index: number) => void;
    isSlidingFromLeft: () => boolean;
    isSlidingFromBottom: () => boolean;
    trackRef: Accessor<HTMLElement | undefined>;
    startEdge: Accessor<Side>;
    endEdge: Accessor<Side>;
    minValue: Accessor<number>;
    maxValue: Accessor<number>;
    inverted: Accessor<boolean>;
    registerTrack: (ref: HTMLElement) => void;
    generateId: (part: string) => string;
    getValueLabel: ((params: GetValueLabelParams) => string) | undefined;
}
declare function useSliderContext(): SliderContextValue;

interface SliderInputProps extends ComponentProps<"input"> {
    style?: JSX.CSSProperties | string;
}
/**
 * The native html input that is visually hidden in the slider thumb.
 */
declare function SliderInput(props: SliderInputProps): JSX.Element;

interface SliderThumbOptions {
}
interface SliderThumbCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    style?: JSX.CSSProperties | string;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur: JSX.EventHandlerUnion<T, FocusEvent>;
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
}
interface SliderThumbRenderProps extends SliderThumbCommonProps, SliderDataSet {
    role: "slider";
    tabIndex: 0 | undefined;
    "aria-valuetext": string;
    "aria-valuemin": number;
    "aria-valuenow": number | undefined;
    "aria-valuemax": number;
    "aria-orientation": Orientation;
}
type SliderThumbProps<T extends ValidComponent | HTMLElement = HTMLElement> = SliderThumbOptions & Partial<SliderThumbCommonProps<ElementOf<T>>>;
declare function SliderThumb<T extends ValidComponent = "span">(props: PolymorphicProps<T, SliderThumbProps<T>>): JSX.Element;

interface SliderTrackOptions {
}
interface SliderTrackCommonProps<T extends HTMLElement = HTMLElement> {
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface SliderTrackRenderProps extends SliderTrackCommonProps, SliderDataSet {
}
type SliderTrackProps<T extends ValidComponent | HTMLElement = HTMLElement> = SliderTrackOptions & Partial<SliderTrackCommonProps<ElementOf<T>>>;
/**
 * The component that visually represents the slider track.
 * Act as a container for `Slider.Fill`.
 */
declare function SliderTrack<T extends ValidComponent = "div">(props: PolymorphicProps<T, SliderTrackProps<T>>): JSX.Element;

interface SliderValueLabelOptions {
}
interface SliderValueLabelCommonProps<T extends HTMLElement = HTMLElement> {
}
interface SliderValueLabelRenderProps extends SliderValueLabelCommonProps, SliderDataSet {
    children: JSX.Element;
}
type SliderValueLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = SliderValueLabelOptions & Partial<SliderValueLabelCommonProps<ElementOf<T>>>;
/**
 * The accessible label text representing the current value in a human-readable format.
 */
declare function SliderValueLabel<T extends ValidComponent = "div">(props: PolymorphicProps<T, SliderValueLabelProps<T>>): JSX.Element;

export { GetValueLabelParams as G, SliderDataSet as S, SliderRoot as a, SliderInput as b, SliderThumb as c, SliderTrack as d, SliderValueLabel as e, SliderContextValue as f, SliderInputProps as g, SliderRootCommonProps as h, SliderRootOptions as i, SliderRootProps as j, SliderRootRenderProps as k, SliderThumbCommonProps as l, SliderThumbOptions as m, SliderThumbProps as n, SliderThumbRenderProps as o, SliderTrackCommonProps as p, SliderTrackOptions as q, SliderTrackProps as r, SliderTrackRenderProps as s, SliderValueLabelCommonProps as t, SliderValueLabelOptions as u, SliderValueLabelProps as v, SliderValueLabelRenderProps as w, useSliderContext as x };
