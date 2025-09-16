import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent } from 'solid-js';
import { F as FormControlDataSet, e as FormControlDescriptionProps, c as FormControlDescriptionCommonProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { d as FormControlErrorMessageProps, b as FormControlErrorMessageCommonProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { a as FormControlLabelOptions, b as FormControlLabelCommonProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
import { ValidationState } from '@kobalte/utils';

interface CheckboxDataSet {
    "data-checked": string | undefined;
    "data-indeterminate": string | undefined;
}
interface CheckboxContextValue {
    value: Accessor<string>;
    dataset: Accessor<CheckboxDataSet>;
    checked: Accessor<boolean>;
    indeterminate: Accessor<boolean>;
    inputRef: Accessor<HTMLInputElement | undefined>;
    generateId: (part: string) => string;
    toggle: () => void;
    setIsChecked: (isChecked: boolean) => void;
    setIsFocused: (isFocused: boolean) => void;
    setInputRef: (el: HTMLInputElement) => void;
}
declare function useCheckboxContext(): CheckboxContextValue;

interface CheckboxControlOptions {
}
interface CheckboxControlCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
}
interface CheckboxControlRenderProps extends CheckboxControlCommonProps, FormControlDataSet, CheckboxDataSet {
}
type CheckboxControlProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxControlOptions & Partial<CheckboxControlCommonProps<ElementOf<T>>>;
/**
 * The element that visually represents a checkbox.
 */
declare function CheckboxControl<T extends ValidComponent = "div">(props: PolymorphicProps<T, CheckboxControlProps<T>>): JSX.Element;

interface CheckboxDescriptionOptions extends FormControlDescriptionProps {
}
interface CheckboxDescriptionCommonProps<T extends HTMLElement = HTMLElement> extends FormControlDescriptionCommonProps<T> {
}
interface CheckboxDescriptionRenderProps extends CheckboxDescriptionCommonProps, CheckboxDataSet, FormControlDescriptionRenderProps {
}
type CheckboxDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxDescriptionOptions & Partial<CheckboxDescriptionCommonProps<ElementOf<T>>>;
/**
 * The description that gives the user more information on the checkbox.
 */
declare function CheckboxDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, CheckboxDescriptionProps<T>>): solid_js.JSX.Element;

interface CheckboxErrorMessageOptions extends FormControlErrorMessageProps {
}
interface CheckboxErrorMessageCommonProps<T extends HTMLElement = HTMLElement> extends FormControlErrorMessageCommonProps<T> {
}
interface CheckboxErrorMessageRenderProps extends CheckboxErrorMessageCommonProps, CheckboxDataSet, FormControlErrorMessageRenderProps {
}
type CheckboxErrorMessageProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxErrorMessageOptions & Partial<CheckboxErrorMessageCommonProps<ElementOf<T>>>;
/**
 * The error message that gives the user information about how to fix a validation error on the checkbox.
 */
declare function CheckboxErrorMessage<T extends ValidComponent = "div">(props: PolymorphicProps<T, CheckboxErrorMessageProps<T>>): solid_js.JSX.Element;

interface CheckboxIndicatorOptions {
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface CheckboxIndicatorCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface CheckboxIndicatorRenderProps extends CheckboxIndicatorCommonProps, FormControlDataSet, CheckboxDataSet {
}
type CheckboxIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxIndicatorOptions & Partial<CheckboxIndicatorCommonProps<ElementOf<T>>>;
/**
 * The visual indicator rendered when the checkbox is in a checked or indeterminate state.
 * You can style this element directly, or you can use it as a wrapper to put an icon into, or both.
 */
declare function CheckboxIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, CheckboxIndicatorProps<T>>): solid_js.JSX.Element;

interface CheckboxInputOptions {
}
interface CheckboxInputCommonProps<T extends HTMLElement = HTMLInputElement> {
    id: string;
    ref: T | ((el: T) => void);
    style: JSX.CSSProperties | string;
    onChange: JSX.EventHandlerUnion<T, InputEvent>;
    onFocus: JSX.FocusEventHandlerUnion<T, FocusEvent>;
    onBlur: JSX.FocusEventHandlerUnion<T, FocusEvent>;
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
}
interface CheckboxInputRenderProps extends CheckboxInputCommonProps, FormControlDataSet, CheckboxDataSet {
    type: "checkbox";
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
type CheckboxInputProps<T extends ValidComponent | HTMLElement = HTMLInputElement> = CheckboxInputOptions & Partial<CheckboxInputCommonProps<ElementOf<T>>>;
/**
 * The native html input that is visually hidden in the checkbox.
 */
declare function CheckboxInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, CheckboxInputProps<T>>): JSX.Element;

interface CheckboxLabelOptions extends FormControlLabelOptions {
}
interface CheckboxLabelCommonProps<T extends HTMLElement = HTMLElement> extends FormControlLabelCommonProps<T> {
}
interface CheckboxLabelRenderProps extends CheckboxLabelCommonProps, FormControlLabelRenderProps, CheckboxDataSet {
}
type CheckboxLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxLabelOptions & Partial<CheckboxLabelCommonProps<ElementOf<T>>>;
/**
 * The label that gives the user information on the checkbox.
 */
declare function CheckboxLabel<T extends ValidComponent = "label">(props: PolymorphicProps<T, CheckboxLabelProps<T>>): solid_js.JSX.Element;

interface CheckboxRootState {
    /** Whether the checkbox is checked or not. */
    checked: Accessor<boolean>;
    /** Whether the checkbox is in an indeterminate state. */
    indeterminate: Accessor<boolean>;
}
interface CheckboxRootOptions {
    /** The controlled checked state of the checkbox. */
    checked?: boolean;
    /**
     * The default checked state when initially rendered.
     * Useful when you do not need to control the checked state.
     */
    defaultChecked?: boolean;
    /** Event handler called when the checked state of the checkbox changes. */
    onChange?: (checked: boolean) => void;
    /**
     * Whether the checkbox is in an indeterminate state.
     * Indeterminism is presentational only.
     * The indeterminate visual representation remains regardless of user interaction.
     */
    indeterminate?: boolean;
    /**
     * The value of the checkbox, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
     */
    value?: string;
    /**
     * The name of the checkbox, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /** Whether the checkbox should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must check the checkbox before the owning form can be submitted. */
    required?: boolean;
    /** Whether the checkbox is disabled. */
    disabled?: boolean;
    /** Whether the checkbox is read only. */
    readOnly?: boolean;
    /**
     * The children of the checkbox.
     * Can be a `JSX.Element` or a _render prop_ for having access to the internal state.
     */
    children?: JSX.Element | ((state: CheckboxRootState) => JSX.Element);
}
interface CheckboxRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
}
type CheckboxRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxRootOptions & Partial<CheckboxRootCommonProps<ElementOf<T>>>;
/**
 * A control that allows the user to toggle between checked and not checked.
 */
declare function CheckboxRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, CheckboxRootProps<T>>): JSX.Element;

declare const Checkbox: typeof CheckboxRoot & {
    Control: typeof CheckboxControl;
    Description: typeof CheckboxDescription;
    ErrorMessage: typeof CheckboxErrorMessage;
    Indicator: typeof CheckboxIndicator;
    Input: typeof CheckboxInput;
    Label: typeof CheckboxLabel;
};

declare const index_Checkbox: typeof Checkbox;
type index_CheckboxContextValue = CheckboxContextValue;
type index_CheckboxControlCommonProps<T extends HTMLElement = HTMLElement> = CheckboxControlCommonProps<T>;
type index_CheckboxControlOptions = CheckboxControlOptions;
type index_CheckboxControlProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxControlProps<T>;
type index_CheckboxControlRenderProps = CheckboxControlRenderProps;
type index_CheckboxDescriptionCommonProps<T extends HTMLElement = HTMLElement> = CheckboxDescriptionCommonProps<T>;
type index_CheckboxDescriptionOptions = CheckboxDescriptionOptions;
type index_CheckboxDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxDescriptionProps<T>;
type index_CheckboxDescriptionRenderProps = CheckboxDescriptionRenderProps;
type index_CheckboxErrorMessageCommonProps<T extends HTMLElement = HTMLElement> = CheckboxErrorMessageCommonProps<T>;
type index_CheckboxErrorMessageOptions = CheckboxErrorMessageOptions;
type index_CheckboxErrorMessageProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxErrorMessageProps<T>;
type index_CheckboxErrorMessageRenderProps = CheckboxErrorMessageRenderProps;
type index_CheckboxIndicatorCommonProps<T extends HTMLElement = HTMLElement> = CheckboxIndicatorCommonProps<T>;
type index_CheckboxIndicatorOptions = CheckboxIndicatorOptions;
type index_CheckboxIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxIndicatorProps<T>;
type index_CheckboxIndicatorRenderProps = CheckboxIndicatorRenderProps;
type index_CheckboxInputCommonProps<T extends HTMLElement = HTMLInputElement> = CheckboxInputCommonProps<T>;
type index_CheckboxInputOptions = CheckboxInputOptions;
type index_CheckboxInputProps<T extends ValidComponent | HTMLElement = HTMLInputElement> = CheckboxInputProps<T>;
type index_CheckboxInputRenderProps = CheckboxInputRenderProps;
type index_CheckboxLabelCommonProps<T extends HTMLElement = HTMLElement> = CheckboxLabelCommonProps<T>;
type index_CheckboxLabelOptions = CheckboxLabelOptions;
type index_CheckboxLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxLabelProps<T>;
type index_CheckboxLabelRenderProps = CheckboxLabelRenderProps;
type index_CheckboxRootOptions = CheckboxRootOptions;
type index_CheckboxRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = CheckboxRootProps<T>;
declare const index_useCheckboxContext: typeof useCheckboxContext;
declare namespace index {
  export {
    index_Checkbox as Checkbox,
    index_CheckboxContextValue as CheckboxContextValue,
    index_CheckboxControlCommonProps as CheckboxControlCommonProps,
    index_CheckboxControlOptions as CheckboxControlOptions,
    index_CheckboxControlProps as CheckboxControlProps,
    index_CheckboxControlRenderProps as CheckboxControlRenderProps,
    index_CheckboxDescriptionCommonProps as CheckboxDescriptionCommonProps,
    index_CheckboxDescriptionOptions as CheckboxDescriptionOptions,
    index_CheckboxDescriptionProps as CheckboxDescriptionProps,
    index_CheckboxDescriptionRenderProps as CheckboxDescriptionRenderProps,
    index_CheckboxErrorMessageCommonProps as CheckboxErrorMessageCommonProps,
    index_CheckboxErrorMessageOptions as CheckboxErrorMessageOptions,
    index_CheckboxErrorMessageProps as CheckboxErrorMessageProps,
    index_CheckboxErrorMessageRenderProps as CheckboxErrorMessageRenderProps,
    index_CheckboxIndicatorCommonProps as CheckboxIndicatorCommonProps,
    index_CheckboxIndicatorOptions as CheckboxIndicatorOptions,
    index_CheckboxIndicatorProps as CheckboxIndicatorProps,
    index_CheckboxIndicatorRenderProps as CheckboxIndicatorRenderProps,
    index_CheckboxInputCommonProps as CheckboxInputCommonProps,
    index_CheckboxInputOptions as CheckboxInputOptions,
    index_CheckboxInputProps as CheckboxInputProps,
    index_CheckboxInputRenderProps as CheckboxInputRenderProps,
    index_CheckboxLabelCommonProps as CheckboxLabelCommonProps,
    index_CheckboxLabelOptions as CheckboxLabelOptions,
    index_CheckboxLabelProps as CheckboxLabelProps,
    index_CheckboxLabelRenderProps as CheckboxLabelRenderProps,
    index_CheckboxRootOptions as CheckboxRootOptions,
    index_CheckboxRootProps as CheckboxRootProps,
    CheckboxControl as Control,
    CheckboxDescription as Description,
    CheckboxErrorMessage as ErrorMessage,
    CheckboxIndicator as Indicator,
    CheckboxInput as Input,
    CheckboxLabel as Label,
    CheckboxRoot as Root,
    index_useCheckboxContext as useCheckboxContext,
  };
}

export { CheckboxControl as A, CheckboxDescription as B, CheckboxControlOptions as C, CheckboxErrorMessage as D, CheckboxIndicator as E, CheckboxInput as F, CheckboxLabel as G, CheckboxRoot as H, Checkbox as I, useCheckboxContext as J, CheckboxContextValue as K, CheckboxControlCommonProps as a, CheckboxControlRenderProps as b, CheckboxControlProps as c, CheckboxDescriptionOptions as d, CheckboxDescriptionCommonProps as e, CheckboxDescriptionRenderProps as f, CheckboxDescriptionProps as g, CheckboxErrorMessageOptions as h, index as i, CheckboxErrorMessageCommonProps as j, CheckboxErrorMessageRenderProps as k, CheckboxErrorMessageProps as l, CheckboxIndicatorOptions as m, CheckboxIndicatorCommonProps as n, CheckboxIndicatorRenderProps as o, CheckboxIndicatorProps as p, CheckboxInputOptions as q, CheckboxInputCommonProps as r, CheckboxInputRenderProps as s, CheckboxInputProps as t, CheckboxLabelOptions as u, CheckboxLabelCommonProps as v, CheckboxLabelRenderProps as w, CheckboxLabelProps as x, CheckboxRootOptions as y, CheckboxRootProps as z };
