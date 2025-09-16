import { combineStyle } from '../chunk/SEUPK2SH.js';
import { Dynamic_default } from '../chunk/DCOOE3WP.js';
import { PositionToDirection } from '../chunk/NHDGOWAA.js';
import { createComponent, mergeProps as mergeProps$1, template } from 'solid-js/web';
import { mergeProps, splitProps, createMemo, children, Show } from 'solid-js';

var _tmpl$ = /* @__PURE__ */ template(`<svg viewBox="0 0 14 8"fill=none xmlns=http://www.w3.org/2000/svg><path d="M0 0L6.24742 7.13991C6.64583 7.59524 7.35416 7.59524 7.75258 7.13991L14 0H0Z"fill=currentColor>`);
var Transform = {
  top: "rotate(180deg)",
  bottom: "translate3d(0, 100%, 0)",
  left: "translate3d(0, 50%, 0) rotate(90deg) translate3d(-50%, 0, 0)",
  right: "translate3d(0, 50%, 0) rotate(-90deg) translate3d(50%, 0, 0)"
};
var TransformOrigin = {
  top: "center 0px",
  bottom: void 0,
  left: "0px 0px",
  right: "100% 0px"
};
var FloatingArrow = (props) => {
  const defaultedProps = mergeProps({
    size: 16
  }, props);
  const [localProps, otherProps] = splitProps(defaultedProps, ["as", "floatingState", "size", "style", "children"]);
  const arrowDirection = createMemo(() => PositionToDirection[localProps.floatingState.placement.split("-")[0]]);
  const arrowTop = createMemo(() => {
    const y = localProps.floatingState.arrowY;
    if (y === null) return void 0;
    return `${y}px`;
  });
  const arrowLeft = createMemo(() => {
    const x = localProps.floatingState.arrowX;
    if (x === null) return void 0;
    return `${x}px`;
  });
  const resolveChildren = children(() => localProps.children);
  const defaultArrow = () => resolveChildren.toArray().length === 0;
  return createComponent(Dynamic_default, mergeProps$1({
    as: "div",
    get style() {
      return combineStyle({
        position: "absolute",
        left: arrowLeft(),
        top: arrowTop(),
        [arrowDirection()]: "0px",
        transform: Transform[arrowDirection()],
        "transform-origin": TransformOrigin[arrowDirection()],
        height: defaultArrow() ? `${localProps.size}px` : void 0,
        width: defaultArrow() ? `${localProps.size}px` : void 0,
        "pointer-events": "none"
      }, localProps.style);
    }
  }, otherProps, {
    get children() {
      return createComponent(Show, {
        get when() {
          return defaultArrow();
        },
        get fallback() {
          return resolveChildren();
        },
        get children() {
          return _tmpl$();
        }
      });
    }
  }));
};
var FloatingArrow_default = FloatingArrow;

export { FloatingArrow_default as default };
