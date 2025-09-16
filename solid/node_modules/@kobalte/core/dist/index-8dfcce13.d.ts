import { JSX, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface SkeletonRootOptions {
    /** Whether the skeleton is visible. Sets data attribute. */
    visible?: boolean;
    /** Width of skeleton in `px`. Defaults to `100%` */
    width?: number;
    /** Height of skeleton in `px`. Defaults to `auto` */
    height?: number;
    /** Whether skeleton should be a circle. Sets `border-radius` and `width` to `height`. */
    circle?: boolean;
    /** Roundedness of skeleton in `px`. */
    radius?: number;
    /** Whether the skeleton should animate. */
    animate?: boolean;
}
interface SkeletonRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    style: JSX.CSSProperties | string;
}
interface SkeletonRootRenderProps extends SkeletonRootCommonProps {
    role: "group";
    "data-animate": boolean | undefined;
    "data-visible": boolean | undefined;
}
type SkeletonRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SkeletonRootOptions & Partial<SkeletonRootCommonProps<ElementOf<T>>>;
declare function Skeleton$1<T extends ValidComponent = "div">(props: PolymorphicProps<T, SkeletonRootProps<T>>): JSX.Element;

declare const Skeleton: typeof Skeleton$1;

declare const index_Skeleton: typeof Skeleton;
type index_SkeletonRootCommonProps<T extends HTMLElement = HTMLElement> = SkeletonRootCommonProps<T>;
type index_SkeletonRootOptions = SkeletonRootOptions;
type index_SkeletonRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SkeletonRootProps<T>;
type index_SkeletonRootRenderProps = SkeletonRootRenderProps;
declare namespace index {
  export {
    Skeleton$1 as Root,
    index_Skeleton as Skeleton,
    index_SkeletonRootCommonProps as SkeletonRootCommonProps,
    index_SkeletonRootOptions as SkeletonRootOptions,
    index_SkeletonRootProps as SkeletonRootProps,
    index_SkeletonRootRenderProps as SkeletonRootRenderProps,
  };
}

export { Skeleton$1 as S, SkeletonRootOptions as a, SkeletonRootCommonProps as b, SkeletonRootRenderProps as c, SkeletonRootProps as d, Skeleton as e, index as i };
