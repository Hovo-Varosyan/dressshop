interface DismissableLayerCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
}
interface DismissableLayerRenderProps extends DismissableLayerCommonProps {
}

export { DismissableLayerRenderProps as D, DismissableLayerCommonProps as a };
