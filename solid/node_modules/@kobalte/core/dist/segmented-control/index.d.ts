import { PolymorphicProps, ElementOf } from '../polymorphic/index.js';
import * as solid_js from 'solid-js';
import { JSX, ValidComponent, Accessor, Setter } from 'solid-js';
import { a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as SegmentedControlDescriptionCommonProps, b as SegmentedControlDescriptionOptions, e as SegmentedControlDescriptionProps, d as SegmentedControlDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as SegmentedControlErrorMessageCommonProps, a as SegmentedControlErrorMessageOptions, d as SegmentedControlErrorMessageProps, c as SegmentedControlErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';
import { C as RadioGroupItemOptions, h as RadioGroupItemCommonProps, E as RadioGroupItemRenderProps, v as RadioGroupItemInputOptions, u as RadioGroupItemInputCommonProps, x as RadioGroupItemInputRenderProps, L as RadioGroupRootProps, b as RadioGroupItemControl, c as RadioGroupItemDescription, d as RadioGroupItemIndicator, f as RadioGroupItemLabel, g as RadioGroupLabel } from '../radio-group-root-0af7f9b9.js';
export { i as SegmentedControlItemControlCommonProps, j as SegmentedControlItemControlOptions, k as SegmentedControlItemControlProps, l as SegmentedControlItemControlRenderProps, m as SegmentedControlItemDescriptionCommonProps, n as SegmentedControlItemDescriptionOptions, o as SegmentedControlItemDescriptionProps, p as SegmentedControlItemDescriptionRenderProps, q as SegmentedControlItemIndicatorCommonProps, r as SegmentedControlItemIndicatorOptions, s as SegmentedControlItemIndicatorProps, t as SegmentedControlItemIndicatorRenderProps, y as SegmentedControlItemLabelCommonProps, z as SegmentedControlItemLabelOptions, A as SegmentedControlItemLabelProps, B as SegmentedControlItemLabelRenderProps } from '../radio-group-root-0af7f9b9.js';
import { Orientation } from '@kobalte/utils';

interface SegmentedControlIndicatorOptions {
}
interface SegmentedControlIndicatorCommonProps {
    style?: JSX.CSSProperties | string;
}
interface SegmentedControlIndicatorRenderProps extends SegmentedControlIndicatorCommonProps {
    role: "presentation";
}
type SegmentedControlIndicatorProps = SegmentedControlIndicatorOptions & Partial<SegmentedControlIndicatorCommonProps>;
declare function SegmentedControlIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, SegmentedControlIndicatorProps>): JSX.Element;

interface SegmentedControlItemOptions extends RadioGroupItemOptions {
}
interface SegmentedControlItemCommonProps<T extends HTMLElement = HTMLElement> extends RadioGroupItemCommonProps<T> {
    ref?: T | ((el: T) => void);
}
interface SegmentedControlItemRenderProps extends RadioGroupItemRenderProps {
}
type SegmentedControlItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = SegmentedControlItemOptions & Partial<SegmentedControlItemCommonProps<ElementOf<T>>>;
declare const SegmentedControlItem: <T extends ValidComponent = "div">(props: PolymorphicProps<T, SegmentedControlItemProps<T>>) => solid_js.JSX.Element;

interface SegmentedControlItemInputOptions extends RadioGroupItemInputOptions {
}
interface SegmentedControlItemInputCommonProps<T extends HTMLElement = HTMLInputElement> extends RadioGroupItemInputCommonProps<T> {
}
interface SegmentedControlItemInputRenderProps extends RadioGroupItemInputRenderProps {
}
type SegmentedControlItemInputProps<T extends ValidComponent | HTMLElement = HTMLElement> = SegmentedControlItemInputOptions & Partial<SegmentedControlItemInputCommonProps<ElementOf<T>>>;
declare const SegmentedControlItemInput: <T extends ValidComponent = "input">(props: PolymorphicProps<T, SegmentedControlItemInputProps<T>>) => solid_js.JSX.Element;

type SegmentedControlRootProps = RadioGroupRootProps;
declare const SegmentedControlRoot: <T extends ValidComponent = "div">(props: PolymorphicProps<T, SegmentedControlRootProps>) => solid_js.JSX.Element;

interface SegmentedControlContextValue {
    value: Accessor<string | undefined>;
    defaultValue: Accessor<string | undefined>;
    orientation: Accessor<Orientation | undefined>;
    root: Accessor<HTMLElement | undefined>;
    selectedItem: Accessor<HTMLElement | undefined>;
    setSelectedItem: Setter<HTMLElement | undefined>;
}
declare function useSegmentedControlContext(): SegmentedControlContextValue;

declare const SegmentedControl: (<T extends solid_js.ValidComponent = "div">(props: PolymorphicProps<T, SegmentedControlRootProps>) => solid_js.JSX.Element) & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Indicator: typeof SegmentedControlIndicator;
    Item: <T_1 extends solid_js.ValidComponent = "div">(props: PolymorphicProps<T_1, SegmentedControlItemProps<T_1>>) => solid_js.JSX.Element;
    ItemControl: typeof RadioGroupItemControl;
    ItemDescription: typeof RadioGroupItemDescription;
    ItemIndicator: typeof RadioGroupItemIndicator;
    ItemInput: <T_2 extends solid_js.ValidComponent = "input">(props: PolymorphicProps<T_2, SegmentedControlItemInputProps<T_2>>) => solid_js.JSX.Element;
    ItemLabel: typeof RadioGroupItemLabel;
    Label: typeof RadioGroupLabel;
};

export { FormControlDescription as Description, FormControlErrorMessage as ErrorMessage, SegmentedControlIndicator as Indicator, SegmentedControlItem as Item, RadioGroupItemControl as ItemControl, RadioGroupItemDescription as ItemDescription, RadioGroupItemIndicator as ItemIndicator, SegmentedControlItemInput as ItemInput, RadioGroupItemLabel as ItemLabel, RadioGroupLabel as Label, SegmentedControlRoot as Root, SegmentedControl, SegmentedControlContextValue, SegmentedControlIndicatorCommonProps, SegmentedControlIndicatorOptions, SegmentedControlIndicatorProps, SegmentedControlIndicatorRenderProps, SegmentedControlItemCommonProps, SegmentedControlItemInputCommonProps, SegmentedControlItemInputOptions, SegmentedControlItemInputProps, SegmentedControlItemInputRenderProps, SegmentedControlItemOptions, SegmentedControlItemProps, SegmentedControlItemRenderProps, SegmentedControlRootProps, useSegmentedControlContext };
