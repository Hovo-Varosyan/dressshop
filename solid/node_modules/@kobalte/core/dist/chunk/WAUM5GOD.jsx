import {
  ButtonRoot
} from "./UKTBL2JL.jsx";
import {
  createToggleState
} from "./VI7QYH27.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/toggle-button/index.tsx
var toggle_button_exports = {};
__export(toggle_button_exports, {
  Root: () => ToggleButtonRoot,
  ToggleButton: () => ToggleButton
});

// src/toggle-button/toggle-button-root.tsx
import {
  callHandler,
  isFunction
} from "@kobalte/utils";
import {
  children,
  splitProps
} from "solid-js";
function ToggleButtonRoot(props) {
  const [local, others] = splitProps(props, [
    "children",
    "pressed",
    "defaultPressed",
    "onChange",
    "onClick"
  ]);
  const state = createToggleState({
    isSelected: () => local.pressed,
    defaultIsSelected: () => local.defaultPressed,
    onSelectedChange: (selected) => local.onChange?.(selected),
    isDisabled: () => others.disabled
  });
  const onClick = (e) => {
    callHandler(e, local.onClick);
    state.toggle();
  };
  return <ButtonRoot
    aria-pressed={state.isSelected()}
    data-pressed={state.isSelected() ? "" : void 0}
    onClick={onClick}
    {...others}
  ><ToggleButtonRootChild state={{ pressed: state.isSelected }}>{local.children}</ToggleButtonRootChild></ButtonRoot>;
}
function ToggleButtonRootChild(props) {
  const resolvedChildren = children(() => {
    const body = props.children;
    return isFunction(body) ? body(props.state) : body;
  });
  return <>{resolvedChildren()}</>;
}

// src/toggle-button/index.tsx
var ToggleButton = ToggleButtonRoot;

export {
  ToggleButtonRoot,
  ToggleButton,
  toggle_button_exports
};
