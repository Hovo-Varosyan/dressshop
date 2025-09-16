import { F as FormControlDataSet, a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as ColorAreaDescriptionCommonProps, b as ColorAreaDescriptionOptions, e as ColorAreaDescriptionProps, d as ColorAreaDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as ColorAreaErrorMessageCommonProps, a as ColorAreaErrorMessageOptions, d as ColorAreaErrorMessageProps, c as ColorAreaErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';
import { F as FormControlLabel } from '../form-control-label-2a5ca7a3.js';
export { b as ColorAreaLabelCommonProps, a as ColorAreaLabelOptions, d as ColorAreaLabelProps, c as ColorAreaLabelRenderProps } from '../form-control-label-2a5ca7a3.js';
import * as solid_js from 'solid-js';
import { JSX, ValidComponent, ComponentProps, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import { ValidationState } from '@kobalte/utils';
import { C as Color, b as ColorChannel, a as ColorSpace } from '../types-877adc4a.js';

interface ColorAreaBackgroundOptions {
}
interface ColorAreaBackgroundCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface ColorAreaBackgroundRenderProps extends ColorAreaBackgroundCommonProps, FormControlDataSet {
}
type ColorAreaBackgroundProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorAreaBackgroundOptions & Partial<ColorAreaBackgroundCommonProps<ElementOf<T>>>;
declare function ColorAreaBackground<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorAreaBackgroundProps<T>>): JSX.Element;

type ColorAreaHiddenInputXProps = ComponentProps<"input">;
declare function ColorAreaHiddenInputX(props: ColorAreaHiddenInputXProps): solid_js.JSX.Element;

type ColorAreaHiddenInputYProps = ComponentProps<"input">;
declare function ColorAreaHiddenInputY(props: ColorAreaHiddenInputYProps): solid_js.JSX.Element;

declare const COLOR_AREA_INTL_TRANSLATIONS: {
    colorPicker: string;
    twoDimensionalSlider: string;
};
type ColorAreaIntlTranslations = typeof COLOR_AREA_INTL_TRANSLATIONS;

interface ColorAreaRootOptions {
    /** The localized strings of the component. */
    translations?: ColorAreaIntlTranslations;
    /** The controlled value of the color area. */
    value?: Color;
    /** The value of the color area when initially rendered. */
    defaultValue?: Color;
    /** Event handler called when the value changes. */
    onChange?: (value: Color) => void;
    /** Called when the value changes at the end of an interaction. */
    onChangeEnd?: (value: Color) => void;
    /** Color channel for the horizontal axis. */
    xChannel?: ColorChannel;
    /** Color channel for the vertical axis. */
    yChannel?: ColorChannel;
    /**
     * The color space that the color area operates in. The `xChannel` and `yChannel` must be in this color space.
     */
    colorSpace?: ColorSpace;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * The name of the color area, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /**
     * The name of the x channel input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    xName?: string;
    /**
     * The name of the y channel input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    yName?: string;
    /** Whether the color area should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must select an item before the owning form can be submitted. */
    required?: boolean;
    /** Whether the color area is disabled. */
    disabled?: boolean;
    /** Whether the color area is read only. */
    readOnly?: boolean;
}
interface ColorAreaRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface ColorAreaRootRenderProps extends ColorAreaRootCommonProps, FormControlDataSet {
    role: "group";
}
type ColorAreaRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorAreaRootOptions & Partial<ColorAreaRootCommonProps<ElementOf<T>>>;
declare function ColorAreaRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorAreaRootProps<T>>): solid_js.JSX.Element;

interface ColorAreaThumbOptions {
}
interface ColorAreaThumbCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    "aria-label"?: string;
}
interface ColorAreaThumbRenderProps extends ColorAreaThumbCommonProps {
    role: "presentation";
}
type ColorAreaThumbProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorAreaThumbOptions & Partial<ColorAreaThumbCommonProps<ElementOf<T>>>;
declare function ColorAreaThumb<T extends ValidComponent = "span">(props: PolymorphicProps<T, ColorAreaThumbProps<T>>): JSX.Element;

interface ColorAreaState {
    readonly value: Accessor<Color>;
    setValue: (value: Color) => void;
    xValue: Accessor<number>;
    yValue: Accessor<number>;
    setXValue: (value: number) => void;
    setYValue: (value: number) => void;
    xStep: Accessor<number>;
    yStep: Accessor<number>;
    xPageSize: Accessor<number>;
    yPageSize: Accessor<number>;
    xMaxValue: Accessor<number>;
    yMaxValue: Accessor<number>;
    xMinValue: Accessor<number>;
    yMinValue: Accessor<number>;
    incrementX: (stepSize: number) => void;
    incrementY: (stepSize: number) => void;
    decrementX: (stepSize: number) => void;
    decrementY: (stepSize: number) => void;
    getThumbPosition: () => {
        x: number;
        y: number;
    };
    readonly isDragging: Accessor<boolean>;
    setIsDragging: (value: boolean) => void;
    channels: Accessor<{
        xChannel: ColorChannel;
        yChannel: ColorChannel;
        zChannel: ColorChannel;
    }>;
    resetValue: () => void;
    getThumbPercent: () => {
        x: number;
        y: number;
    };
    setThumbPercent: (value: {
        x: number;
        y: number;
    }) => void;
    setThumbValue: (value: {
        x: number;
        y: number;
    }) => void;
    readonly isDisabled: Accessor<boolean>;
}

interface ColorAreaContextValue {
    state: ColorAreaState;
    xName: Accessor<string | undefined>;
    yName: Accessor<string | undefined>;
    onDragStart: ((value: number[]) => void) | undefined;
    onDrag: ((deltas: {
        deltaX: number;
        deltaY: number;
    }) => void) | undefined;
    onDragEnd: (() => void) | undefined;
    translations: Accessor<ColorAreaIntlTranslations>;
    getDisplayColor: () => Color;
    onStepKeyDown: (event: KeyboardEvent) => void;
    thumbRef: Accessor<HTMLElement | undefined>;
    setThumbRef: (el: HTMLElement) => void;
    backgroundRef: Accessor<HTMLElement | undefined>;
    setBackgroundRef: (el: HTMLElement) => void;
    generateId: (part: string) => string;
}
declare function useColorAreaContext(): ColorAreaContextValue;

declare const ColorArea: typeof ColorAreaRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Label: typeof FormControlLabel;
    Background: typeof ColorAreaBackground;
    Thumb: typeof ColorAreaThumb;
    HiddenInputX: typeof ColorAreaHiddenInputX;
    HiddenInputY: typeof ColorAreaHiddenInputY;
};

export { ColorAreaBackground as Background, ColorArea, ColorAreaBackgroundCommonProps, ColorAreaBackgroundOptions, ColorAreaBackgroundProps, ColorAreaBackgroundRenderProps, ColorAreaContextValue, ColorAreaHiddenInputXProps, ColorAreaHiddenInputYProps, ColorAreaRootCommonProps, ColorAreaRootOptions, ColorAreaRootProps, ColorAreaRootRenderProps, ColorAreaThumbCommonProps, ColorAreaThumbOptions, ColorAreaThumbProps, ColorAreaThumbRenderProps, FormControlDescription as Description, FormControlErrorMessage as ErrorMessage, ColorAreaHiddenInputX as HiddenInputX, ColorAreaHiddenInputY as HiddenInputY, FormControlLabel as Label, ColorAreaRoot as Root, ColorAreaThumb as Thumb, useColorAreaContext };
