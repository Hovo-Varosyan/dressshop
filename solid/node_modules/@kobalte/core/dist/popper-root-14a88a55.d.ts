import * as solid_js from 'solid-js';
import { JSX, ValidComponent, Accessor, ParentProps } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

type BasePlacement = "top" | "bottom" | "left" | "right";
type Placement = BasePlacement | `${BasePlacement}-start` | `${BasePlacement}-end`;
type AnchorRect = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
};

interface PopperArrowOptions {
    /** The size of the arrow. */
    size?: number;
}
interface PopperArrowCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    style?: JSX.CSSProperties | string;
}
interface PopperArrowRenderProps extends PopperArrowCommonProps {
    children: JSX.Element;
    "aria-hidden": "true";
}
type PopperArrowProps<T extends ValidComponent | HTMLElement = HTMLElement> = PopperArrowOptions & Partial<PopperArrowCommonProps<ElementOf<T>>>;
/**
 * An optional arrow element to render alongside the popper content.
 * Must be rendered in the popper content.
 */
declare function PopperArrow<T extends ValidComponent = "div">(props: PolymorphicProps<T, PopperArrowProps<T>>): JSX.Element;

interface PopperRootOptions {
    /** A ref for the anchor element. */
    anchorRef: Accessor<HTMLElement | undefined>;
    /** A ref for the content element. */
    contentRef: Accessor<HTMLElement | undefined>;
    /**
     * Function that returns the anchor element's DOMRect. If this is explicitly
     * passed, it will override the anchor `getBoundingClientRect` method.
     */
    getAnchorRect?: (anchor?: HTMLElement) => AnchorRect | undefined;
    /**
     * Event handler called when the popper placement changes.
     * It returns the current temporary placement of the popper.
     * This may be different from the `placement` prop if the popper has needed to update its position on the fly.
     */
    onCurrentPlacementChange?: (currentPlacement: Placement) => void;
    /** The placement of the popper. */
    placement?: Placement;
    /**
     * The distance between the popper and the anchor element.
     * By default, it's 0 plus half of the arrow offset, if it exists.
     */
    gutter?: number;
    /** The skidding of the popper along the anchor element. */
    shift?: number;
    /**
     * Controls the behavior of the popper when it overflows the viewport:
     *   - If a `boolean`, specifies whether the popper should flip to the
     *     opposite side when it overflows.
     *   - If a `string`, indicates the preferred fallback placements when it
     *     overflows. The placements must be spaced-delimited, e.g. "top left".
     */
    flip?: boolean | string;
    /** Whether the popper should slide when it overflows. */
    slide?: boolean;
    /** Whether the popper can overlap the anchor element when it overflows. */
    overlap?: boolean;
    /**
     * Whether the popper should have the same width as the anchor element.
     * This will be exposed to CSS as `--kb-popper-anchor-width`.
     */
    sameWidth?: boolean;
    /**
     * Whether the popper should fit the viewport. If this is set to true, the
     * popper positioner will have `maxWidth` and `maxHeight` set to the viewport size.
     * This will be exposed to CSS as `--kb-popper-content-available-width` and `--kb-popper-content-available-height`.
     */
    fitViewport?: boolean;
    /** Whether to hide the popper when the anchor element becomes occluded. */
    hideWhenDetached?: boolean;
    /** The minimum padding in order to consider the anchor element occluded. */
    detachedPadding?: number;
    /** The minimum padding between the arrow and the popper corner. */
    arrowPadding?: number;
    /**
     * The minimum padding between the popper and the viewport edge.
     * This will be exposed to CSS as `--kb-popper-content-overflow-padding`.
     */
    overflowPadding?: number;
}
interface PopperRootProps extends ParentProps<PopperRootOptions> {
}
/**
 * Display a floating content relative to an anchor element with an optional arrow.
 */
declare function PopperRoot(props: PopperRootProps): solid_js.JSX.Element;

export { PopperArrow as P, PopperArrowOptions as a, PopperArrowProps as b, PopperArrowCommonProps as c, PopperArrowRenderProps as d, Placement as e, PopperRoot as f, PopperRootOptions as g, PopperRootProps as h };
