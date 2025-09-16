import { type JSX, type MergeProps } from "solid-js";
import { type MaybeAccessor } from "@solid-primitives/utils";
/**
 * converts inline string styles to object form
 * @example
 * const styles = stringStyleToObject("margin: 24px; border: 1px solid #121212");
 * styles; // { margin: "24px", border: "1px solid #121212" }
 * */
export declare function stringStyleToObject(style: string): JSX.CSSProperties;
/**
 * Combines two set of styles together. Accepts both string and object styles.\
 * @example
 * const styles = combineStyle("margin: 24px; border: 1px solid #121212", {
 *   margin: "2rem",
 *   padding: "16px"
 * });
 * styles; // { margin: "2rem", border: "1px solid #121212", padding: "16px" }
 */
export declare function combineStyle(a: string, b: string): string;
export declare function combineStyle(a: JSX.CSSProperties | undefined, b: JSX.CSSProperties | undefined): JSX.CSSProperties;
export declare function combineStyle(a: JSX.CSSProperties | string | undefined, b: JSX.CSSProperties | string | undefined): JSX.CSSProperties;
type PropsInput = {
    class?: string;
    className?: string;
    classList?: Record<string, boolean | undefined>;
    style?: JSX.CSSProperties | string;
    ref?: Element | ((el: any) => void);
} & Record<string, any>;
export type CombinePropsOptions = {
    /**
     * by default the event handlers will be called left-to-right,
     * following the order of the sources.
     * If this option is set to true, the handlers will be called right-to-left.
     */
    reverseEventHandlers?: boolean;
};
/**
 * A helper that reactively merges multiple props objects together while smartly combining some of Solid's JSX/DOM attributes.
 *
 * Event handlers and refs are chained, class, classNames and styles are combined.
 * For all other props, the last prop object overrides all previous ones. Similarly to {@link mergeProps}
 * @param sources - Multiple sets of props to combine together.
 * @example
 * ```tsx
 * const MyButton: Component<ButtonProps> = props => {
 *    const { buttonProps } = createButton();
 *    const combined = combineProps(props, buttonProps);
 *    return <button {...combined} />
 * }
 * // component consumer can provide button props
 * // they will be combined with those provided by createButton() primitive
 * <MyButton style={{ margin: "24px" }} />
 * ```
 */
export declare function combineProps<T extends [] | MaybeAccessor<PropsInput>[]>(sources: T, options?: CombinePropsOptions): MergeProps<T>;
export declare function combineProps<T extends [] | MaybeAccessor<PropsInput>[]>(...sources: T): MergeProps<T>;
export {};
