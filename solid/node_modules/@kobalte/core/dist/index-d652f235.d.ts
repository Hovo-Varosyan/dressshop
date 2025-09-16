import * as solid_js from 'solid-js';
import { Accessor, ValidComponent, JSX, Setter } from 'solid-js';
import { Orientation } from '@kobalte/utils';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { b as CollectionBase, a as CollectionNode } from './types-f8ae18e5.js';
import { f as SingleSelection, L as ListState } from './create-list-state-d9a0f1f2.js';

interface CreateSingleSelectListStateProps extends CollectionBase, Omit<SingleSelection, "disallowEmptySelection"> {
    /** Filter function to generate a filtered list of nodes. */
    filter?: (nodes: Iterable<CollectionNode>) => Iterable<CollectionNode>;
}
interface SingleSelectListState extends ListState {
    /** The value of the currently selected item. */
    selectedItem: Accessor<CollectionNode | undefined>;
    /** The key for the currently selected item. */
    selectedKey: Accessor<string | undefined>;
    /** Sets the selected key. */
    setSelectedKey(key: string): void;
}
/**
 * Provides state management for list-like components with single selection.
 * Handles building a collection of items from props, and manages selection state.
 */
declare function createSingleSelectListState(props: CreateSingleSelectListStateProps): SingleSelectListState;

interface TabsContentOptions {
    /** The unique key that associates the tab panel with a tab. */
    value: string;
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface TabsContentCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface TabsContentRenderProps extends TabsContentCommonProps {
    role: "tabpanel";
    tabIndex: number | undefined;
    "aria-labelledby": string | undefined;
    "data-orientation": Orientation;
    "data-selected": string | undefined;
}
type TabsContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsContentOptions & Partial<TabsContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content associated with a tab trigger.
 */
declare function TabsContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsContentProps<T>>): solid_js.JSX.Element;

interface TabsIndicatorOptions {
}
interface TabsIndicatorCommonProps<T extends HTMLElement = HTMLElement> {
    style?: JSX.CSSProperties | string;
}
interface TabsIndicatorRenderProps extends TabsIndicatorCommonProps {
    role: "presentation";
    "data-orientation": Orientation;
}
type TabsIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsIndicatorOptions & Partial<TabsIndicatorCommonProps<ElementOf<T>>>;
/**
 * The visual indicator displayed at the bottom of the tab list to indicate the selected tab.
 * It provides the base style needed to display a smooth transition to the new selected tab.
 */
declare function TabsIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsIndicatorProps<T>>): JSX.Element;

interface TabsListOptions {
}
interface TabsListCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocusIn: JSX.EventHandlerUnion<T, FocusEvent>;
    onFocusOut: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface TabsListRenderProps extends TabsListCommonProps {
    role: "tablist";
    "aria-orientation": Orientation;
    "data-orientation": Orientation;
}
type TabsListProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsListOptions & Partial<TabsListCommonProps<ElementOf<T>>>;
/**
 * Contains the tabs that are aligned along the edge of the active tab panel.
 */
declare function TabsList<T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsListProps<T>>): JSX.Element;

type TabsActivationMode = "automatic" | "manual";

interface TabsRootOptions {
    /** The controlled value of the tab to activate. */
    value?: string;
    /**
     * The value of the tab that should be active when initially rendered.
     * Useful when you do not need to control the state.
     */
    defaultValue?: string;
    /** Event handler called when the value changes. */
    onChange?: (value: string) => void;
    /** The orientation of the tabs. */
    orientation?: Orientation;
    /** Whether tabs are activated automatically on focus or manually. */
    activationMode?: TabsActivationMode;
    /** Whether the tabs are disabled. */
    disabled?: boolean;
}
interface TabsRootCommonProps<T extends HTMLElement = HTMLElement> {
    id?: string;
}
interface TabsRootRenderProps extends TabsRootCommonProps {
    "data-orientation": Orientation;
}
type TabsRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsRootOptions & Partial<TabsRootCommonProps<ElementOf<T>>>;
/**
 * A set of layered sections of content, known as tab panels, that display one panel of content at a time.
 * `Tabs` contains all the parts of a tabs component and provide context for its children.
 */
declare function TabsRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsRootProps<T>>): solid_js.JSX.Element;

interface TabsTriggerOptions {
    /** The unique key that associates the tab with a tab panel. */
    value: string;
    /** Whether the tab should be disabled. */
    disabled?: boolean;
}
interface TabsTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    type: "button";
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface TabsTriggerRenderProps extends TabsTriggerCommonProps {
    role: "tab";
    tabIndex: number | undefined;
    disabled: boolean;
    "aria-selected": boolean;
    "aria-disabled": boolean | undefined;
    "aria-controls": string | undefined;
    "data-key": string | undefined;
    "data-orientation": Orientation;
    "data-selected": string | undefined;
    "data-highlighted": string | undefined;
    "data-disabled": string | undefined;
}
type TabsTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsTriggerOptions & Partial<TabsTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that activates its associated tab panel.
 */
declare function TabsTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, TabsTriggerProps<T>>): JSX.Element;

interface TabsContextValue {
    isDisabled: Accessor<boolean>;
    orientation: Accessor<Orientation>;
    activationMode: Accessor<TabsActivationMode>;
    triggerIdsMap: Accessor<Map<string, string>>;
    contentIdsMap: Accessor<Map<string, string>>;
    listState: Accessor<SingleSelectListState>;
    selectedTab: Accessor<HTMLElement | undefined>;
    setSelectedTab: Setter<HTMLElement | undefined>;
    generateTriggerId: (value: string) => string;
    generateContentId: (value: string) => string;
}
declare function useTabsContext(): TabsContextValue;

declare const Tabs: typeof TabsRoot & {
    Content: typeof TabsContent;
    Indicator: typeof TabsIndicator;
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
};

declare const index_Tabs: typeof Tabs;
type index_TabsContentCommonProps<T extends HTMLElement = HTMLElement> = TabsContentCommonProps<T>;
type index_TabsContentOptions = TabsContentOptions;
type index_TabsContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsContentProps<T>;
type index_TabsContentRenderProps = TabsContentRenderProps;
type index_TabsContextValue = TabsContextValue;
type index_TabsIndicatorCommonProps<T extends HTMLElement = HTMLElement> = TabsIndicatorCommonProps<T>;
type index_TabsIndicatorOptions = TabsIndicatorOptions;
type index_TabsIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsIndicatorProps<T>;
type index_TabsIndicatorRenderProps = TabsIndicatorRenderProps;
type index_TabsListCommonProps<T extends HTMLElement = HTMLElement> = TabsListCommonProps<T>;
type index_TabsListOptions = TabsListOptions;
type index_TabsListProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsListProps<T>;
type index_TabsListRenderProps = TabsListRenderProps;
type index_TabsRootCommonProps<T extends HTMLElement = HTMLElement> = TabsRootCommonProps<T>;
type index_TabsRootOptions = TabsRootOptions;
type index_TabsRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsRootProps<T>;
type index_TabsRootRenderProps = TabsRootRenderProps;
type index_TabsTriggerCommonProps<T extends HTMLElement = HTMLElement> = TabsTriggerCommonProps<T>;
type index_TabsTriggerOptions = TabsTriggerOptions;
type index_TabsTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = TabsTriggerProps<T>;
type index_TabsTriggerRenderProps = TabsTriggerRenderProps;
declare const index_useTabsContext: typeof useTabsContext;
declare namespace index {
  export {
    TabsContent as Content,
    TabsIndicator as Indicator,
    TabsList as List,
    TabsRoot as Root,
    index_Tabs as Tabs,
    index_TabsContentCommonProps as TabsContentCommonProps,
    index_TabsContentOptions as TabsContentOptions,
    index_TabsContentProps as TabsContentProps,
    index_TabsContentRenderProps as TabsContentRenderProps,
    index_TabsContextValue as TabsContextValue,
    index_TabsIndicatorCommonProps as TabsIndicatorCommonProps,
    index_TabsIndicatorOptions as TabsIndicatorOptions,
    index_TabsIndicatorProps as TabsIndicatorProps,
    index_TabsIndicatorRenderProps as TabsIndicatorRenderProps,
    index_TabsListCommonProps as TabsListCommonProps,
    index_TabsListOptions as TabsListOptions,
    index_TabsListProps as TabsListProps,
    index_TabsListRenderProps as TabsListRenderProps,
    index_TabsRootCommonProps as TabsRootCommonProps,
    index_TabsRootOptions as TabsRootOptions,
    index_TabsRootProps as TabsRootProps,
    index_TabsRootRenderProps as TabsRootRenderProps,
    index_TabsTriggerCommonProps as TabsTriggerCommonProps,
    index_TabsTriggerOptions as TabsTriggerOptions,
    index_TabsTriggerProps as TabsTriggerProps,
    index_TabsTriggerRenderProps as TabsTriggerRenderProps,
    TabsTrigger as Trigger,
    index_useTabsContext as useTabsContext,
  };
}

export { Tabs as A, useTabsContext as B, CreateSingleSelectListStateProps as C, TabsContextValue as D, SingleSelectListState as S, TabsContentOptions as T, TabsContentCommonProps as a, TabsContentRenderProps as b, createSingleSelectListState as c, TabsContentProps as d, TabsIndicatorOptions as e, TabsIndicatorCommonProps as f, TabsIndicatorRenderProps as g, TabsIndicatorProps as h, index as i, TabsListOptions as j, TabsListCommonProps as k, TabsListRenderProps as l, TabsListProps as m, TabsRootOptions as n, TabsRootCommonProps as o, TabsRootRenderProps as p, TabsRootProps as q, TabsTriggerOptions as r, TabsTriggerCommonProps as s, TabsTriggerRenderProps as t, TabsTriggerProps as u, TabsContent as v, TabsIndicator as w, TabsList as x, TabsRoot as y, TabsTrigger as z };
