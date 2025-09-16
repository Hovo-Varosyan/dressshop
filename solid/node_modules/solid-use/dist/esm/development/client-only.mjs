// src/client-only.ts
import {
  Show,
  createComponent,
  createMemo,
  createSignal,
  lazy,
  onMount,
  sharedConfig
} from "solid-js";
import { isServer } from "solid-js/web";
var createClientSignal = isServer ? () => () => false : () => {
  const [flag, setFlag] = createSignal(false);
  onMount(() => {
    setFlag(true);
  });
  return flag;
};
var ClientOnly = (props) => {
  const isClient = createClientSignal();
  return Show({
    keyed: false,
    get when() {
      return isClient();
    },
    get fallback() {
      return props.fallback;
    },
    get children() {
      return props.children;
    }
  });
};
function clientOnly(fn) {
  const Lazy = lazy(fn);
  return (props) => {
    if (sharedConfig.context) {
      const isClient = createClientSignal();
      return createMemo(() => {
        if (isClient()) {
          return createComponent(Lazy, props);
        }
        return void 0;
      });
    }
    return createComponent(Lazy, props);
  };
}
function clientComponent(Comp) {
  return (props) => {
    const isClient = createClientSignal();
    return createMemo(() => {
      if (isClient()) {
        return createComponent(Comp, props);
      }
      return void 0;
    });
  };
}
export {
  ClientOnly,
  clientComponent,
  clientOnly,
  createClientSignal
};
//# sourceMappingURL=client-only.mjs.map
