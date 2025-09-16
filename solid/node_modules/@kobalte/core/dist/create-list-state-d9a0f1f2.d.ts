import { Accessor } from 'solid-js';
import { C as Collection, a as CollectionNode, b as CollectionBase } from './types-f8ae18e5.js';
import { MaybeAccessor } from '@kobalte/utils';

type SelectionMode = "none" | "single" | "multiple";
type SelectionBehavior = "toggle" | "replace";
type FocusStrategy = "first" | "last";
interface SingleSelection {
    /** Whether the collection allows empty selection. */
    disallowEmptySelection?: MaybeAccessor<boolean | undefined>;
    /** The currently selected key in the collection (controlled). */
    selectedKey?: MaybeAccessor<string | undefined>;
    /** The initial selected key in the collection (uncontrolled). */
    defaultSelectedKey?: MaybeAccessor<string | undefined>;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (key: string) => any;
}
interface MultipleSelection {
    /** The type of selection that is allowed in the collection. */
    selectionMode?: MaybeAccessor<SelectionMode | undefined>;
    /** Whether the collection allows empty selection. */
    disallowEmptySelection?: MaybeAccessor<boolean | undefined>;
    /** The currently selected keys in the collection (controlled). */
    selectedKeys?: MaybeAccessor<Iterable<string> | undefined>;
    /** The initial selected keys in the collection (uncontrolled). */
    defaultSelectedKeys?: MaybeAccessor<Iterable<string> | undefined>;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (keys: Set<string>) => any;
}
/**
 * A Selection is a special Set containing Keys, which also has an anchor
 * and current selected key for use when range selecting.
 */
declare class Selection extends Set<string> {
    anchorKey?: string;
    currentKey?: string;
    constructor(keys?: Iterable<string> | Selection, anchorKey?: string, currentKey?: string);
}
interface FocusState {
    /** Whether the collection is currently focused. */
    isFocused: Accessor<boolean>;
    /** The current focused key in the collection. */
    focusedKey: Accessor<string | undefined>;
    /** Sets whether the collection is focused. */
    setFocused(isFocused: boolean): void;
    /** Sets the focused key */
    setFocusedKey(key?: string): void;
}
interface SingleSelectionState extends FocusState {
    /** Whether the collection allows empty selection. */
    disallowEmptySelection: Accessor<boolean | undefined>;
    /** The currently selected key in the collection. */
    selectedKey: Accessor<string>;
    /** Sets the selected key in the collection. */
    setSelectedKey: (key: string) => void;
}
interface MultipleSelectionState extends FocusState {
    /** The type of selection that is allowed in the collection. */
    selectionMode: Accessor<SelectionMode>;
    /** The selection behavior for the collection. */
    selectionBehavior: Accessor<SelectionBehavior>;
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior(selectionBehavior: SelectionBehavior): void;
    /** Whether the collection allows empty selection. */
    disallowEmptySelection: Accessor<boolean>;
    /** The currently selected keys in the collection. */
    selectedKeys: Accessor<Set<string>>;
    /** Sets the selected keys in the collection. */
    setSelectedKeys(keys: Set<string>): void;
}
interface MultipleSelectionManager extends FocusState {
    /** The type of selection that is allowed in the collection. */
    selectionMode: Accessor<SelectionMode>;
    /** The selection behavior for the collection. */
    selectionBehavior: Accessor<SelectionBehavior>;
    /** Whether the collection allows empty selection. */
    disallowEmptySelection: Accessor<boolean | undefined>;
    /** The currently selected keys in the collection. */
    selectedKeys: Accessor<Set<string>>;
    /** Whether the selection is empty. */
    isEmpty: Accessor<boolean>;
    /** Whether all items in the collection are selected. */
    isSelectAll: Accessor<boolean>;
    /** The first selected key in the collection. */
    firstSelectedKey: Accessor<string | undefined>;
    /** The last selected key in the collection. */
    lastSelectedKey: Accessor<string | undefined>;
    /** Returns whether a key is selected. */
    isSelected: (key: string) => boolean;
    /** Returns whether the current selection is equal to the given selection. */
    isSelectionEqual(selection: Set<string>): boolean;
    /** Extends the selection to the given key. */
    extendSelection(toKey: string): void;
    /** Toggles whether the given key is selected. */
    toggleSelection: (key: string) => void;
    /** Replaces the selection with only the given key. */
    replaceSelection: (key: string) => void;
    /** Replaces the selection with the given keys. */
    setSelectedKeys(keys: Iterable<string>): void;
    /** Selects all items in the collection. */
    selectAll(): void;
    /** Removes all keys from the selection. */
    clearSelection(): void;
    /** Toggles between select all and an empty selection. */
    toggleSelectAll(): void;
    /**
     * Toggles, replaces, or extends selection to the given key depending
     * on the pointer event and collection's selection mode.
     */
    select(key: string, e?: PointerEvent): void;
    /** Returns whether the given key can be selected. */
    canSelectItem: (key: string) => boolean;
    /**
     * Returns whether the given key is non-interactive,
     * i.e. both selection and actions are disabled.
     */
    isDisabled: (key: string) => boolean;
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior: (selectionBehavior: SelectionBehavior) => void;
}
interface KeyboardDelegate {
    /** Returns the key visually below the given one, or `undefined` for none. */
    getKeyBelow?: (key: string) => string | undefined;
    /** Returns the key visually above the given one, or `undefined` for none. */
    getKeyAbove?: (key: string) => string | undefined;
    /** Returns the key visually to the left of the given one, or `undefined` for none. */
    getKeyLeftOf?: (key: string) => string | undefined;
    /** Returns the key visually to the right of the given one, or `undefined` for none. */
    getKeyRightOf?: (key: string) => string | undefined;
    /** Returns the key visually one page below the given one, or `undefined` for none. */
    getKeyPageBelow?: (key: string) => string | undefined;
    /** Returns the key visually one page above the given one, or `undefined` for none. */
    getKeyPageAbove?: (key: string) => string | undefined;
    /** Returns the first key, or `undefined` for none. */
    getFirstKey?: (key?: string, global?: boolean) => string | undefined;
    /** Returns the last key, or `undefined` for none. */
    getLastKey?: (key?: string, global?: boolean) => string | undefined;
    /** Returns the next key after `fromKey` that matches the given search string, or `undefined` for none. */
    getKeyForSearch?: (search: string, fromKey?: string) => string | undefined;
}

interface CreateMultipleSelectionStateProps extends MultipleSelection {
    /** How multiple selection should behave in the collection. */
    selectionBehavior?: MaybeAccessor<SelectionBehavior | undefined>;
    /** Whether onSelectionChange should fire even if the new set of keys is the same as the last. */
    allowDuplicateSelectionEvents?: MaybeAccessor<boolean | undefined>;
}
/**
 * Manages state for multiple selection and focus in a collection.
 */
declare function createMultipleSelectionState(props: CreateMultipleSelectionStateProps): MultipleSelectionState;

/**
 * An interface for reading and updating multiple selection state.
 */
declare class SelectionManager implements MultipleSelectionManager {
    private collection;
    private state;
    constructor(collection: Accessor<Collection<CollectionNode>>, state: MultipleSelectionState);
    /** The type of selection that is allowed in the collection. */
    selectionMode(): SelectionMode;
    /** Whether the collection allows empty selection. */
    disallowEmptySelection(): boolean;
    /** The selection behavior for the collection. */
    selectionBehavior(): SelectionBehavior;
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior(selectionBehavior: SelectionBehavior): void;
    /** Whether the collection is currently focused. */
    isFocused(): boolean;
    /** Sets whether the collection is focused. */
    setFocused(isFocused: boolean): void;
    /** The current focused key in the collection. */
    focusedKey(): string | undefined;
    /** Sets the focused key. */
    setFocusedKey(key?: string): void;
    /** The currently selected keys in the collection. */
    selectedKeys(): Set<string>;
    /** Returns whether a key is selected. */
    isSelected(key: string): boolean;
    /** Whether the selection is empty. */
    isEmpty(): boolean;
    /** Whether all items in the collection are selected. */
    isSelectAll(): boolean;
    firstSelectedKey(): string | undefined;
    lastSelectedKey(): string | undefined;
    /** Extends the selection to the given key. */
    extendSelection(toKey: string): void;
    private getKeyRange;
    private getKeyRangeInternal;
    private getKey;
    /** Toggles whether the given key is selected. */
    toggleSelection(key: string): void;
    /** Replaces the selection with only the given key. */
    replaceSelection(key: string): void;
    /** Replaces the selection with the given keys. */
    setSelectedKeys(keys: Iterable<string>): void;
    /** Selects all items in the collection. */
    selectAll(): void;
    /**
     * Removes all keys from the selection.
     */
    clearSelection(): void;
    /**
     * Toggles between select all and an empty selection.
     */
    toggleSelectAll(): void;
    select(key: string, e?: PointerEvent): void;
    /** Returns whether the current selection is equal to the given selection. */
    isSelectionEqual(selection: Set<string>): boolean;
    canSelectItem(key: string): boolean;
    isDisabled(key: string): boolean;
    private getAllSelectableKeys;
}

interface CreateListStateProps extends CollectionBase, CreateMultipleSelectionStateProps {
    /** Filter function to generate a filtered list of nodes. */
    filter?: (nodes: Iterable<CollectionNode>) => Iterable<CollectionNode>;
}
interface ListState {
    /** A collection of items in the list. */
    collection: Accessor<Collection<CollectionNode>>;
    /** A selection manager to read and update multiple selection state. */
    selectionManager: Accessor<SelectionManager>;
}
/**
 * Provides state management for list-like components.
 * Handles building a collection of items from props, and manages multiple selection state.
 */
declare function createListState(props: CreateListStateProps): ListState;

export { CreateListStateProps as C, FocusStrategy as F, KeyboardDelegate as K, ListState as L, MultipleSelectionManager as M, SelectionMode as S, SelectionBehavior as a, CreateMultipleSelectionStateProps as b, createListState as c, createMultipleSelectionState as d, SelectionManager as e, SingleSelection as f, MultipleSelection as g, Selection as h, FocusState as i, SingleSelectionState as j, MultipleSelectionState as k };
