import * as solid_js from 'solid-js';
import { JSX, ValidComponent, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { a as CollectionNode, C as Collection } from './types-f8ae18e5.js';
import { L as ListState, K as KeyboardDelegate, F as FocusStrategy, a as SelectionBehavior, S as SelectionMode } from './create-list-state-d9a0f1f2.js';

interface ListboxItemDataSet {
    "data-disabled": string | undefined;
    "data-selected": string | undefined;
    "data-highlighted": string | undefined;
}

interface ListboxItemOptions {
    /** The collection node to render. */
    item: CollectionNode;
}
interface ListboxItemCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
    onPointerMove: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface ListboxItemRenderProps extends ListboxItemCommonProps, ListboxItemDataSet {
    role: "option";
    tabIndex: number | undefined;
    "aria-disabled": boolean;
    "aria-selected": boolean | undefined;
    "aria-posinset": number | undefined;
    "aria-setsize": number | undefined;
    "data-key": string | undefined;
}
type ListboxItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = ListboxItemOptions & Partial<ListboxItemCommonProps<ElementOf<T>>>;
/**
 * An item of the listbox.
 */
declare function ListboxItem<T extends ValidComponent = "li">(props: PolymorphicProps<T, ListboxItemProps<T>>): JSX.Element;

interface ListboxItemDescriptionOptions {
}
interface ListboxItemDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ListboxItemDescriptionRenderProps extends ListboxItemDescriptionCommonProps, ListboxItemDataSet {
}
type ListboxItemDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ListboxItemDescriptionOptions & Partial<ListboxItemDescriptionCommonProps<ElementOf<T>>>;
/**
 * An optional accessible description to be announced for the item.
 * Useful for items that have more complex content (e.g. icons, multiple lines of text, etc.)
 */
declare function ListboxItemDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, ListboxItemDescriptionProps<T>>): solid_js.JSX.Element;

interface ListboxItemLabelOptions {
}
interface ListboxItemLabelCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ListboxItemLabelRenderProps extends ListboxItemLabelCommonProps, ListboxItemDataSet {
}
type ListboxItemLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = ListboxItemLabelOptions & Partial<ListboxItemLabelCommonProps<ElementOf<T>>>;
/**
 * An accessible label to be announced for the item.
 * Useful for items that have more complex content (e.g. icons, multiple lines of text, etc.)
 */
declare function ListboxItemLabel<T extends ValidComponent = "div">(props: PolymorphicProps<T, ListboxItemLabelProps<T>>): solid_js.JSX.Element;

interface ListboxRootOptions<Option, OptGroup = never> {
    /** The controlled value of the listbox. */
    value?: Iterable<string>;
    /**
     * The value of the listbox when initially rendered.
     * Useful when you do not need to control the state.
     */
    defaultValue?: Iterable<string>;
    /** Event handler called when the value changes. */
    onChange?: (value: Set<string>) => void;
    /** An array of options to display as the available options. */
    options?: Array<Option | OptGroup>;
    /** Property name or getter function to use as the value of an option. */
    optionValue?: keyof Option | ((option: Option) => string);
    /** Property name or getter function to use as the text value of an option for typeahead purpose. */
    optionTextValue?: keyof Option | ((option: Option) => string);
    /** Property name or getter function to use as the disabled flag of an option. */
    optionDisabled?: keyof Option | ((option: Option) => boolean);
    /** Property name or getter function that refers to the children options of option group. */
    optionGroupChildren?: keyof OptGroup | ((optGroup: OptGroup) => Option[]);
    /** The controlled state of the listbox. */
    state?: ListState;
    /** An optional keyboard delegate implementation for type to select, to override the default. */
    keyboardDelegate?: KeyboardDelegate;
    /** Whether to autofocus the listbox or an option. */
    autoFocus?: boolean | FocusStrategy;
    /** Whether focus should wrap around when the end/start is reached. */
    shouldFocusWrap?: boolean;
    /** Whether the listbox items should use virtual focus instead of being focused directly. */
    shouldUseVirtualFocus?: boolean;
    /** Whether selection should occur on press up instead of press down. */
    shouldSelectOnPressUp?: boolean;
    /** Whether options should be focused when the user hovers over them. */
    shouldFocusOnHover?: boolean;
    /**
     * The ref attached to the scrollable element, used to provide automatic scrolling on item focus.
     * If not provided, defaults to the listbox ref.
     */
    scrollRef?: Accessor<HTMLElement | undefined>;
    /** How multiple selection should behave in the listbox. */
    selectionBehavior?: SelectionBehavior;
    /** Whether onValueChange should fire even if the new set of keys is the same as the last. */
    allowDuplicateSelectionEvents?: boolean;
    /** The type of selection that is allowed in the listbox. */
    selectionMode?: SelectionMode;
    /** Whether the listbox allows empty selection. */
    disallowEmptySelection?: boolean;
    /** Whether selection should occur automatically on focus. */
    selectOnFocus?: boolean;
    /** Whether typeahead is disabled. */
    disallowTypeAhead?: boolean;
    /** Whether navigation through tab key is enabled. */
    allowsTabNavigation?: boolean;
    /** Whether the listbox uses virtual scrolling. */
    virtualized?: boolean;
    /** When NOT virtualized, a map function that receives an _item_ signal representing a listbox item. */
    renderItem?: (item: CollectionNode<Option>) => JSX.Element;
    /** When NOT virtualized, a map function that receives a _section_ signal representing a listbox section. */
    renderSection?: (section: CollectionNode<OptGroup>) => JSX.Element;
    /** When virtualized, the Virtualizer function used to scroll to the item of the given key. */
    scrollToItem?: (key: string) => void;
    /** When virtualized, a map function that receives an _items_ signal representing all listbox items and sections. */
    children?: (items: Accessor<Collection<CollectionNode<Option | OptGroup>>>) => JSX.Element;
}
interface ListboxRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocusIn: JSX.EventHandlerUnion<T, FocusEvent>;
    onFocusOut: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface ListboxRootRenderProps extends ListboxRootCommonProps {
    role: "listbox";
    children: JSX.Element;
    tabIndex: number | undefined;
}
type ListboxRootProps<Option, OptGroup = never, T extends ValidComponent | HTMLElement = HTMLElement> = ListboxRootOptions<Option, OptGroup> & Partial<ListboxRootCommonProps<ElementOf<T>>>;
/**
 * Listbox presents a list of options and allows a user to select one or more of them.
 */
declare function ListboxRoot<Option, OptGroup = never, T extends ValidComponent = "ul">(props: PolymorphicProps<T, ListboxRootProps<Option, OptGroup, T>>): JSX.Element;

interface ListboxSectionOptions {
}
interface ListboxSectionCommonProps<T extends HTMLElement = HTMLElement> {
}
interface ListboxSectionRenderProps extends ListboxSectionCommonProps {
    role: "presentation";
}
type ListboxSectionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ListboxSectionOptions & Partial<ListboxSectionCommonProps<ElementOf<T>>>;
/**
 * A component used to render the label of a listbox option group.
 * It won't be focusable using arrow keys.
 */
declare function ListboxSection<T extends ValidComponent = "li">(props: PolymorphicProps<T, ListboxSectionProps<T>>): solid_js.JSX.Element;

export { ListboxItemDataSet as L, ListboxItem as a, ListboxItemDescription as b, ListboxItemLabel as c, ListboxSection as d, ListboxItemCommonProps as e, ListboxItemDescriptionCommonProps as f, ListboxItemDescriptionOptions as g, ListboxItemDescriptionProps as h, ListboxItemDescriptionRenderProps as i, ListboxItemLabelCommonProps as j, ListboxItemLabelOptions as k, ListboxItemLabelProps as l, ListboxItemLabelRenderProps as m, ListboxItemOptions as n, ListboxItemProps as o, ListboxItemRenderProps as p, ListboxSectionCommonProps as q, ListboxSectionOptions as r, ListboxSectionProps as s, ListboxSectionRenderProps as t, ListboxRoot as u, ListboxRootCommonProps as v, ListboxRootOptions as w, ListboxRootProps as x, ListboxRootRenderProps as y };
