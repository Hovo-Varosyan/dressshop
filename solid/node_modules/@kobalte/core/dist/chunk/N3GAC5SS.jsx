import {
  createSelectableCollection
} from "./QZDH5R5B.jsx";
import {
  createCollator
} from "./LR7LBJN3.jsx";

// src/list/list-keyboard-delegate.ts
var ListKeyboardDelegate = class {
  collection;
  ref;
  collator;
  constructor(collection, ref, collator) {
    this.collection = collection;
    this.ref = ref;
    this.collator = collator;
  }
  getKeyBelow(key) {
    let keyAfter = this.collection().getKeyAfter(key);
    while (keyAfter != null) {
      const item = this.collection().getItem(keyAfter);
      if (item && item.type === "item" && !item.disabled) {
        return keyAfter;
      }
      keyAfter = this.collection().getKeyAfter(keyAfter);
    }
  }
  getKeyAbove(key) {
    let keyBefore = this.collection().getKeyBefore(key);
    while (keyBefore != null) {
      const item = this.collection().getItem(keyBefore);
      if (item && item.type === "item" && !item.disabled) {
        return keyBefore;
      }
      keyBefore = this.collection().getKeyBefore(keyBefore);
    }
  }
  getFirstKey() {
    let key = this.collection().getFirstKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item" && !item.disabled) {
        return key;
      }
      key = this.collection().getKeyAfter(key);
    }
  }
  getLastKey() {
    let key = this.collection().getLastKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item" && !item.disabled) {
        return key;
      }
      key = this.collection().getKeyBefore(key);
    }
  }
  getItem(key) {
    return this.ref?.()?.querySelector(`[data-key="${key}"]`) ?? null;
  }
  // TODO: not working correctly
  getKeyPageAbove(key) {
    const menu = this.ref?.();
    let item = this.getItem(key);
    if (!menu || !item) {
      return;
    }
    const pageY = Math.max(
      0,
      item.offsetTop + item.offsetHeight - menu.offsetHeight
    );
    let keyAbove = key;
    while (keyAbove && item && item.offsetTop > pageY) {
      keyAbove = this.getKeyAbove(keyAbove);
      item = keyAbove != null ? this.getItem(keyAbove) : null;
    }
    return keyAbove;
  }
  // TODO: not working correctly
  getKeyPageBelow(key) {
    const menu = this.ref?.();
    let item = this.getItem(key);
    if (!menu || !item) {
      return;
    }
    const pageY = Math.min(
      menu.scrollHeight,
      item.offsetTop - item.offsetHeight + menu.offsetHeight
    );
    let keyBelow = key;
    while (keyBelow && item && item.offsetTop < pageY) {
      keyBelow = this.getKeyBelow(keyBelow);
      item = keyBelow != null ? this.getItem(keyBelow) : null;
    }
    return keyBelow;
  }
  getKeyForSearch(search, fromKey) {
    const collator = this.collator?.();
    if (!collator) {
      return;
    }
    let key = fromKey != null ? this.getKeyBelow(fromKey) : this.getFirstKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item) {
        const substring = item.textValue.slice(0, search.length);
        if (item.textValue && collator.compare(substring, search) === 0) {
          return key;
        }
      }
      key = this.getKeyBelow(key);
    }
  }
};

// src/list/create-selectable-list.ts
import { access } from "@kobalte/utils";
import { createMemo } from "solid-js";
function createSelectableList(props, ref, scrollRef) {
  const collator = createCollator({ usage: "search", sensitivity: "base" });
  const delegate = createMemo(() => {
    const keyboardDelegate = access(props.keyboardDelegate);
    if (keyboardDelegate) {
      return keyboardDelegate;
    }
    return new ListKeyboardDelegate(props.collection, ref, collator);
  });
  return createSelectableCollection(
    {
      selectionManager: () => access(props.selectionManager),
      keyboardDelegate: delegate,
      autoFocus: () => access(props.autoFocus),
      deferAutoFocus: () => access(props.deferAutoFocus),
      shouldFocusWrap: () => access(props.shouldFocusWrap),
      disallowEmptySelection: () => access(props.disallowEmptySelection),
      selectOnFocus: () => access(props.selectOnFocus),
      disallowTypeAhead: () => access(props.disallowTypeAhead),
      shouldUseVirtualFocus: () => access(props.shouldUseVirtualFocus),
      allowsTabNavigation: () => access(props.allowsTabNavigation),
      isVirtualized: () => access(props.isVirtualized),
      scrollToKey: (key) => access(props.scrollToKey)?.(key),
      orientation: () => access(props.orientation)
    },
    ref,
    scrollRef
  );
}

export {
  ListKeyboardDelegate,
  createSelectableList
};
