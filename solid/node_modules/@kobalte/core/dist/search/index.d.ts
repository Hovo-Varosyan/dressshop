import { a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as SearchDescriptionCommonProps, b as SearchDescriptionOptions, e as SearchDescriptionProps, d as SearchDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlLabel } from '../form-control-label-2a5ca7a3.js';
export { b as SearchLabelCommonProps, a as SearchLabelOptions, d as SearchLabelProps, c as SearchLabelRenderProps } from '../form-control-label-2a5ca7a3.js';
import { a as ListboxItem, b as ListboxItemDescription, c as ListboxItemLabel, d as ListboxSection } from '../listbox-section-58338bda.js';
export { e as SearchItemCommonProps, f as SearchItemDescriptionCommonProps, g as SearchItemDescriptionOptions, h as SearchItemDescriptionProps, i as SearchItemDescriptionRenderProps, j as SearchItemLabelCommonProps, k as SearchItemLabelOptions, l as SearchItemLabelProps, m as SearchItemLabelRenderProps, n as SearchItemOptions, o as SearchItemProps, p as SearchItemRenderProps, q as SearchSectionCommonProps, r as SearchSectionOptions, s as SearchSectionProps, t as SearchSectionRenderProps } from '../listbox-section-58338bda.js';
import { P as PopperArrow } from '../popper-root-14a88a55.js';
export { a as SearchArrowOptions, b as SearchArrowProps } from '../popper-root-14a88a55.js';
import { K as ComboboxSingleSelectionOptions, B as ComboboxMultipleSelectionOptions, N as ComboboxBaseRenderProps, O as ComboboxBaseOptions, b as ComboboxContent, c as ComboboxControl, d as ComboboxHiddenSelect, e as ComboboxIcon, f as ComboboxInput, g as ComboboxListbox, h as ComboboxPortal } from '../combobox-root-a533b55f.js';
export { i as SearchContentCommonProps, j as SearchContentOptions, k as SearchContentProps, l as SearchContentRenderProps, n as SearchControlCommonProps, o as SearchControlOptions, p as SearchControlProps, q as SearchControlRenderProps, r as SearchHiddenSelectProps, s as SearchIconProps, t as SearchInputCommonProps, u as SearchInputOptions, v as SearchInputProps, w as SearchInputRenderProps, x as SearchListboxCommonProps, y as SearchListboxOptions, z as SearchListboxProps, A as SearchListboxRenderProps, D as SearchPortalProps, F as SearchRootItemComponentProps, J as SearchRootSectionComponentProps, L as SearchTriggerMode } from '../combobox-root-a533b55f.js';
import * as solid_js from 'solid-js';
import { JSX, ValidComponent, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import '@kobalte/utils';
import '../types-f8ae18e5.js';
import '../types-6adf33e1.js';
import '../create-list-state-d9a0f1f2.js';
import '../dismissable-layer-0aef6de3.js';
import '../primitives/create-interact-outside/index.js';
import 'solid-js/web';

interface SearchIndicatorOptions {
}
interface SearchIndicatorCommonProps<T extends HTMLElement = HTMLElement> {
    children: JSX.Element;
    loadingComponent?: JSX.Element;
}
type SearchIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = SearchIndicatorOptions & Partial<SearchIndicatorCommonProps<ElementOf<T>>>;
declare function SearchIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, SearchIndicatorProps<T>>): JSX.Element;

interface SearchNoResultOptions {
}
interface SearchNoResultCommonProps<T extends HTMLElement = HTMLElement> {
}
type SearchNoResultProps<T extends ValidComponent | HTMLElement = HTMLElement> = SearchNoResultOptions & Partial<SearchNoResultCommonProps<ElementOf<T>>>;
/**
 * Displayed in portal when no options are presented
 */
declare function SearchNoResult<T extends ValidComponent = "span">(props: PolymorphicProps<T, SearchNoResultProps<T>>): solid_js.JSX.Element;

interface SearchBaseOptions<Option, OptGroup = never> extends Omit<ComboboxBaseOptions<Option, OptGroup>, "defaultFilter"> {
    /** Debounces input before making suggestions */
    debounceOptionsMillisecond?: number;
}
type SearchRootOptions<Option, OptGroup = never> = (ComboboxSingleSelectionOptions<Option> | ComboboxMultipleSelectionOptions<Option>) & Omit<SearchBaseOptions<Option, OptGroup>, "value" | "defaultValue" | "onChange" | "selectionMode">;
interface SearchRootCommonProps<T extends HTMLElement = HTMLElement> {
}
interface SearchRootRenderProps extends SearchRootCommonProps, ComboboxBaseRenderProps {
}
type SearchRootProps<Option, OptGroup = never, T extends ValidComponent | HTMLElement = HTMLElement> = SearchRootOptions<Option, OptGroup> & Partial<SearchRootCommonProps<ElementOf<T>>>;
/**
 * A search is a combobox where the filter is external.
 */
declare function SearchRoot<Option, OptGroup = never, T extends ValidComponent = "div">(props: PolymorphicProps<T, SearchRootProps<Option, OptGroup, T>>): solid_js.JSX.Element;

interface SearchContextValue {
    /** No results found */
    noResult: Accessor<boolean>;
    /** Are we currently loading suggestions? */
    isLoadingSuggestions: Accessor<boolean>;
}
declare function useSearchContext(): SearchContextValue;

declare const Search: typeof SearchRoot & {
    Arrow: typeof PopperArrow;
    Content: typeof ComboboxContent;
    Control: typeof ComboboxControl;
    Description: typeof FormControlDescription;
    HiddenSelect: typeof ComboboxHiddenSelect;
    Icon: typeof ComboboxIcon;
    Input: typeof ComboboxInput;
    Item: typeof ListboxItem;
    ItemDescription: typeof ListboxItemDescription;
    ItemLabel: typeof ListboxItemLabel;
    Label: typeof FormControlLabel;
    Listbox: typeof ComboboxListbox;
    Portal: typeof ComboboxPortal;
    Section: typeof ListboxSection;
    NoResult: typeof SearchNoResult;
    Indicator: typeof SearchIndicator;
};

export { PopperArrow as Arrow, ComboboxContent as Content, ComboboxControl as Control, FormControlDescription as Description, ComboboxHiddenSelect as HiddenSelect, ComboboxIcon as Icon, SearchIndicator as Indicator, ComboboxInput as Input, ListboxItem as Item, ListboxItemDescription as ItemDescription, ListboxItemLabel as ItemLabel, FormControlLabel as Label, ComboboxListbox as Listbox, SearchNoResult as NoResult, ComboboxPortal as Portal, SearchRoot as Root, Search, SearchContextValue, SearchIndicatorCommonProps, SearchIndicatorOptions, SearchIndicatorProps, ComboboxMultipleSelectionOptions as SearchMultipleSelectionOptions, SearchNoResultCommonProps, SearchNoResultOptions, SearchNoResultProps, SearchRootCommonProps, SearchRootOptions, SearchRootProps, SearchRootRenderProps, ComboboxSingleSelectionOptions as SearchSingleSelectionOptions, ListboxSection as Section, useSearchContext };
