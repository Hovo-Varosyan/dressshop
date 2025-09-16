import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent } from 'solid-js';
import { F as FormControlDataSet, b as FormControlDescriptionOptions, c as FormControlDescriptionCommonProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { a as FormControlErrorMessageOptions, b as FormControlErrorMessageCommonProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { a as FormControlLabelOptions, b as FormControlLabelCommonProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
import { ValidationState } from '@kobalte/utils';

interface SwitchDataSet {
    "data-checked": string | undefined;
}
interface SwitchContextValue {
    value: Accessor<string>;
    dataset: Accessor<SwitchDataSet>;
    checked: Accessor<boolean>;
    inputRef: Accessor<HTMLInputElement | undefined>;
    generateId: (part: string) => string;
    toggle: () => void;
    setIsChecked: (isChecked: boolean) => void;
    setIsFocused: (isFocused: boolean) => void;
    setInputRef: (el: HTMLInputElement) => void;
}
declare function useSwitchContext(): SwitchContextValue;

interface SwitchControlOptions {
}
interface SwitchControlCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
}
interface SwitchControlRenderProps extends SwitchControlCommonProps, FormControlDataSet, SwitchDataSet {
}
type SwitchControlProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchControlOptions & Partial<SwitchControlCommonProps<ElementOf<T>>>;
/**
 * The element that visually represents a switch.
 */
declare function SwitchControl<T extends ValidComponent = "div">(props: PolymorphicProps<T, SwitchControlProps<T>>): JSX.Element;

interface SwitchDescriptionOptions extends FormControlDescriptionOptions {
}
interface SwitchDescriptionCommonProps<T extends HTMLElement = HTMLElement> extends FormControlDescriptionCommonProps<T> {
}
interface SwitchDescriptionRenderProps extends SwitchDescriptionCommonProps, FormControlDescriptionRenderProps, SwitchDataSet {
}
type SwitchDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchDescriptionOptions & Partial<SwitchDescriptionCommonProps<ElementOf<T>>>;
/**
 * The description that gives the user more information on the switch.
 */
declare function SwitchDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, SwitchDescriptionProps<T>>): solid_js.JSX.Element;

interface SwitchErrorMessageOptions extends FormControlErrorMessageOptions {
}
interface SwitchErrorMessageCommonProps<T extends HTMLElement = HTMLElement> extends FormControlErrorMessageCommonProps<T> {
}
interface SwitchErrorMessageRenderProps extends SwitchErrorMessageCommonProps, FormControlErrorMessageRenderProps, SwitchDataSet {
}
type SwitchErrorMessageProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchErrorMessageOptions & Partial<SwitchErrorMessageCommonProps<ElementOf<T>>>;
/**
 * The error message that gives the user information about how to fix a validation error on the switch.
 */
declare function SwitchErrorMessage<T extends ValidComponent = "div">(props: PolymorphicProps<T, SwitchErrorMessageProps<T>>): solid_js.JSX.Element;

interface SwitchInputOptions {
}
interface SwitchInputCommonProps<T extends HTMLElement = HTMLInputElement> {
    id: string;
    ref: T | ((el: T) => void);
    style?: JSX.CSSProperties | string;
    onChange: JSX.EventHandlerUnion<T, Event>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur: JSX.EventHandlerUnion<T, FocusEvent>;
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
}
interface SwitchInputRenderProps extends SwitchInputCommonProps, FormControlDataSet, SwitchDataSet {
    type: "checkbox";
    role: "switch";
    name: string;
    value: string;
    checked: boolean;
    required: boolean | undefined;
    disabled: boolean | undefined;
    readonly: boolean | undefined;
    "aria-invalid": boolean | undefined;
    "aria-required": boolean | undefined;
    "aria-disabled": boolean | undefined;
    "aria-readonly": boolean | undefined;
}
type SwitchInputProps<T extends ValidComponent | HTMLElement = HTMLInputElement> = SwitchInputOptions & Partial<SwitchInputCommonProps<ElementOf<T>>>;
/**
 * The native html input that is visually hidden in the switch.
 */
declare function SwitchInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, SwitchInputProps<T>>): JSX.Element;

interface SwitchLabelOptions extends FormControlLabelOptions {
}
interface SwitchLabelCommonProps<T extends HTMLElement = HTMLElement> extends FormControlLabelCommonProps<T> {
}
interface SwitchLabelRenderProps extends SwitchDescriptionCommonProps, FormControlLabelRenderProps, SwitchDataSet {
}
type SwitchLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchLabelOptions & Partial<SwitchLabelCommonProps<ElementOf<T>>>;
/**
 * The label that gives the user information on the switch.
 */
declare function SwitchLabel<T extends ValidComponent = "label">(props: PolymorphicProps<T, SwitchLabelProps<T>>): solid_js.JSX.Element;

interface SwitchRootState {
    /** Whether the switch is checked or not. */
    checked: Accessor<boolean>;
}
interface SwitchRootOptions {
    /** The controlled checked state of the switch. */
    checked?: boolean;
    /**
     * The default checked state when initially rendered.
     * Useful when you do not need to control the checked state.
     */
    defaultChecked?: boolean;
    /** Event handler called when the checked state of the switch changes. */
    onChange?: (isChecked: boolean) => void;
    /**
     * The value of the switch, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
     */
    value?: string;
    /**
     * The name of the switch, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /** Whether the switch should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must check the switch before the owning form can be submitted. */
    required?: boolean;
    /** Whether the switch is disabled. */
    disabled?: boolean;
    /** Whether the switch is read only. */
    readOnly?: boolean;
    /**
     * The children of the switch.
     * Can be a `JSX.Element` or a _render prop_ for having access to the internal state.
     */
    children?: JSX.Element | ((state: SwitchRootState) => JSX.Element);
}
interface SwitchRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface SwitchRootRenderProps extends SwitchRootCommonProps, SwitchDataSet, FormControlDataSet {
    role: "group";
    children: JSX.Element;
}
type SwitchRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchRootOptions & Partial<SwitchRootCommonProps<ElementOf<T>>>;
/**
 * A control that allows users to choose one of two values: on or off.
 */
declare function SwitchRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, SwitchRootProps<T>>): JSX.Element;

interface SwitchThumbOptions {
}
interface SwitchThumbCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface SwitchThumbRenderProps extends SwitchThumbCommonProps, FormControlDataSet, SwitchDataSet {
}
type SwitchThumbProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchThumbOptions & Partial<SwitchThumbCommonProps<ElementOf<T>>>;
/**
 * The thumb that is used to visually indicate whether the switch is on or off.
 */
declare function SwitchThumb<T extends ValidComponent = "div">(props: PolymorphicProps<T, SwitchThumbProps<T>>): solid_js.JSX.Element;

declare const Switch: typeof SwitchRoot & {
    Control: typeof SwitchControl;
    Description: typeof SwitchDescription;
    ErrorMessage: typeof SwitchErrorMessage;
    Input: typeof SwitchInput;
    Label: typeof SwitchLabel;
    Thumb: typeof SwitchThumb;
};

declare const index_Switch: typeof Switch;
type index_SwitchContextValue = SwitchContextValue;
type index_SwitchControlCommonProps<T extends HTMLElement = HTMLElement> = SwitchControlCommonProps<T>;
type index_SwitchControlOptions = SwitchControlOptions;
type index_SwitchControlProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchControlProps<T>;
type index_SwitchControlRenderProps = SwitchControlRenderProps;
type index_SwitchDescriptionCommonProps<T extends HTMLElement = HTMLElement> = SwitchDescriptionCommonProps<T>;
type index_SwitchDescriptionOptions = SwitchDescriptionOptions;
type index_SwitchDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchDescriptionProps<T>;
type index_SwitchDescriptionRenderProps = SwitchDescriptionRenderProps;
type index_SwitchErrorMessageCommonProps<T extends HTMLElement = HTMLElement> = SwitchErrorMessageCommonProps<T>;
type index_SwitchErrorMessageOptions = SwitchErrorMessageOptions;
type index_SwitchErrorMessageProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchErrorMessageProps<T>;
type index_SwitchErrorMessageRenderProps = SwitchErrorMessageRenderProps;
type index_SwitchInputCommonProps<T extends HTMLElement = HTMLInputElement> = SwitchInputCommonProps<T>;
type index_SwitchInputOptions = SwitchInputOptions;
type index_SwitchInputProps<T extends ValidComponent | HTMLElement = HTMLInputElement> = SwitchInputProps<T>;
type index_SwitchInputRenderProps = SwitchInputRenderProps;
type index_SwitchLabelCommonProps<T extends HTMLElement = HTMLElement> = SwitchLabelCommonProps<T>;
type index_SwitchLabelOptions = SwitchLabelOptions;
type index_SwitchLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchLabelProps<T>;
type index_SwitchLabelRenderProps = SwitchLabelRenderProps;
type index_SwitchRootCommonProps<T extends HTMLElement = HTMLElement> = SwitchRootCommonProps<T>;
type index_SwitchRootOptions = SwitchRootOptions;
type index_SwitchRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchRootProps<T>;
type index_SwitchRootRenderProps = SwitchRootRenderProps;
type index_SwitchThumbCommonProps<T extends HTMLElement = HTMLElement> = SwitchThumbCommonProps<T>;
type index_SwitchThumbOptions = SwitchThumbOptions;
type index_SwitchThumbProps<T extends ValidComponent | HTMLElement = HTMLElement> = SwitchThumbProps<T>;
type index_SwitchThumbRenderProps = SwitchThumbRenderProps;
declare const index_useSwitchContext: typeof useSwitchContext;
declare namespace index {
  export {
    SwitchControl as Control,
    SwitchDescription as Description,
    SwitchErrorMessage as ErrorMessage,
    SwitchInput as Input,
    SwitchLabel as Label,
    SwitchRoot as Root,
    index_Switch as Switch,
    index_SwitchContextValue as SwitchContextValue,
    index_SwitchControlCommonProps as SwitchControlCommonProps,
    index_SwitchControlOptions as SwitchControlOptions,
    index_SwitchControlProps as SwitchControlProps,
    index_SwitchControlRenderProps as SwitchControlRenderProps,
    index_SwitchDescriptionCommonProps as SwitchDescriptionCommonProps,
    index_SwitchDescriptionOptions as SwitchDescriptionOptions,
    index_SwitchDescriptionProps as SwitchDescriptionProps,
    index_SwitchDescriptionRenderProps as SwitchDescriptionRenderProps,
    index_SwitchErrorMessageCommonProps as SwitchErrorMessageCommonProps,
    index_SwitchErrorMessageOptions as SwitchErrorMessageOptions,
    index_SwitchErrorMessageProps as SwitchErrorMessageProps,
    index_SwitchErrorMessageRenderProps as SwitchErrorMessageRenderProps,
    index_SwitchInputCommonProps as SwitchInputCommonProps,
    index_SwitchInputOptions as SwitchInputOptions,
    index_SwitchInputProps as SwitchInputProps,
    index_SwitchInputRenderProps as SwitchInputRenderProps,
    index_SwitchLabelCommonProps as SwitchLabelCommonProps,
    index_SwitchLabelOptions as SwitchLabelOptions,
    index_SwitchLabelProps as SwitchLabelProps,
    index_SwitchLabelRenderProps as SwitchLabelRenderProps,
    index_SwitchRootCommonProps as SwitchRootCommonProps,
    index_SwitchRootOptions as SwitchRootOptions,
    index_SwitchRootProps as SwitchRootProps,
    index_SwitchRootRenderProps as SwitchRootRenderProps,
    index_SwitchThumbCommonProps as SwitchThumbCommonProps,
    index_SwitchThumbOptions as SwitchThumbOptions,
    index_SwitchThumbProps as SwitchThumbProps,
    index_SwitchThumbRenderProps as SwitchThumbRenderProps,
    SwitchThumb as Thumb,
    index_useSwitchContext as useSwitchContext,
  };
}

export { SwitchThumbRenderProps as A, SwitchThumbProps as B, SwitchControl as C, SwitchDescription as D, SwitchErrorMessage as E, SwitchInput as F, SwitchLabel as G, SwitchRoot as H, SwitchThumb as I, Switch as J, useSwitchContext as K, SwitchContextValue as L, SwitchControlOptions as S, SwitchControlCommonProps as a, SwitchControlRenderProps as b, SwitchControlProps as c, SwitchDescriptionOptions as d, SwitchDescriptionCommonProps as e, SwitchDescriptionRenderProps as f, SwitchDescriptionProps as g, SwitchErrorMessageOptions as h, index as i, SwitchErrorMessageCommonProps as j, SwitchErrorMessageRenderProps as k, SwitchErrorMessageProps as l, SwitchInputOptions as m, SwitchInputCommonProps as n, SwitchInputRenderProps as o, SwitchInputProps as p, SwitchLabelOptions as q, SwitchLabelCommonProps as r, SwitchLabelRenderProps as s, SwitchLabelProps as t, SwitchRootOptions as u, SwitchRootCommonProps as v, SwitchRootRenderProps as w, SwitchRootProps as x, SwitchThumbOptions as y, SwitchThumbCommonProps as z };
