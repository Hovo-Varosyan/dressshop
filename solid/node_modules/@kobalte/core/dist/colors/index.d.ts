import { C as Color, a as ColorSpace, b as ColorChannel } from '../types-877adc4a.js';
export { c as COLOR_INTL_TRANSLATIONS, f as ColorAxes, g as ColorChannelRange, e as ColorFormat, d as ColorIntlTranslations } from '../types-877adc4a.js';

/** Parses a color from a string value. Throws an error if the string could not be parsed. */
declare function parseColor(value: string): Color;
declare function normalizeColor(v: string | Color): Color;
/** Returns a list of color channels for a given color space. */
declare function getColorChannels(colorSpace: ColorSpace): [ColorChannel, ColorChannel, ColorChannel];
/**
 * Returns the hue value normalized to the range of 0 to 360.
 */
declare function normalizeHue(hue: number): number;

export { Color, ColorChannel, ColorSpace, getColorChannels, normalizeColor, normalizeHue, parseColor };
