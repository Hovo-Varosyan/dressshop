import { JSX, ValidComponent } from 'solid-js';
import { C as Color } from '../types-877adc4a.js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import '@kobalte/utils';

declare const COLOR_SWATCH_INTL_TRANSLATIONS: {
    roleDescription: string;
    transparent: string;
};
type ColorSwatchIntlTranslations = typeof COLOR_SWATCH_INTL_TRANSLATIONS;

interface ColorSwatchRootOptions {
    /** The color value to display in the swatch. */
    value: Color;
    /**
     * A localized accessible name for the color.
     * By default, a description is generated from the color value,
     * but this can be overridden if you have a more specific color
     * name (e.g. Pantone colors).
     */
    colorName?: string;
    /** The localized strings of the component. */
    translations?: ColorSwatchIntlTranslations;
}
interface ColorSwatchRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    style?: JSX.CSSProperties | string;
    "aria-label"?: string;
}
interface ColorSwatchRootRenderProps extends ColorSwatchRootCommonProps {
    role: "img";
}
type ColorSwatchRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorSwatchRootOptions & Partial<ColorSwatchRootCommonProps<ElementOf<T>>>;
declare function ColorSwatchRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorSwatchRootProps<T>>): JSX.Element;

declare const ColorSwatch: typeof ColorSwatchRoot;

export { ColorSwatch, ColorSwatchRootCommonProps, ColorSwatchRootOptions, ColorSwatchRootProps, ColorSwatchRootRenderProps, ColorSwatchRoot as Root };
