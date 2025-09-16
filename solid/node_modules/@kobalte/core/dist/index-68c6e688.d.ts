import { Orientation } from '@kobalte/utils';
import * as solid_js from 'solid-js';
import { JSX, ValidComponent, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { b as ToggleButtonRootOptions, d as ToggleButtonRootRenderProps } from './toggle-button-root-1cfacf95.js';
import { S as SelectionMode, L as ListState } from './create-list-state-d9a0f1f2.js';

interface ToggleGroupItemOptions extends Omit<ToggleButtonRootOptions, "pressed" | "defaultPressed" | "onChange"> {
    /** A string value for the toggle group item. All items within a toggle group should use a unique value. */
    value: string;
}
interface ToggleGroupItemCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    disabled: boolean | undefined;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface ToggleGroupItemRenderProps extends ToggleGroupItemCommonProps, ToggleButtonRootRenderProps {
    tabIndex: number | undefined;
    "data-orientation": Orientation;
}
type ToggleGroupItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToggleGroupItemOptions & Partial<ToggleGroupItemCommonProps<ElementOf<T>>>;
declare function ToggleGroupItem<T extends ValidComponent = "button">(props: PolymorphicProps<T, ToggleGroupItemProps<T>>): JSX.Element;

interface ToggleGroupBaseOptions {
    /** The controlled value of the toggle group. */
    value?: string[];
    /**
     * The value of the select when initially rendered.
     * Useful when you do not need to control the value.
     */
    defaultValue?: string[];
    /** Event handler called when the value changes. */
    onChange?: (value: string[]) => void;
    /** The type of selection that is allowed in the toggle group. */
    selectionMode?: Exclude<SelectionMode, "none">;
    /** Whether the toggle group is disabled. */
    disabled?: boolean;
    /** The axis the toggle group items should align with. */
    orientation?: Orientation;
}

interface ToggleGroupSingleOptions {
    /** The controlled value of the toggle group. */
    value?: string | null;
    /**
     * The value of the select when initially rendered.
     * Useful when you do not need to control the value.
     */
    defaultValue?: string;
    /** Event handler called when the value changes. */
    onChange?: (value: string | null) => void;
    /** Whether the toggle group allow multiple selection. */
    multiple?: false;
}
interface ToggleGroupMultipleOptions {
    /** The controlled value of the toggle group select. */
    value?: string[];
    /**
     * The value of the select when initially rendered.
     * Useful when you do not need to control the value.
     */
    defaultValue?: string[];
    /** Event handler called when the value changes. */
    onChange?: (value: string[]) => void;
    /** Whether the toggle group allow multiple selection. */
    multiple: true;
}
type ToggleGroupRootOptions = (ToggleGroupSingleOptions | ToggleGroupMultipleOptions) & Omit<ToggleGroupBaseOptions, "value" | "defaultValue" | "onChange" | "selectionMode">;
interface ToggleGroupRootCommonProps<T extends HTMLElement = HTMLElement> {
}
interface ToggleGroupRootRenderProps extends ToggleGroupRootCommonProps {
}
type ToggleGroupRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToggleGroupRootOptions & Partial<ToggleGroupRootCommonProps<ElementOf<T>>>;
declare function ToggleGroup$1<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToggleGroupRootProps<T>>): solid_js.JSX.Element;

interface ToggleGroupContextValue {
    isMultiple: Accessor<boolean>;
    isDisabled: Accessor<boolean>;
    listState: Accessor<ListState>;
    generateId: (part: string) => string;
    orientation: Accessor<Orientation>;
}
declare function useToggleGroupContext(): ToggleGroupContextValue;

declare const ToggleGroup: typeof ToggleGroup$1 & {
    Item: typeof ToggleGroupItem;
};

declare const index_ToggleGroup: typeof ToggleGroup;
type index_ToggleGroupContextValue = ToggleGroupContextValue;
type index_ToggleGroupItemCommonProps<T extends HTMLElement = HTMLElement> = ToggleGroupItemCommonProps<T>;
type index_ToggleGroupItemOptions = ToggleGroupItemOptions;
type index_ToggleGroupItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToggleGroupItemProps<T>;
type index_ToggleGroupItemRenderProps = ToggleGroupItemRenderProps;
type index_ToggleGroupRootCommonProps<T extends HTMLElement = HTMLElement> = ToggleGroupRootCommonProps<T>;
type index_ToggleGroupRootOptions = ToggleGroupRootOptions;
type index_ToggleGroupRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToggleGroupRootProps<T>;
type index_ToggleGroupRootRenderProps = ToggleGroupRootRenderProps;
declare const index_useToggleGroupContext: typeof useToggleGroupContext;
declare namespace index {
  export {
    ToggleGroupItem as Item,
    ToggleGroup$1 as Root,
    index_ToggleGroup as ToggleGroup,
    index_ToggleGroupContextValue as ToggleGroupContextValue,
    index_ToggleGroupItemCommonProps as ToggleGroupItemCommonProps,
    index_ToggleGroupItemOptions as ToggleGroupItemOptions,
    index_ToggleGroupItemProps as ToggleGroupItemProps,
    index_ToggleGroupItemRenderProps as ToggleGroupItemRenderProps,
    index_ToggleGroupRootCommonProps as ToggleGroupRootCommonProps,
    index_ToggleGroupRootOptions as ToggleGroupRootOptions,
    index_ToggleGroupRootProps as ToggleGroupRootProps,
    index_ToggleGroupRootRenderProps as ToggleGroupRootRenderProps,
    index_useToggleGroupContext as useToggleGroupContext,
  };
}

export { ToggleGroupItem as T, ToggleGroup$1 as a, ToggleGroupItemOptions as b, ToggleGroupItemCommonProps as c, ToggleGroupItemRenderProps as d, ToggleGroupItemProps as e, ToggleGroupRootOptions as f, ToggleGroupRootCommonProps as g, ToggleGroupRootRenderProps as h, index as i, ToggleGroupRootProps as j, ToggleGroup as k, ToggleGroupContextValue as l, useToggleGroupContext as u };
