import { D as DynamicProps, a as DynamicAttributes } from '../types-dmeH_IUY.js';
import * as solid_js from 'solid-js';
import { ValidComponent, JSX } from 'solid-js';
import { R as Ref, a as ElementOf } from '../types-pua9WoMq.js';

type DynamicButtonSharedElementProps<T extends ValidComponent = 'button'> = {
    ref: Ref<ElementOf<T>>;
    type: string | undefined;
};
type DynamicButtonElementProps = DynamicButtonSharedElementProps & {
    role: 'button' | undefined;
};
type DynamicButtonProps<T extends ValidComponent = 'button'> = Partial<DynamicButtonSharedElementProps<T>>;
/** An accessible button that sets `type` and `role` properly based on if it's a native button. */
declare const DynamicButton: <T extends ValidComponent = "button">(props: DynamicProps<T, DynamicButtonProps<T>>) => solid_js.JSX.Element;

/** corvu's version of Solid's `Dynamic` component. Renders as a div by default and can be overridden with the `as` property. */
declare const Dynamic: <ElementProps>(props: DynamicAttributes<ValidComponent> & ElementProps) => JSX.Element;

export { Dynamic, DynamicAttributes, DynamicButton, type DynamicButtonElementProps, type DynamicButtonProps, type DynamicButtonSharedElementProps, DynamicProps };
