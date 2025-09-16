import type { Component, ComponentProps, JSX } from "solid-js";
/**
 *
 * Read more: https://docs.solidjs.com/solid-start/reference/client/client-only
 */
export default function clientOnly<T extends Component<any>>(fn: () => Promise<{
    default: T;
}>, options?: {
    lazy?: boolean;
}): (props: ComponentProps<T> & {
    fallback?: JSX.Element;
}) => any;
