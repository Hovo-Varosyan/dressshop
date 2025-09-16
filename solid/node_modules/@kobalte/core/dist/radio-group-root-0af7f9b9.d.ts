import * as solid_js from 'solid-js';
import { JSX, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { Orientation, ValidationState } from '@kobalte/utils';
import { F as FormControlDataSet } from './form-control-description-330657bc.js';

interface RadioGroupItemDataSet {
    "data-valid": string | undefined;
    "data-invalid": string | undefined;
    "data-required": string | undefined;
    "data-disabled": string | undefined;
    "data-readonly": string | undefined;
    "data-checked": string | undefined;
}

interface RadioGroupItemOptions {
    /**
     * The value of the radio button, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Value).
     */
    value: string;
    /** Whether the radio button is disabled or not. */
    disabled?: boolean;
}
interface RadioGroupItemCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
}
interface RadioGroupItemRenderProps extends RadioGroupItemCommonProps, RadioGroupItemDataSet {
    role: "group";
}
type RadioGroupItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupItemOptions & Partial<RadioGroupItemCommonProps<ElementOf<T>>>;
/**
 * The root container for a radio button.
 */
declare function RadioGroupItem<T extends ValidComponent = "div">(props: PolymorphicProps<T, RadioGroupItemProps<T>>): JSX.Element;

interface RadioGroupItemControlOptions {
}
interface RadioGroupItemControlCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
}
interface RadioGroupItemControlRenderProps extends RadioGroupItemControlCommonProps, RadioGroupItemDataSet {
}
type RadioGroupItemControlProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupItemControlOptions & Partial<RadioGroupItemControlCommonProps<ElementOf<T>>>;
/**
 * The element that visually represents a radio button.
 */
declare function RadioGroupItemControl<T extends ValidComponent = "div">(props: PolymorphicProps<T, RadioGroupItemControlProps<T>>): JSX.Element;

interface RadioGroupItemDescriptionOptions {
}
interface RadioGroupItemDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface RadioGroupItemDescriptionRenderProps extends RadioGroupItemDescriptionCommonProps, RadioGroupItemDataSet {
}
type RadioGroupItemDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupItemDescriptionOptions & Partial<RadioGroupItemDescriptionCommonProps<ElementOf<T>>>;
/**
 * The description that gives the user more information on the radio button.
 */
declare function RadioGroupItemDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, RadioGroupItemDescriptionProps<T>>): solid_js.JSX.Element;

interface RadioGroupItemIndicatorOptions {
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface RadioGroupItemIndicatorCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface RadioGroupItemIndicatorRenderProps extends RadioGroupItemIndicatorCommonProps, RadioGroupItemDataSet {
}
type RadioGroupItemIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupItemIndicatorOptions & Partial<RadioGroupItemIndicatorCommonProps<ElementOf<T>>>;
/**
 * The visual indicator rendered when the radio item is in a checked state.
 * You can style this element directly, or you can use it as a wrapper to put an icon into, or both.
 */
declare function RadioGroupItemIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, RadioGroupItemIndicatorProps<T>>): solid_js.JSX.Element;

interface RadioGroupItemInputOptions {
}
interface RadioGroupItemInputCommonProps<T extends HTMLElement = HTMLInputElement> {
    id: string;
    ref: T | ((el: T) => void);
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
    onChange: JSX.EventHandlerUnion<T, Event>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur: JSX.EventHandlerUnion<T, FocusEvent>;
    "aria-label"?: string;
    style?: JSX.CSSProperties | string;
}
interface RadioGroupItemInputRenderProps extends RadioGroupItemInputCommonProps, RadioGroupItemDataSet {
    type: "radio";
    name: string;
    value: string;
    checked: boolean;
    required: boolean | undefined;
    disabled: boolean | undefined;
    readonly: boolean | undefined;
}
type RadioGroupItemInputProps<T extends ValidComponent | HTMLElement = HTMLInputElement> = RadioGroupItemInputOptions & Partial<RadioGroupItemInputCommonProps<ElementOf<T>>>;
/**
 * The native html input that is visually hidden in the radio button.
 */
declare function RadioGroupItemInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, RadioGroupItemInputProps<T>>): JSX.Element;

interface RadioGroupItemLabelOptions {
}
interface RadioGroupItemLabelCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface RadioGroupItemLabelRenderProps extends RadioGroupItemLabelCommonProps, RadioGroupItemDataSet {
    for: string | undefined;
}
type RadioGroupItemLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupItemLabelOptions & Partial<RadioGroupItemLabelCommonProps<ElementOf<T>>>;
/**
 * The label that gives the user information on the radio button.
 */
declare function RadioGroupItemLabel<T extends ValidComponent = "label">(props: PolymorphicProps<T, RadioGroupItemLabelProps<T>>): solid_js.JSX.Element;

interface RadioGroupLabelOptions {
}
interface RadioGroupLabelCommonProps<T extends HTMLElement = HTMLElement> {
}
interface RadioGroupLabelRenderProps extends RadioGroupLabelCommonProps {
}
type RadioGroupLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupLabelOptions & Partial<RadioGroupLabelCommonProps<ElementOf<T>>>;
/**
 * The label that gives the user information on the radio group.
 */
declare function RadioGroupLabel<T extends ValidComponent = "span">(props: PolymorphicProps<T, RadioGroupLabelProps<T>>): solid_js.JSX.Element;

interface RadioGroupRootOptions {
    /** The controlled value of the radio button to check. */
    value?: string;
    /**
     * The value of the radio button that should be checked when initially rendered.
     * Useful when you do not need to control the state of the radio buttons.
     */
    defaultValue?: string;
    /** Event handler called when the value changes. */
    onChange?: (value: string) => void;
    /** The axis the radio group items should align with. */
    orientation?: Orientation;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * The name of the radio group.
     * Submitted with its owning form as part of a name/value pair.
     */
    name?: string;
    /** Whether the radio group should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must select an item before the owning form can be submitted. */
    required?: boolean;
    /** Whether the radio group is disabled. */
    disabled?: boolean;
    /** Whether the radio group is read only. */
    readOnly?: boolean;
}
interface RadioGroupRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
    "aria-label"?: string;
}
interface RadioGroupRootRenderProps extends RadioGroupRootCommonProps, FormControlDataSet {
    role: "radiogroup";
    "aria-invalid": boolean | undefined;
    "aria-required": boolean | undefined;
    "aria-disabled": boolean | undefined;
    "aria-readonly": boolean | undefined;
    "aria-orientation": Orientation | undefined;
}
type RadioGroupRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = RadioGroupRootOptions & Partial<RadioGroupRootCommonProps<ElementOf<T>>>;
/**
 * A set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.
 * This component is based on the [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/)
 */
declare function RadioGroupRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, RadioGroupRootProps<T>>): solid_js.JSX.Element;

export { RadioGroupItemLabelProps as A, RadioGroupItemLabelRenderProps as B, RadioGroupItemOptions as C, RadioGroupItemProps as D, RadioGroupItemRenderProps as E, RadioGroupLabelCommonProps as F, RadioGroupLabelOptions as G, RadioGroupLabelProps as H, RadioGroupLabelRenderProps as I, RadioGroupRootCommonProps as J, RadioGroupRootOptions as K, RadioGroupRootProps as L, RadioGroupRootRenderProps as M, RadioGroupRoot as R, RadioGroupItem as a, RadioGroupItemControl as b, RadioGroupItemDescription as c, RadioGroupItemIndicator as d, RadioGroupItemInput as e, RadioGroupItemLabel as f, RadioGroupLabel as g, RadioGroupItemCommonProps as h, RadioGroupItemControlCommonProps as i, RadioGroupItemControlOptions as j, RadioGroupItemControlProps as k, RadioGroupItemControlRenderProps as l, RadioGroupItemDescriptionCommonProps as m, RadioGroupItemDescriptionOptions as n, RadioGroupItemDescriptionProps as o, RadioGroupItemDescriptionRenderProps as p, RadioGroupItemIndicatorCommonProps as q, RadioGroupItemIndicatorOptions as r, RadioGroupItemIndicatorProps as s, RadioGroupItemIndicatorRenderProps as t, RadioGroupItemInputCommonProps as u, RadioGroupItemInputOptions as v, RadioGroupItemInputProps as w, RadioGroupItemInputRenderProps as x, RadioGroupItemLabelCommonProps as y, RadioGroupItemLabelOptions as z };
