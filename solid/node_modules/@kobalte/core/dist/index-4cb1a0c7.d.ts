import * as solid_js from 'solid-js';
import { ValidComponent, JSX, Accessor } from 'solid-js';
import { c as CollapsibleContentCommonProps, f as CollapsibleContentRenderProps, p as CollapsibleDataSet, h as CollapsibleRootCommonProps, k as CollapsibleRootRenderProps, l as CollapsibleTriggerCommonProps, o as CollapsibleTriggerRenderProps } from './collapsible-trigger-6358fcd4.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { L as ListState } from './create-list-state-d9a0f1f2.js';

interface AccordionContentOptions {
}
interface AccordionContentCommonProps<T extends HTMLElement = HTMLElement> extends CollapsibleContentCommonProps<T> {
    id: string;
}
interface AccordionContentRenderProps extends AccordionContentCommonProps, CollapsibleContentRenderProps {
    role: "region";
    "aria-labelledby": string | undefined;
}
type AccordionContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionContentOptions & Partial<AccordionContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content to be rendered when the `Accordion.Item` is expanded.
 */
declare function AccordionContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, AccordionContentProps<T>>): solid_js.JSX.Element;

interface AccordionHeaderOptions {
}
interface AccordionHeaderCommonProps<T extends HTMLElement = HTMLElement> {
}
interface AccordionHeaderRenderProps extends AccordionHeaderCommonProps, CollapsibleDataSet {
}
type AccordionHeaderProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionHeaderOptions & Partial<AccordionHeaderCommonProps<ElementOf<T>>>;
/**
 * Wraps an `Accordion.Trigger`.
 * Use the `as` prop to update it to the appropriate heading level for your page.
 */
declare function AccordionHeader<T extends ValidComponent = "h3">(props: PolymorphicProps<T, AccordionHeaderProps<T>>): solid_js.JSX.Element;

interface AccordionItemOptions {
    /** A unique value for the item. */
    value: string;
    /** Whether the item is disabled. */
    disabled?: boolean;
    /**
     * Used to force mounting the item content when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface AccordionItemCommonProps<T extends HTMLElement = HTMLElement> extends CollapsibleRootCommonProps<T> {
}
interface AccordionItemRenderProps extends AccordionItemCommonProps, CollapsibleRootRenderProps {
}
type AccordionItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionItemOptions & Partial<AccordionItemRenderProps>;
/**
 * An item of the accordion, contains all the parts of a collapsible section.
 */
declare function AccordionItem<T extends ValidComponent = "div">(props: PolymorphicProps<T, AccordionItemProps<T>>): JSX.Element;

interface AccordionRootOptions {
    /** The controlled value of the accordion item(s) to expand. */
    value?: string[];
    /**
     * The value of the accordion item(s) to expand when initially rendered.
     * Useful when you do not need to control the state.
     */
    defaultValue?: string[];
    /** Event handler called when the value changes. */
    onChange?: (value: string[]) => void;
    /** Whether multiple items can be opened at the same time. */
    multiple?: boolean;
    /** When `multiple` is `false`, allows closing content when clicking trigger for an open item. */
    collapsible?: boolean;
    /** Whether focus should wrap around when the end/start is reached. */
    shouldFocusWrap?: boolean;
}
interface AccordionRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocusIn: JSX.EventHandlerUnion<T, FocusEvent>;
    onFocusOut: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface AccordionRootRenderProps extends AccordionRootCommonProps {
}
type AccordionRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionRootOptions & Partial<AccordionRootCommonProps<ElementOf<T>>>;
/**
 * A vertically stacked set of interactive headings that each reveal an associated section of content.
 */
declare function AccordionRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, AccordionRootProps<T>>): JSX.Element;

interface AccordionTriggerOptions {
}
interface AccordionTriggerCommonProps<T extends HTMLElement = HTMLElement> extends CollapsibleTriggerCommonProps<T> {
    id: string;
    onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>;
    onPointerUp: JSX.EventHandlerUnion<T, PointerEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onMouseDown: JSX.EventHandlerUnion<T, MouseEvent>;
    onFocus: JSX.EventHandlerUnion<T, FocusEvent>;
}
interface AccordionTriggerRenderProps extends AccordionTriggerCommonProps, CollapsibleTriggerRenderProps {
    "data-key": string | undefined;
}
type AccordionTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionTriggerOptions & Partial<AccordionTriggerCommonProps<ElementOf<T>>>;
/**
 * Toggles the collapsed state of its associated item. It should be nested inside an `Accordion.Header`.
 */
declare function AccordionTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, AccordionTriggerProps<T>>): JSX.Element;

interface AccordionContextValue {
    listState: Accessor<ListState>;
    generateId: (part: string) => string;
}
declare function useAccordionContext(): AccordionContextValue;

declare const Accordion: typeof AccordionRoot & {
    Content: typeof AccordionContent;
    Header: typeof AccordionHeader;
    Item: typeof AccordionItem;
    Trigger: typeof AccordionTrigger;
};

declare const index_Accordion: typeof Accordion;
type index_AccordionContentCommonProps<T extends HTMLElement = HTMLElement> = AccordionContentCommonProps<T>;
type index_AccordionContentOptions = AccordionContentOptions;
type index_AccordionContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionContentProps<T>;
type index_AccordionContentRenderProps = AccordionContentRenderProps;
type index_AccordionContextValue = AccordionContextValue;
type index_AccordionHeaderCommonProps<T extends HTMLElement = HTMLElement> = AccordionHeaderCommonProps<T>;
type index_AccordionHeaderOptions = AccordionHeaderOptions;
type index_AccordionHeaderProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionHeaderProps<T>;
type index_AccordionHeaderRenderProps = AccordionHeaderRenderProps;
type index_AccordionItemCommonProps<T extends HTMLElement = HTMLElement> = AccordionItemCommonProps<T>;
type index_AccordionItemOptions = AccordionItemOptions;
type index_AccordionItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionItemProps<T>;
type index_AccordionItemRenderProps = AccordionItemRenderProps;
type index_AccordionRootCommonProps<T extends HTMLElement = HTMLElement> = AccordionRootCommonProps<T>;
type index_AccordionRootOptions = AccordionRootOptions;
type index_AccordionRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionRootProps<T>;
type index_AccordionRootRenderProps = AccordionRootRenderProps;
type index_AccordionTriggerCommonProps<T extends HTMLElement = HTMLElement> = AccordionTriggerCommonProps<T>;
type index_AccordionTriggerOptions = AccordionTriggerOptions;
type index_AccordionTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = AccordionTriggerProps<T>;
type index_AccordionTriggerRenderProps = AccordionTriggerRenderProps;
declare const index_useAccordionContext: typeof useAccordionContext;
declare namespace index {
  export {
    index_Accordion as Accordion,
    index_AccordionContentCommonProps as AccordionContentCommonProps,
    index_AccordionContentOptions as AccordionContentOptions,
    index_AccordionContentProps as AccordionContentProps,
    index_AccordionContentRenderProps as AccordionContentRenderProps,
    index_AccordionContextValue as AccordionContextValue,
    index_AccordionHeaderCommonProps as AccordionHeaderCommonProps,
    index_AccordionHeaderOptions as AccordionHeaderOptions,
    index_AccordionHeaderProps as AccordionHeaderProps,
    index_AccordionHeaderRenderProps as AccordionHeaderRenderProps,
    index_AccordionItemCommonProps as AccordionItemCommonProps,
    index_AccordionItemOptions as AccordionItemOptions,
    index_AccordionItemProps as AccordionItemProps,
    index_AccordionItemRenderProps as AccordionItemRenderProps,
    index_AccordionRootCommonProps as AccordionRootCommonProps,
    index_AccordionRootOptions as AccordionRootOptions,
    index_AccordionRootProps as AccordionRootProps,
    index_AccordionRootRenderProps as AccordionRootRenderProps,
    index_AccordionTriggerCommonProps as AccordionTriggerCommonProps,
    index_AccordionTriggerOptions as AccordionTriggerOptions,
    index_AccordionTriggerProps as AccordionTriggerProps,
    index_AccordionTriggerRenderProps as AccordionTriggerRenderProps,
    AccordionContent as Content,
    AccordionHeader as Header,
    AccordionItem as Item,
    AccordionRoot as Root,
    AccordionTrigger as Trigger,
    index_useAccordionContext as useAccordionContext,
  };
}

export { AccordionContentOptions as A, useAccordionContext as B, AccordionContextValue as C, AccordionContentCommonProps as a, AccordionContentRenderProps as b, AccordionContentProps as c, AccordionHeaderOptions as d, AccordionHeaderCommonProps as e, AccordionHeaderRenderProps as f, AccordionHeaderProps as g, AccordionItemOptions as h, index as i, AccordionItemCommonProps as j, AccordionItemRenderProps as k, AccordionItemProps as l, AccordionRootOptions as m, AccordionRootCommonProps as n, AccordionRootRenderProps as o, AccordionRootProps as p, AccordionTriggerOptions as q, AccordionTriggerCommonProps as r, AccordionTriggerRenderProps as s, AccordionTriggerProps as t, AccordionContent as u, AccordionHeader as v, AccordionItem as w, AccordionRoot as x, AccordionTrigger as y, Accordion as z };
