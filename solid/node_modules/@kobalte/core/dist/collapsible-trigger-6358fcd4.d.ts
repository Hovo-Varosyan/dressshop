import * as solid_js from 'solid-js';
import { Accessor, JSX, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { a as ButtonRootCommonProps, d as ButtonRootRenderProps } from './button-root-da654b3e.js';

interface CollapsibleDataSet {
    "data-expanded": string | undefined;
    "data-closed": string | undefined;
    "data-disabled": string | undefined;
}
interface CollapsibleContextValue {
    dataset: Accessor<CollapsibleDataSet>;
    isOpen: Accessor<boolean>;
    disabled: Accessor<boolean>;
    shouldMount: Accessor<boolean>;
    contentId: Accessor<string | undefined>;
    toggle: () => void;
    generateId: (part: string) => string;
    registerContentId: (id: string) => () => void;
}
declare function useCollapsibleContext(): CollapsibleContextValue;

interface CollapsibleContentOptions {
}
interface CollapsibleContentCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
    style: JSX.CSSProperties | string;
}
interface CollapsibleContentRenderProps extends CollapsibleContentCommonProps, CollapsibleDataSet {
}
type CollapsibleContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = CollapsibleContentOptions & Partial<CollapsibleContentCommonProps<ElementOf<T>>>;
/**
 * Contains the content to be rendered when the collapsible is expanded.
 */
declare function CollapsibleContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, CollapsibleContentProps<T>>): JSX.Element;

interface CollapsibleRootOptions {
    /** The controlled open state of the collapsible. */
    open?: boolean;
    /**
     * The default open state when initially rendered.
     * Useful when you do not need to control the open state.
     */
    defaultOpen?: boolean;
    /** Event handler called when the open state of the collapsible changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Whether the collapsible is disabled. */
    disabled?: boolean;
    /**
     * Used to force mounting the collapsible content when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface CollapsibleRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface CollapsibleRootRenderProps extends CollapsibleRootCommonProps, CollapsibleDataSet {
}
type CollapsibleRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = CollapsibleRootOptions & Partial<CollapsibleRootCommonProps<ElementOf<T>>>;
/**
 * An interactive component which expands/collapses a content.
 */
declare function CollapsibleRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, CollapsibleRootProps<T>>): solid_js.JSX.Element;

interface CollapsibleTriggerOptions {
}
interface CollapsibleTriggerCommonProps<T extends HTMLElement = HTMLElement> extends ButtonRootCommonProps<T> {
    ref: T | ((el: T) => void);
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface CollapsibleTriggerRenderProps extends CollapsibleTriggerCommonProps, ButtonRootRenderProps {
    "aria-expanded": boolean;
    "aria-controls": string | undefined;
}
type CollapsibleTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = CollapsibleTriggerOptions & Partial<CollapsibleTriggerCommonProps<ElementOf<T>>>;
/**
 * The button that expands/collapses the collapsible content.
 */
declare function CollapsibleTrigger<T extends ValidComponent = "div">(props: PolymorphicProps<T, CollapsibleTriggerProps<T>>): JSX.Element;

export { CollapsibleRoot as C, CollapsibleContent as a, CollapsibleTrigger as b, CollapsibleContentCommonProps as c, CollapsibleContentOptions as d, CollapsibleContentProps as e, CollapsibleContentRenderProps as f, CollapsibleContextValue as g, CollapsibleRootCommonProps as h, CollapsibleRootOptions as i, CollapsibleRootProps as j, CollapsibleRootRenderProps as k, CollapsibleTriggerCommonProps as l, CollapsibleTriggerOptions as m, CollapsibleTriggerProps as n, CollapsibleTriggerRenderProps as o, CollapsibleDataSet as p, useCollapsibleContext as u };
