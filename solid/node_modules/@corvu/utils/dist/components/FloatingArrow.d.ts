import { ValidComponent, JSX } from 'solid-js';
import { D as DynamicProps } from '../types-dmeH_IUY.js';
import { FloatingState } from '../create/floating.js';
import '../types-CfOU1RES.js';
import '@floating-ui/dom';

type FloatingArrowCorvuProps = {
    floatingState: FloatingState;
    /**
     * Size of the arrow in px.
     * @defaultValue 16
     */
    size?: number;
};
type FloatingArrowSharedElementProps<T extends ValidComponent = 'div'> = {
    style: string | JSX.CSSProperties;
    children: JSX.Element;
};
type FloatingArrowElementProps = FloatingArrowSharedElementProps;
type FloatingArrowProps<T extends ValidComponent = 'div'> = FloatingArrowCorvuProps & Partial<FloatingArrowSharedElementProps<T>>;
declare const FloatingArrow: <T extends ValidComponent = "div">(props: DynamicProps<T, FloatingArrowProps<T>>) => JSX.Element;

export { type FloatingArrowCorvuProps, type FloatingArrowElementProps, type FloatingArrowProps, type FloatingArrowSharedElementProps, FloatingArrow as default };
