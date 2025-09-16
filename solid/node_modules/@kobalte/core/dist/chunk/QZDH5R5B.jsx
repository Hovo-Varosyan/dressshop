import {
  createCollection
} from "./YRH543JR.jsx";
import {
  useLocale
} from "./LR7LBJN3.jsx";
import {
  createControllableSignal
} from "./FN6EICGO.jsx";

// src/selection/types.ts
var Selection = class _Selection extends Set {
  anchorKey;
  currentKey;
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    if (keys instanceof _Selection) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }
};

// src/selection/create-multiple-selection-state.ts
import { access, mergeDefaultProps } from "@kobalte/utils";
import { createEffect, createMemo, createSignal } from "solid-js";

// src/selection/create-controllable-selection-signal.ts
function createControllableSelectionSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => _value() ?? new Selection();
  return [value, setValue];
}

// src/selection/utils.ts
import { isAppleDevice, isMac } from "@kobalte/utils";
function isNonContiguousSelectionModifier(e) {
  return isAppleDevice() ? e.altKey : e.ctrlKey;
}
function isCtrlKeyPressed(e) {
  if (isMac()) {
    return e.metaKey;
  }
  return e.ctrlKey;
}
function convertSelection(selection) {
  return new Selection(selection);
}
function isSameSelection(setA, setB) {
  if (setA.size !== setB.size) {
    return false;
  }
  for (const item of setA) {
    if (!setB.has(item)) {
      return false;
    }
  }
  return true;
}

// src/selection/create-multiple-selection-state.ts
function createMultipleSelectionState(props) {
  const mergedProps = mergeDefaultProps(
    {
      selectionMode: "none",
      selectionBehavior: "toggle"
    },
    props
  );
  const [isFocused, setFocused] = createSignal(false);
  const [focusedKey, setFocusedKey] = createSignal();
  const selectedKeysProp = createMemo(() => {
    const selection = access(mergedProps.selectedKeys);
    if (selection != null) {
      return convertSelection(selection);
    }
    return selection;
  });
  const defaultSelectedKeys = createMemo(() => {
    const defaultSelection = access(mergedProps.defaultSelectedKeys);
    if (defaultSelection != null) {
      return convertSelection(defaultSelection);
    }
    return new Selection();
  });
  const [selectedKeys, _setSelectedKeys] = createControllableSelectionSignal({
    value: selectedKeysProp,
    defaultValue: defaultSelectedKeys,
    onChange: (value) => mergedProps.onSelectionChange?.(value)
  });
  const [selectionBehavior, setSelectionBehavior] = createSignal(access(mergedProps.selectionBehavior));
  const selectionMode = () => access(mergedProps.selectionMode);
  const disallowEmptySelection = () => access(mergedProps.disallowEmptySelection) ?? false;
  const setSelectedKeys = (keys) => {
    if (access(mergedProps.allowDuplicateSelectionEvents) || !isSameSelection(keys, selectedKeys())) {
      _setSelectedKeys(keys);
    }
  };
  createEffect(() => {
    const selection = selectedKeys();
    if (access(mergedProps.selectionBehavior) === "replace" && selectionBehavior() === "toggle" && typeof selection === "object" && selection.size === 0) {
      setSelectionBehavior("replace");
    }
  });
  createEffect(() => {
    setSelectionBehavior(access(mergedProps.selectionBehavior) ?? "toggle");
  });
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    isFocused,
    setFocused,
    focusedKey,
    setFocusedKey,
    selectedKeys,
    setSelectedKeys
  };
}

// src/selection/create-type-select.ts
import { access as access2 } from "@kobalte/utils";
import { createSignal as createSignal2 } from "solid-js";
function createTypeSelect(props) {
  const [search, setSearch] = createSignal2("");
  const [timeoutId, setTimeoutId] = createSignal2(-1);
  const onKeyDown = (e) => {
    if (access2(props.isDisabled)) {
      return;
    }
    const delegate = access2(props.keyboardDelegate);
    const manager = access2(props.selectionManager);
    if (!delegate.getKeyForSearch) {
      return;
    }
    const character = getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey) {
      return;
    }
    if (character === " " && search().trim().length > 0) {
      e.preventDefault();
      e.stopPropagation();
    }
    let newSearch = setSearch((prev) => prev + character);
    let key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
    if (key == null && isAllSameLetter(newSearch)) {
      newSearch = newSearch[0];
      key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
    }
    if (key != null) {
      manager.setFocusedKey(key);
      props.onTypeSelect?.(key);
    }
    clearTimeout(timeoutId());
    setTimeoutId(window.setTimeout(() => setSearch(""), 500));
  };
  return {
    typeSelectHandlers: {
      onKeyDown
    }
  };
}
function getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) {
    return key;
  }
  return "";
}
function isAllSameLetter(search) {
  return search.split("").every((letter) => letter === search[0]);
}

// src/selection/create-selectable-collection.ts
import {
  access as access3,
  callHandler,
  createEventListener,
  focusWithoutScrolling,
  getFocusableTreeWalker,
  scrollIntoView
} from "@kobalte/utils";
import {
  createEffect as createEffect2,
  createMemo as createMemo2,
  mergeProps,
  on,
  onMount
} from "solid-js";
function createSelectableCollection(props, ref, scrollRef) {
  const defaultProps = {
    selectOnFocus: () => access3(props.selectionManager).selectionBehavior() === "replace"
  };
  const mergedProps = mergeProps(defaultProps, props);
  const finalScrollRef = () => scrollRef?.() ?? ref();
  const { direction } = useLocale();
  let scrollPos = { top: 0, left: 0 };
  createEventListener(
    () => !access3(mergedProps.isVirtualized) ? finalScrollRef() : void 0,
    "scroll",
    () => {
      const scrollEl = finalScrollRef();
      if (!scrollEl) {
        return;
      }
      scrollPos = {
        top: scrollEl.scrollTop,
        left: scrollEl.scrollLeft
      };
    }
  );
  const { typeSelectHandlers } = createTypeSelect({
    isDisabled: () => access3(mergedProps.disallowTypeAhead),
    keyboardDelegate: () => access3(mergedProps.keyboardDelegate),
    selectionManager: () => access3(mergedProps.selectionManager)
  });
  const orientation = () => access3(mergedProps.orientation) ?? "vertical";
  const onKeyDown = (e) => {
    callHandler(e, typeSelectHandlers.onKeyDown);
    if (e.altKey && e.key === "Tab") {
      e.preventDefault();
    }
    const refEl = ref();
    if (!refEl?.contains(e.target)) {
      return;
    }
    const manager = access3(mergedProps.selectionManager);
    const selectOnFocus = access3(mergedProps.selectOnFocus);
    const navigateToKey = (key) => {
      if (key != null) {
        manager.setFocusedKey(key);
        if (e.shiftKey && manager.selectionMode() === "multiple") {
          manager.extendSelection(key);
        } else if (selectOnFocus && !isNonContiguousSelectionModifier(e)) {
          manager.replaceSelection(key);
        }
      }
    };
    const delegate = access3(mergedProps.keyboardDelegate);
    const shouldFocusWrap = access3(mergedProps.shouldFocusWrap);
    const focusedKey = manager.focusedKey();
    switch (e.key) {
      case (orientation() === "vertical" ? "ArrowDown" : "ArrowRight"): {
        if (delegate.getKeyBelow) {
          e.preventDefault();
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyBelow(focusedKey);
          } else {
            nextKey = delegate.getFirstKey?.();
          }
          if (nextKey == null && shouldFocusWrap) {
            nextKey = delegate.getFirstKey?.(focusedKey);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case (orientation() === "vertical" ? "ArrowUp" : "ArrowLeft"): {
        if (delegate.getKeyAbove) {
          e.preventDefault();
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyAbove(focusedKey);
          } else {
            nextKey = delegate.getLastKey?.();
          }
          if (nextKey == null && shouldFocusWrap) {
            nextKey = delegate.getLastKey?.(focusedKey);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case (orientation() === "vertical" ? "ArrowLeft" : "ArrowUp"): {
        if (delegate.getKeyLeftOf) {
          e.preventDefault();
          const isRTL = direction() === "rtl";
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyLeftOf(focusedKey);
          } else {
            nextKey = isRTL ? delegate.getFirstKey?.() : delegate.getLastKey?.();
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case (orientation() === "vertical" ? "ArrowRight" : "ArrowDown"): {
        if (delegate.getKeyRightOf) {
          e.preventDefault();
          const isRTL = direction() === "rtl";
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyRightOf(focusedKey);
          } else {
            nextKey = isRTL ? delegate.getLastKey?.() : delegate.getFirstKey?.();
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case "Home":
        if (delegate.getFirstKey) {
          e.preventDefault();
          const firstKey = delegate.getFirstKey(
            focusedKey,
            isCtrlKeyPressed(e)
          );
          if (firstKey != null) {
            manager.setFocusedKey(firstKey);
            if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
              manager.extendSelection(firstKey);
            } else if (selectOnFocus) {
              manager.replaceSelection(firstKey);
            }
          }
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e.preventDefault();
          const lastKey = delegate.getLastKey(focusedKey, isCtrlKeyPressed(e));
          if (lastKey != null) {
            manager.setFocusedKey(lastKey);
            if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
              manager.extendSelection(lastKey);
            } else if (selectOnFocus) {
              manager.replaceSelection(lastKey);
            }
          }
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow && focusedKey != null) {
          e.preventDefault();
          const nextKey = delegate.getKeyPageBelow(focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove && focusedKey != null) {
          e.preventDefault();
          const nextKey = delegate.getKeyPageAbove(focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "a":
        if (isCtrlKeyPressed(e) && manager.selectionMode() === "multiple" && access3(mergedProps.disallowSelectAll) !== true) {
          e.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        if (!e.defaultPrevented) {
          e.preventDefault();
          if (!access3(mergedProps.disallowEmptySelection)) {
            manager.clearSelection();
          }
        }
        break;
      case "Tab": {
        if (!access3(mergedProps.allowsTabNavigation)) {
          if (e.shiftKey) {
            refEl.focus();
          } else {
            const walker = getFocusableTreeWalker(refEl, { tabbable: true });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last) {
                next = last;
              }
            } while (last);
            if (next && !next.contains(document.activeElement)) {
              focusWithoutScrolling(next);
            }
          }
          break;
        }
      }
    }
  };
  const onFocusIn = (e) => {
    const manager = access3(mergedProps.selectionManager);
    const delegate = access3(mergedProps.keyboardDelegate);
    const selectOnFocus = access3(mergedProps.selectOnFocus);
    if (manager.isFocused()) {
      if (!e.currentTarget.contains(e.target)) {
        manager.setFocused(false);
      }
      return;
    }
    if (!e.currentTarget.contains(e.target)) {
      return;
    }
    manager.setFocused(true);
    if (manager.focusedKey() == null) {
      const navigateToFirstKey = (key) => {
        if (key == null) {
          return;
        }
        manager.setFocusedKey(key);
        if (selectOnFocus) {
          manager.replaceSelection(key);
        }
      };
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) {
        navigateToFirstKey(
          manager.lastSelectedKey() ?? delegate.getLastKey?.()
        );
      } else {
        navigateToFirstKey(
          manager.firstSelectedKey() ?? delegate.getFirstKey?.()
        );
      }
    } else if (!access3(mergedProps.isVirtualized)) {
      const scrollEl = finalScrollRef();
      if (scrollEl) {
        scrollEl.scrollTop = scrollPos.top;
        scrollEl.scrollLeft = scrollPos.left;
        const element = scrollEl.querySelector(
          `[data-key="${manager.focusedKey()}"]`
        );
        if (element) {
          focusWithoutScrolling(element);
          scrollIntoView(scrollEl, element);
        }
      }
    }
  };
  const onFocusOut = (e) => {
    const manager = access3(mergedProps.selectionManager);
    if (!e.currentTarget.contains(e.relatedTarget)) {
      manager.setFocused(false);
    }
  };
  const onMouseDown = (e) => {
    if (finalScrollRef() === e.target) {
      e.preventDefault();
    }
  };
  const tryAutoFocus = () => {
    const autoFocus = access3(mergedProps.autoFocus);
    if (!autoFocus) {
      return;
    }
    const manager = access3(mergedProps.selectionManager);
    const delegate = access3(mergedProps.keyboardDelegate);
    let focusedKey;
    if (autoFocus === "first") {
      focusedKey = delegate.getFirstKey?.();
    }
    if (autoFocus === "last") {
      focusedKey = delegate.getLastKey?.();
    }
    const selectedKeys = manager.selectedKeys();
    if (selectedKeys.size) {
      focusedKey = selectedKeys.values().next().value;
    }
    manager.setFocused(true);
    manager.setFocusedKey(focusedKey);
    const refEl = ref();
    if (refEl && focusedKey == null && !access3(mergedProps.shouldUseVirtualFocus)) {
      focusWithoutScrolling(refEl);
    }
  };
  onMount(() => {
    if (mergedProps.deferAutoFocus) {
      setTimeout(tryAutoFocus, 0);
    } else {
      tryAutoFocus();
    }
  });
  createEffect2(
    on(
      [
        finalScrollRef,
        () => access3(mergedProps.isVirtualized),
        () => access3(mergedProps.selectionManager).focusedKey()
      ],
      (newValue) => {
        const [scrollEl, isVirtualized, focusedKey] = newValue;
        if (isVirtualized) {
          focusedKey && mergedProps.scrollToKey?.(focusedKey);
        } else {
          if (focusedKey && scrollEl) {
            const element = scrollEl.querySelector(
              `[data-key="${focusedKey}"]`
            );
            if (element) {
              scrollIntoView(scrollEl, element);
            }
          }
        }
      }
    )
  );
  const tabIndex = createMemo2(() => {
    if (access3(mergedProps.shouldUseVirtualFocus)) {
      return void 0;
    }
    return access3(mergedProps.selectionManager).focusedKey() == null ? 0 : -1;
  });
  return {
    tabIndex,
    onKeyDown,
    onMouseDown,
    onFocusIn,
    onFocusOut
  };
}

// src/selection/create-selectable-item.ts
import {
  access as access4,
  focusWithoutScrolling as focusWithoutScrolling2
} from "@kobalte/utils";
import {
  createEffect as createEffect3,
  createMemo as createMemo3,
  on as on2
} from "solid-js";
function createSelectableItem(props, ref) {
  const manager = () => access4(props.selectionManager);
  const key = () => access4(props.key);
  const shouldUseVirtualFocus = () => access4(props.shouldUseVirtualFocus);
  const onSelect = (e) => {
    if (manager().selectionMode() === "none") {
      return;
    }
    if (manager().selectionMode() === "single") {
      if (manager().isSelected(key()) && !manager().disallowEmptySelection()) {
        manager().toggleSelection(key());
      } else {
        manager().replaceSelection(key());
      }
    } else if (e?.shiftKey) {
      manager().extendSelection(key());
    } else if (manager().selectionBehavior() === "toggle" || isCtrlKeyPressed(e) || "pointerType" in e && e.pointerType === "touch") {
      manager().toggleSelection(key());
    } else {
      manager().replaceSelection(key());
    }
  };
  const isSelected = () => manager().isSelected(key());
  const isDisabled = () => access4(props.disabled) || manager().isDisabled(key());
  const allowsSelection = () => !isDisabled() && manager().canSelectItem(key());
  let pointerDownType = null;
  const onPointerDown = (e) => {
    if (!allowsSelection()) {
      return;
    }
    pointerDownType = e.pointerType;
    if (e.pointerType === "mouse" && e.button === 0 && !access4(props.shouldSelectOnPressUp)) {
      onSelect(e);
    }
  };
  const onPointerUp = (e) => {
    if (!allowsSelection()) {
      return;
    }
    if (e.pointerType === "mouse" && e.button === 0 && access4(props.shouldSelectOnPressUp) && access4(props.allowsDifferentPressOrigin)) {
      onSelect(e);
    }
  };
  const onClick = (e) => {
    if (!allowsSelection()) {
      return;
    }
    if (access4(props.shouldSelectOnPressUp) && !access4(props.allowsDifferentPressOrigin) || pointerDownType !== "mouse") {
      onSelect(e);
    }
  };
  const onKeyDown = (e) => {
    if (!allowsSelection() || !["Enter", " "].includes(e.key)) {
      return;
    }
    if (isNonContiguousSelectionModifier(e)) {
      manager().toggleSelection(key());
    } else {
      onSelect(e);
    }
  };
  const onMouseDown = (e) => {
    if (isDisabled()) {
      e.preventDefault();
    }
  };
  const onFocus = (e) => {
    const refEl = ref();
    if (shouldUseVirtualFocus() || isDisabled() || !refEl) {
      return;
    }
    if (e.target === refEl) {
      manager().setFocusedKey(key());
    }
  };
  const tabIndex = createMemo3(() => {
    if (shouldUseVirtualFocus() || isDisabled()) {
      return void 0;
    }
    return key() === manager().focusedKey() ? 0 : -1;
  });
  const dataKey = createMemo3(() => {
    return access4(props.virtualized) ? void 0 : key();
  });
  createEffect3(
    on2(
      [
        ref,
        key,
        shouldUseVirtualFocus,
        () => manager().focusedKey(),
        () => manager().isFocused()
      ],
      ([refEl, key2, shouldUseVirtualFocus2, focusedKey, isFocused]) => {
        if (refEl && key2 === focusedKey && isFocused && !shouldUseVirtualFocus2 && document.activeElement !== refEl) {
          if (props.focus) {
            props.focus();
          } else {
            focusWithoutScrolling2(refEl);
          }
        }
      }
    )
  );
  return {
    isSelected,
    isDisabled,
    allowsSelection,
    tabIndex,
    dataKey,
    onPointerDown,
    onPointerUp,
    onClick,
    onKeyDown,
    onMouseDown,
    onFocus
  };
}

// src/selection/selection-manager.ts
var SelectionManager = class {
  collection;
  state;
  constructor(collection, state) {
    this.collection = collection;
    this.state = state;
  }
  /** The type of selection that is allowed in the collection. */
  selectionMode() {
    return this.state.selectionMode();
  }
  /** Whether the collection allows empty selection. */
  disallowEmptySelection() {
    return this.state.disallowEmptySelection();
  }
  /** The selection behavior for the collection. */
  selectionBehavior() {
    return this.state.selectionBehavior();
  }
  /** Sets the selection behavior for the collection. */
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /** Whether the collection is currently focused. */
  isFocused() {
    return this.state.isFocused();
  }
  /** Sets whether the collection is focused. */
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /** The current focused key in the collection. */
  focusedKey() {
    return this.state.focusedKey();
  }
  /** Sets the focused key. */
  setFocusedKey(key) {
    if (key == null || this.collection().getItem(key)) {
      this.state.setFocusedKey(key);
    }
  }
  /** The currently selected keys in the collection. */
  selectedKeys() {
    return this.state.selectedKeys();
  }
  /** Returns whether a key is selected. */
  isSelected(key) {
    if (this.state.selectionMode() === "none") {
      return false;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) {
      return false;
    }
    return this.state.selectedKeys().has(retrievedKey);
  }
  /** Whether the selection is empty. */
  isEmpty() {
    return this.state.selectedKeys().size === 0;
  }
  /** Whether all items in the collection are selected. */
  isSelectAll() {
    if (this.isEmpty()) {
      return false;
    }
    const selectedKeys = this.state.selectedKeys();
    return this.getAllSelectableKeys().every((k) => selectedKeys.has(k));
  }
  firstSelectedKey() {
    let first;
    for (const key of this.state.selectedKeys()) {
      const item = this.collection().getItem(key);
      const isItemBeforeFirst = item?.index != null && first?.index != null && item.index < first.index;
      if (!first || isItemBeforeFirst) {
        first = item;
      }
    }
    return first?.key;
  }
  lastSelectedKey() {
    let last;
    for (const key of this.state.selectedKeys()) {
      const item = this.collection().getItem(key);
      const isItemAfterLast = item?.index != null && last?.index != null && item.index > last.index;
      if (!last || isItemAfterLast) {
        last = item;
      }
    }
    return last?.key;
  }
  /** Extends the selection to the given key. */
  extendSelection(toKey) {
    if (this.selectionMode() === "none") {
      return;
    }
    if (this.selectionMode() === "single") {
      this.replaceSelection(toKey);
      return;
    }
    const retrievedToKey = this.getKey(toKey);
    if (retrievedToKey == null) {
      return;
    }
    const selectedKeys = this.state.selectedKeys();
    const anchorKey = selectedKeys.anchorKey || retrievedToKey;
    const selection = new Selection(selectedKeys, anchorKey, retrievedToKey);
    for (const key of this.getKeyRange(
      anchorKey,
      selectedKeys.currentKey || retrievedToKey
    )) {
      selection.delete(key);
    }
    for (const key of this.getKeyRange(retrievedToKey, anchorKey)) {
      if (this.canSelectItem(key)) {
        selection.add(key);
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    const fromItem = this.collection().getItem(from);
    const toItem = this.collection().getItem(to);
    if (fromItem && toItem) {
      if (fromItem.index != null && toItem.index != null && fromItem.index <= toItem.index) {
        return this.getKeyRangeInternal(from, to);
      }
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    const keys = [];
    let key = from;
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item") {
        keys.push(key);
      }
      if (key === to) {
        return keys;
      }
      key = this.collection().getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    const item = this.collection().getItem(key);
    if (!item) {
      return key;
    }
    if (!item || item.type !== "item") {
      return null;
    }
    return item.key;
  }
  /** Toggles whether the given key is selected. */
  toggleSelection(key) {
    if (this.selectionMode() === "none") {
      return;
    }
    if (this.selectionMode() === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) {
      return;
    }
    const keys = new Selection(this.state.selectedKeys());
    if (keys.has(retrievedKey)) {
      keys.delete(retrievedKey);
    } else if (this.canSelectItem(retrievedKey)) {
      keys.add(retrievedKey);
      keys.anchorKey = retrievedKey;
      keys.currentKey = retrievedKey;
    }
    if (this.disallowEmptySelection() && keys.size === 0) {
      return;
    }
    this.state.setSelectedKeys(keys);
  }
  /** Replaces the selection with only the given key. */
  replaceSelection(key) {
    if (this.selectionMode() === "none") {
      return;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) {
      return;
    }
    const selection = this.canSelectItem(retrievedKey) ? new Selection([retrievedKey], retrievedKey, retrievedKey) : new Selection();
    this.state.setSelectedKeys(selection);
  }
  /** Replaces the selection with the given keys. */
  setSelectedKeys(keys) {
    if (this.selectionMode() === "none") {
      return;
    }
    const selection = new Selection();
    for (const key of keys) {
      const retrievedKey = this.getKey(key);
      if (retrievedKey != null) {
        selection.add(retrievedKey);
        if (this.selectionMode() === "single") {
          break;
        }
      }
    }
    this.state.setSelectedKeys(selection);
  }
  /** Selects all items in the collection. */
  selectAll() {
    if (this.selectionMode() === "multiple") {
      this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
    }
  }
  /**
   * Removes all keys from the selection.
   */
  clearSelection() {
    const selectedKeys = this.state.selectedKeys();
    if (!this.disallowEmptySelection() && selectedKeys.size > 0) {
      this.state.setSelectedKeys(new Selection());
    }
  }
  /**
   * Toggles between select all and an empty selection.
   */
  toggleSelectAll() {
    if (this.isSelectAll()) {
      this.clearSelection();
    } else {
      this.selectAll();
    }
  }
  select(key, e) {
    if (this.selectionMode() === "none") {
      return;
    }
    if (this.selectionMode() === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection()) {
        this.toggleSelection(key);
      } else {
        this.replaceSelection(key);
      }
    } else if (this.selectionBehavior() === "toggle" || e && e.pointerType === "touch") {
      this.toggleSelection(key);
    } else {
      this.replaceSelection(key);
    }
  }
  /** Returns whether the current selection is equal to the given selection. */
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys()) {
      return true;
    }
    const selectedKeys = this.selectedKeys();
    if (selection.size !== selectedKeys.size) {
      return false;
    }
    for (const key of selection) {
      if (!selectedKeys.has(key)) {
        return false;
      }
    }
    for (const key of selectedKeys) {
      if (!selection.has(key)) {
        return false;
      }
    }
    return true;
  }
  canSelectItem(key) {
    if (this.state.selectionMode() === "none") {
      return false;
    }
    const item = this.collection().getItem(key);
    return item != null && !item.disabled;
  }
  isDisabled(key) {
    const item = this.collection().getItem(key);
    return !item || item.disabled;
  }
  getAllSelectableKeys() {
    const keys = [];
    const addKeys = (key) => {
      while (key != null) {
        if (this.canSelectItem(key)) {
          const item = this.collection().getItem(key);
          if (!item) {
            continue;
          }
          if (item.type === "item") {
            keys.push(key);
          }
        }
        key = this.collection().getKeyAfter(key);
      }
    };
    addKeys(this.collection().getFirstKey());
    return keys;
  }
};

// src/list/list-collection.ts
var ListCollection = class {
  keyMap = /* @__PURE__ */ new Map();
  iterable;
  firstKey;
  lastKey;
  constructor(nodes) {
    this.iterable = nodes;
    for (const node of nodes) {
      this.keyMap.set(node.key, node);
    }
    if (this.keyMap.size === 0) {
      return;
    }
    let last;
    let index = 0;
    for (const [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item") {
        node.index = index++;
      }
      last = node;
      last.nextKey = void 0;
    }
    this.lastKey = last.key;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  getSize() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    return this.keyMap.get(key)?.prevKey;
  }
  getKeyAfter(key) {
    return this.keyMap.get(key)?.nextKey;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }
};

// src/list/create-list-state.ts
import { access as access5 } from "@kobalte/utils";
import { createComputed } from "solid-js";
function createListState(props) {
  const selectionState = createMultipleSelectionState(props);
  const factory = (nodes) => {
    return props.filter ? new ListCollection(props.filter(nodes)) : new ListCollection(nodes);
  };
  const collection = createCollection(
    {
      dataSource: () => access5(props.dataSource),
      getKey: () => access5(props.getKey),
      getTextValue: () => access5(props.getTextValue),
      getDisabled: () => access5(props.getDisabled),
      getSectionChildren: () => access5(props.getSectionChildren),
      factory
    },
    [() => props.filter]
  );
  const selectionManager = new SelectionManager(collection, selectionState);
  createComputed(() => {
    const focusedKey = selectionState.focusedKey();
    if (focusedKey != null && !collection().getItem(focusedKey)) {
      selectionState.setFocusedKey(void 0);
    }
  });
  return {
    collection,
    selectionManager: () => selectionManager
  };
}

export {
  Selection,
  isSameSelection,
  createMultipleSelectionState,
  createTypeSelect,
  createSelectableCollection,
  createSelectableItem,
  SelectionManager,
  ListCollection,
  createListState
};
