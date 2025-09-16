import { ButtonRoot } from './7OVKXYPU.js';
import { createToggleState } from './YGDQXQ2B.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { isFunction, callHandler } from '@kobalte/utils';
import { splitProps, children } from 'solid-js';

// src/toggle-button/index.tsx
var toggle_button_exports = {};
__export(toggle_button_exports, {
  Root: () => ToggleButtonRoot,
  ToggleButton: () => ToggleButton
});
function ToggleButtonRoot(props) {
  const [local, others] = splitProps(props, ["children", "pressed", "defaultPressed", "onChange", "onClick"]);
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
  return createComponent(ButtonRoot, mergeProps({
    get ["aria-pressed"]() {
      return state.isSelected();
    },
    get ["data-pressed"]() {
      return state.isSelected() ? "" : void 0;
    },
    onClick
  }, others, {
    get children() {
      return createComponent(ToggleButtonRootChild, {
        get state() {
          return {
            pressed: state.isSelected
          };
        },
        get children() {
          return local.children;
        }
      });
    }
  }));
}
function ToggleButtonRootChild(props) {
  const resolvedChildren = children(() => {
    const body = props.children;
    return isFunction(body) ? body(props.state) : body;
  });
  return memo(resolvedChildren);
}

// src/toggle-button/index.tsx
var ToggleButton = ToggleButtonRoot;

export { ToggleButton, ToggleButtonRoot, toggle_button_exports };
