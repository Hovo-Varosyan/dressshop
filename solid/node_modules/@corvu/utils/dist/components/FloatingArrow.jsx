import {
  combineStyle
} from "../chunk/GZJAOTUE.jsx";
import {
  Dynamic_default
} from "../chunk/UKBPAEF5.jsx";
import "../chunk/XJFCWSNS.jsx";
import {
  PositionToDirection
} from "../chunk/WR7IK7QK.jsx";
import "../chunk/74BWZKBI.jsx";
import "../chunk/U42ECMND.jsx";

// src/components/FloatingArrow.tsx
import {
  children,
  createMemo,
  mergeProps,
  Show,
  splitProps
} from "solid-js";
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
  const defaultedProps = mergeProps(
    {
      size: 16
    },
    props
  );
  const [localProps, otherProps] = splitProps(defaultedProps, [
    "as",
    "floatingState",
    "size",
    "style",
    "children"
  ]);
  const arrowDirection = createMemo(
    () => PositionToDirection[localProps.floatingState.placement.split("-")[0]]
  );
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
  return <Dynamic_default
    as="div"
    style={combineStyle(
      {
        position: "absolute",
        left: arrowLeft(),
        top: arrowTop(),
        [arrowDirection()]: "0px",
        transform: Transform[arrowDirection()],
        "transform-origin": TransformOrigin[arrowDirection()],
        height: defaultArrow() ? `${localProps.size}px` : void 0,
        width: defaultArrow() ? `${localProps.size}px` : void 0,
        "pointer-events": "none"
      },
      localProps.style
    )}
    {...otherProps}
  >
      <Show when={defaultArrow()} fallback={resolveChildren()}>
        <svg viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
    d="M0 0L6.24742 7.13991C6.64583 7.59524 7.35416 7.59524 7.75258 7.13991L14 0H0Z"
    fill="currentColor"
  />
        </svg>
      </Show>
    </Dynamic_default>;
};
var FloatingArrow_default = FloatingArrow;
export {
  FloatingArrow_default as default
};
