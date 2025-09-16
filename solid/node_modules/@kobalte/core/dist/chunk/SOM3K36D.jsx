import {
  createControllableArraySignal
} from "./FN6EICGO.jsx";

// src/primitives/create-dom-collection/create-dom-collection.ts
import { access, addItemToArray } from "@kobalte/utils";
import { createComponent } from "solid-js";

// src/primitives/create-dom-collection/dom-collection-context.ts
import { createContext, useContext } from "solid-js";
var DomCollectionContext = createContext();
function useOptionalDomCollectionContext() {
  return useContext(DomCollectionContext);
}
function useDomCollectionContext() {
  const context = useOptionalDomCollectionContext();
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component"
    );
  }
  return context;
}

// src/primitives/create-dom-collection/utils.ts
import { getDocument } from "@kobalte/utils";
import { createEffect, onCleanup } from "solid-js";
function isElementPreceding(a, b) {
  return Boolean(
    b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING
  );
}
function findDOMIndex(items, item) {
  const itemEl = item.ref();
  if (!itemEl) {
    return -1;
  }
  let length = items.length;
  if (!length) {
    return -1;
  }
  while (length--) {
    const currentItemEl = items[length]?.ref();
    if (!currentItemEl) {
      continue;
    }
    if (isElementPreceding(currentItemEl, itemEl)) {
      return length + 1;
    }
  }
  return 0;
}
function sortBasedOnDOMPosition(items) {
  const pairs = items.map((item, index) => [index, item]);
  let isOrderDifferent = false;
  pairs.sort(([indexA, a], [indexB, b]) => {
    const elementA = a.ref();
    const elementB = b.ref();
    if (elementA === elementB) {
      return 0;
    }
    if (!elementA || !elementB) {
      return 0;
    }
    if (isElementPreceding(elementA, elementB)) {
      if (indexA > indexB) {
        isOrderDifferent = true;
      }
      return -1;
    }
    if (indexA < indexB) {
      isOrderDifferent = true;
    }
    return 1;
  });
  if (isOrderDifferent) {
    return pairs.map(([_, item]) => item);
  }
  return items;
}
function setItemsBasedOnDOMPosition(items, setItems) {
  const sortedItems = sortBasedOnDOMPosition(items);
  if (items !== sortedItems) {
    setItems(sortedItems);
  }
}
function getCommonParent(items) {
  const firstItem = items[0];
  const lastItemEl = items[items.length - 1]?.ref();
  let parentEl = firstItem?.ref()?.parentElement;
  while (parentEl) {
    if (lastItemEl && parentEl.contains(lastItemEl)) {
      return parentEl;
    }
    parentEl = parentEl.parentElement;
  }
  return getDocument(parentEl).body;
}
function createTimeoutObserver(items, setItems) {
  createEffect(() => {
    const timeout = setTimeout(() => {
      setItemsBasedOnDOMPosition(items(), setItems);
    });
    onCleanup(() => clearTimeout(timeout));
  });
}
function createSortBasedOnDOMPosition(items, setItems) {
  if (typeof IntersectionObserver !== "function") {
    createTimeoutObserver(items, setItems);
    return;
  }
  let previousItems = [];
  createEffect(() => {
    const callback = () => {
      const hasPreviousItems = !!previousItems.length;
      previousItems = items();
      if (!hasPreviousItems) {
        return;
      }
      setItemsBasedOnDOMPosition(items(), setItems);
    };
    const root = getCommonParent(items());
    const observer = new IntersectionObserver(callback, { root });
    for (const item of items()) {
      const itemEl = item.ref();
      if (itemEl) {
        observer.observe(itemEl);
      }
    }
    onCleanup(() => observer.disconnect());
  });
}

// src/primitives/create-dom-collection/create-dom-collection.ts
function createDomCollection(props = {}) {
  const [items, setItems] = createControllableArraySignal({
    value: () => access(props.items),
    onChange: (value) => props.onItemsChange?.(value)
  });
  createSortBasedOnDOMPosition(items, setItems);
  const registerItem = (item) => {
    setItems((prevItems) => {
      const index = findDOMIndex(prevItems, item);
      return addItemToArray(prevItems, item, index);
    });
    return () => {
      setItems((prevItems) => {
        const nextItems = prevItems.filter(
          (prevItem) => prevItem.ref() !== item.ref()
        );
        if (prevItems.length === nextItems.length) {
          return prevItems;
        }
        return nextItems;
      });
    };
  };
  const DomCollectionProvider = (props2) => {
    return createComponent(DomCollectionContext.Provider, {
      value: { registerItem },
      get children() {
        return props2.children;
      }
    });
  };
  return { DomCollectionProvider };
}

// src/primitives/create-dom-collection/create-dom-collection-item.ts
import { mergeDefaultProps } from "@kobalte/utils";
import { createEffect as createEffect2, onCleanup as onCleanup2 } from "solid-js";
function createDomCollectionItem(props) {
  const context = useDomCollectionContext();
  const mergedProps = mergeDefaultProps({ shouldRegisterItem: true }, props);
  createEffect2(() => {
    if (!mergedProps.shouldRegisterItem) {
      return;
    }
    const unregister = context.registerItem(mergedProps.getItem());
    onCleanup2(unregister);
  });
}

export {
  DomCollectionContext,
  useOptionalDomCollectionContext,
  useDomCollectionContext,
  createDomCollection,
  createDomCollectionItem
};
