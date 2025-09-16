import {
  createDisclosureState
} from "./E53DB7BS.jsx";
import {
  ButtonRoot
} from "./UKTBL2JL.jsx";
import {
  createRegisterId
} from "./JNCCF6MP.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/collapsible/index.tsx
var collapsible_exports = {};
__export(collapsible_exports, {
  Collapsible: () => Collapsible,
  Content: () => CollapsibleContent,
  Root: () => CollapsibleRoot,
  Trigger: () => CollapsibleTrigger,
  useCollapsibleContext: () => useCollapsibleContext
});

// src/collapsible/collapsible-content.tsx
import { mergeDefaultProps, mergeRefs } from "@kobalte/utils";
import {
  Show,
  createEffect,
  createSignal,
  on,
  onCleanup,
  onMount,
  splitProps
} from "solid-js";
import { combineStyle } from "@solid-primitives/props";
import createPresence from "solid-presence";

// src/collapsible/collapsible-context.tsx
import { createContext, useContext } from "solid-js";
var CollapsibleContext = createContext();
function useCollapsibleContext() {
  const context = useContext(CollapsibleContext);
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `useCollapsibleContext` must be used within a `Collapsible.Root` component"
    );
  }
  return context;
}

// src/collapsible/collapsible-content.tsx
function CollapsibleContent(props) {
  const [ref, setRef] = createSignal();
  const context = useCollapsibleContext();
  const mergedProps = mergeDefaultProps(
    { id: context.generateId("content") },
    props
  );
  const [local, others] = splitProps(mergedProps, ["ref", "id", "style"]);
  const { present } = createPresence({
    show: context.shouldMount,
    element: () => ref() ?? null
  });
  const [height, setHeight] = createSignal(0);
  const [width, setWidth] = createSignal(0);
  const isOpen = () => context.isOpen() || present();
  let isMountAnimationPrevented = isOpen();
  onMount(() => {
    const raf = requestAnimationFrame(() => {
      isMountAnimationPrevented = false;
    });
    onCleanup(() => {
      cancelAnimationFrame(raf);
    });
  });
  createEffect(
    on(
      /**
       * depends on `present` because it will be `false` on
       * animation end (so when close finishes). This allows us to
       * retrieve the dimensions *before* closing.
       */
      present,
      () => {
        if (!ref()) {
          return;
        }
        ref().style.transitionDuration = "0s";
        ref().style.animationName = "none";
        const rect = ref().getBoundingClientRect();
        setHeight(rect.height);
        setWidth(rect.width);
        if (!isMountAnimationPrevented) {
          ref().style.transitionDuration = "";
          ref().style.animationName = "";
        }
      }
    )
  );
  createEffect(
    on(
      context.isOpen,
      (open) => {
        if (!open && ref()) {
          ref().style.transitionDuration = "";
          ref().style.animationName = "";
        }
      },
      { defer: true }
    )
  );
  createEffect(() => onCleanup(context.registerContentId(local.id)));
  return <Show when={present()}><Polymorphic
    as="div"
    ref={mergeRefs(setRef, local.ref)}
    id={local.id}
    style={combineStyle(
      {
        "--kb-collapsible-content-height": height() ? `${height()}px` : void 0,
        "--kb-collapsible-content-width": width() ? `${width()}px` : void 0
      },
      local.style
    )}
    {...context.dataset()}
    {...others}
  /></Show>;
}

// src/collapsible/collapsible-root.tsx
import {
  createGenerateId,
  mergeDefaultProps as mergeDefaultProps2
} from "@kobalte/utils";
import {
  createMemo,
  createSignal as createSignal2,
  createUniqueId,
  splitProps as splitProps2
} from "solid-js";
function CollapsibleRoot(props) {
  const defaultId = `collapsible-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps2(
    { id: defaultId },
    props
  );
  const [local, others] = splitProps2(mergedProps, [
    "open",
    "defaultOpen",
    "onOpenChange",
    "disabled",
    "forceMount"
  ]);
  const [contentId, setContentId] = createSignal2();
  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => local.onOpenChange?.(isOpen)
  });
  const dataset = createMemo(() => ({
    "data-expanded": disclosureState.isOpen() ? "" : void 0,
    "data-closed": !disclosureState.isOpen() ? "" : void 0,
    "data-disabled": local.disabled ? "" : void 0
  }));
  const context = {
    dataset,
    isOpen: disclosureState.isOpen,
    disabled: () => local.disabled ?? false,
    shouldMount: () => local.forceMount || disclosureState.isOpen(),
    contentId,
    toggle: disclosureState.toggle,
    generateId: createGenerateId(() => others.id),
    registerContentId: createRegisterId(setContentId)
  };
  return <CollapsibleContext.Provider value={context}><Polymorphic
    as="div"
    {...dataset()}
    {...others}
  /></CollapsibleContext.Provider>;
}

// src/collapsible/collapsible-trigger.tsx
import { callHandler } from "@kobalte/utils";
import {
  splitProps as splitProps3
} from "solid-js";
function CollapsibleTrigger(props) {
  const context = useCollapsibleContext();
  const [local, others] = splitProps3(props, ["onClick"]);
  const onClick = (e) => {
    callHandler(e, local.onClick);
    context.toggle();
  };
  return <ButtonRoot
    aria-expanded={context.isOpen()}
    aria-controls={context.isOpen() ? context.contentId() : void 0}
    disabled={context.disabled()}
    onClick={onClick}
    {...context.dataset()}
    {...others}
  />;
}

// src/collapsible/index.tsx
var Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger
});

export {
  useCollapsibleContext,
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
  Collapsible,
  collapsible_exports
};
