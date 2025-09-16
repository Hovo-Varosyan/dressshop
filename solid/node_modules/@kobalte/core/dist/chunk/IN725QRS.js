import { createDisclosureState } from './7LCANGHD.js';
import { ButtonRoot } from './7OVKXYPU.js';
import { createRegisterId } from './E4R2EMM4.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { mergeDefaultProps, mergeRefs, createGenerateId, callHandler } from '@kobalte/utils';
import { createContext, useContext, createSignal, splitProps, onMount, onCleanup, createEffect, on, Show, createUniqueId, createMemo } from 'solid-js';
import { combineStyle } from '@solid-primitives/props';
import createPresence from 'solid-presence';

// src/collapsible/index.tsx
var collapsible_exports = {};
__export(collapsible_exports, {
  Collapsible: () => Collapsible,
  Content: () => CollapsibleContent,
  Root: () => CollapsibleRoot,
  Trigger: () => CollapsibleTrigger,
  useCollapsibleContext: () => useCollapsibleContext
});
var CollapsibleContext = createContext();
function useCollapsibleContext() {
  const context = useContext(CollapsibleContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useCollapsibleContext` must be used within a `Collapsible.Root` component");
  }
  return context;
}

// src/collapsible/collapsible-content.tsx
function CollapsibleContent(props) {
  const [ref, setRef] = createSignal();
  const context = useCollapsibleContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("content")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "id", "style"]);
  const {
    present
  } = createPresence({
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
  createEffect(on(
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
  ));
  createEffect(on(context.isOpen, (open) => {
    if (!open && ref()) {
      ref().style.transitionDuration = "";
      ref().style.animationName = "";
    }
  }, {
    defer: true
  }));
  createEffect(() => onCleanup(context.registerContentId(local.id)));
  return createComponent(Show, {
    get when() {
      return present();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div",
        ref(r$) {
          const _ref$ = mergeRefs(setRef, local.ref);
          typeof _ref$ === "function" && _ref$(r$);
        },
        get id() {
          return local.id;
        },
        get style() {
          return combineStyle({
            "--kb-collapsible-content-height": height() ? `${height()}px` : void 0,
            "--kb-collapsible-content-width": width() ? `${width()}px` : void 0
          }, local.style);
        }
      }, () => context.dataset(), others));
    }
  });
}
function CollapsibleRoot(props) {
  const defaultId = `collapsible-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  const [local, others] = splitProps(mergedProps, ["open", "defaultOpen", "onOpenChange", "disabled", "forceMount"]);
  const [contentId, setContentId] = createSignal();
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
  return createComponent(CollapsibleContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div"
      }, dataset, others));
    }
  });
}
function CollapsibleTrigger(props) {
  const context = useCollapsibleContext();
  const [local, others] = splitProps(props, ["onClick"]);
  const onClick = (e) => {
    callHandler(e, local.onClick);
    context.toggle();
  };
  return createComponent(ButtonRoot, mergeProps({
    get ["aria-expanded"]() {
      return context.isOpen();
    },
    get ["aria-controls"]() {
      return memo(() => !!context.isOpen())() ? context.contentId() : void 0;
    },
    get disabled() {
      return context.disabled();
    },
    onClick
  }, () => context.dataset(), others));
}

// src/collapsible/index.tsx
var Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger
});

export { Collapsible, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, collapsible_exports, useCollapsibleContext };
