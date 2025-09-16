import * as solid_js from 'solid-js';
import { JSX, ValidComponent, ComponentProps } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { a as ButtonRootCommonProps, d as ButtonRootRenderProps } from './button-root-da654b3e.js';
import { c as SpinButtonRootRenderProps, a as SpinButtonRootOptions } from './spin-button-root-3a44420a.js';
import { ValidationState } from '@kobalte/utils';
import { F as FormControlDataSet } from './form-control-description-330657bc.js';

interface NumberFieldVaryTriggerCommonProps<T extends HTMLElement = HTMLElement> extends ButtonRootCommonProps<T> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface NumberFieldVaryTriggerRenderProps extends NumberFieldVaryTriggerCommonProps, ButtonRootRenderProps {
    "aria-controls": string | undefined;
}

interface NumberFieldDecrementTriggerOptions {
}
interface NumberFieldDecrementTriggerCommonProps<T extends HTMLElement = HTMLElement> extends NumberFieldVaryTriggerCommonProps<T> {
}
interface NumberFieldDecrementTriggerRenderProps extends NumberFieldDecrementTriggerCommonProps, NumberFieldVaryTriggerRenderProps {
}
type NumberFieldDecrementTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = NumberFieldDecrementTriggerOptions & Partial<NumberFieldDecrementTriggerCommonProps<ElementOf<T>>>;
declare function NumberFieldDecrementTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, NumberFieldDecrementTriggerProps<T>>): solid_js.JSX.Element;

interface NumberFieldHiddenInputProps extends ComponentProps<"input"> {
}
declare function NumberFieldHiddenInput(props: NumberFieldHiddenInputProps): solid_js.JSX.Element;

interface NumberFieldIncrementTriggerOptions {
}
interface NumberFieldIncrementTriggerCommonProps<T extends HTMLElement = HTMLElement> extends NumberFieldVaryTriggerCommonProps<T> {
}
interface NumberFieldIncrementTriggerRenderProps extends NumberFieldIncrementTriggerCommonProps, NumberFieldVaryTriggerRenderProps {
}
type NumberFieldIncrementTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = NumberFieldIncrementTriggerOptions & Partial<NumberFieldIncrementTriggerCommonProps<ElementOf<T>>>;
declare function NumberFieldIncrementTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, NumberFieldIncrementTriggerProps<T>>): solid_js.JSX.Element;

interface NumberFieldInputOptions {
}
interface NumberFieldInputCommonProps<T extends HTMLElement = HTMLInputElement> {
    id: string;
    ref: T | ((el: T) => void);
    onInput: JSX.EventHandlerUnion<T, InputEvent>;
    onChange: JSX.EventHandlerUnion<T, Event>;
    onWheel: JSX.EventHandlerUnion<T, WheelEvent>;
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
    inputMode?: string;
    autocomplete?: string;
    autocorrect?: string;
    spellcheck?: boolean;
}
interface NumberFieldInputRenderProps extends NumberFieldInputCommonProps, SpinButtonRootRenderProps {
    type: "text";
    value: string;
    required: boolean | undefined;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
}
type NumberFieldInputProps<T extends ValidComponent | HTMLElement = HTMLInputElement> = NumberFieldInputOptions & Partial<NumberFieldInputCommonProps<ElementOf<T>>>;
declare function NumberFieldInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, NumberFieldInputProps<T>>): JSX.Element;

interface NumberFieldRootOptions extends Pick<SpinButtonRootOptions, "textValue" | "translations"> {
    /** The controlled formatted value of the number field. */
    value?: string | number;
    /**
     * The default formatted value when initially rendered.
     * Useful when you do not need to control the value.
     */
    defaultValue?: string | number;
    /** Event handler called when the formatted value of the number field changes. */
    onChange?: (value: string) => void;
    /** The controlled raw value of the number field. */
    rawValue?: number;
    /** Event handler called when the raw value of the number field changes. */
    onRawValueChange?: (value: number) => void;
    /** The smallest value allowed, defaults to `Number.MIN_SAFE_INTEGER`. */
    minValue?: number;
    /** The largest value allowed, defaults to `Number.MAX_SAFE_INTEGER`. */
    maxValue?: number;
    /** Increment/Decrement step (Arrow). */
    step?: number;
    /** Increment/Decrement step (Page Up/Down), defaults `10 * step`. */
    largeStep?: number;
    /** Whether to increment/decrement on wheel. */
    changeOnWheel?: boolean;
    /** Whether to format the input value. */
    format?: boolean;
    /** Options for formatting input value. */
    formatOptions?: Intl.NumberFormatOptions;
    /** Allowed input characters, defaults to valid format characters. */
    allowedInput?: RegExp;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * The name of the text field, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /** Whether the text field should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must fill the text field before the owning form can be submitted. */
    required?: boolean;
    /** Whether the text field is disabled. */
    disabled?: boolean;
    /** Whether the text field is read only. */
    readOnly?: boolean;
}
interface NumberFieldRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface NumberFieldRootRenderProps extends NumberFieldRootCommonProps, FormControlDataSet {
    role: "group";
}
type NumberFieldRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = NumberFieldRootOptions & Partial<NumberFieldRootCommonProps<ElementOf<T>>>;
/**
 * A text input that allow users to input custom text entries with a keyboard.
 */
declare function NumberFieldRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, NumberFieldRootProps<T>>): JSX.Element;

export { NumberFieldRootOptions as N, NumberFieldRootRenderProps as a, NumberFieldHiddenInput as b, NumberFieldInput as c, NumberFieldIncrementTrigger as d, NumberFieldDecrementTrigger as e, NumberFieldInputOptions as f, NumberFieldInputCommonProps as g, NumberFieldInputRenderProps as h, NumberFieldInputProps as i, NumberFieldHiddenInputProps as j, NumberFieldIncrementTriggerOptions as k, NumberFieldIncrementTriggerCommonProps as l, NumberFieldIncrementTriggerRenderProps as m, NumberFieldIncrementTriggerProps as n, NumberFieldDecrementTriggerOptions as o, NumberFieldDecrementTriggerCommonProps as p, NumberFieldDecrementTriggerRenderProps as q, NumberFieldDecrementTriggerProps as r, NumberFieldRoot as s, NumberFieldRootCommonProps as t, NumberFieldRootProps as u };
