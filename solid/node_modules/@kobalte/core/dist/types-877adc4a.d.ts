declare const COLOR_INTL_TRANSLATIONS: {
    hue: string;
    saturation: string;
    lightness: string;
    brightness: string;
    red: string;
    green: string;
    blue: string;
    alpha: string;
    colorName: (lightness: string, chroma: string, hue: string) => string;
    transparentColorName: (lightness: string, chroma: string, hue: string, percentTransparent: string) => string;
    "very dark": string;
    dark: string;
    light: string;
    "very light": string;
    pale: string;
    grayish: string;
    vibrant: string;
    black: string;
    white: string;
    gray: string;
    pink: string;
    "pink red": string;
    "red orange": string;
    brown: string;
    orange: string;
    "orange yellow": string;
    "brown yellow": string;
    yellow: string;
    "yellow green": string;
    "green cyan": string;
    cyan: string;
    "cyan blue": string;
    "blue purple": string;
    purple: string;
    "purple magenta": string;
    magenta: string;
    "magenta pink": string;
};
type ColorIntlTranslations = typeof COLOR_INTL_TRANSLATIONS;

/** A list of supported color formats. */
type ColorFormat = "hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla" | "hsb" | "hsba";
type ColorSpace = "rgb" | "hsl" | "hsb";
/** A list of color channels. */
type ColorChannel = "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
type ColorAxes = {
    xChannel: ColorChannel;
    yChannel: ColorChannel;
    zChannel: ColorChannel;
};
interface ColorChannelRange {
    /** The minimum value of the color channel. */
    minValue: number;
    /** The maximum value of the color channel. */
    maxValue: number;
    /** The step value of the color channel, used when incrementing and decrementing. */
    step: number;
    /** The page step value of the color channel, used when incrementing and decrementing. */
    pageSize: number;
}
/** Represents a color value. */
interface Color {
    /** Converts the color to the given color format, and returns a new Color object. */
    toFormat(format: ColorFormat): Color;
    /** Converts the color to a string in the given format. */
    toString(format?: ColorFormat | "css"): string;
    /** Returns a duplicate of the color value. */
    clone(): Color;
    /** Converts the color to hex, and returns an integer representation. */
    toHexInt(): number;
    /**
     * Returns the numeric value for a given channel.
     * Throws an error if the channel is unsupported in the current color format.
     */
    getChannelValue(channel: ColorChannel): number;
    /**
     * Sets the numeric value for a given channel, and returns a new Color object.
     * Throws an error if the channel is unsupported in the current color format.
     */
    withChannelValue(channel: ColorChannel, value: number): Color;
    /**
     * Returns the minimum, maximum, and step values for a given channel.
     */
    getChannelRange(channel: ColorChannel): ColorChannelRange;
    /**
     * Returns a localized color channel name for a given channel and locale,
     * for use in visual or accessibility labels.
     */
    getChannelName(channel: ColorChannel, translations: ColorIntlTranslations): string;
    /**
     * Returns the number formatting options for the given channel.
     */
    getChannelFormatOptions(channel: ColorChannel): Intl.NumberFormatOptions;
    /**
     * Formats the numeric value for a given channel for display according to the provided locale.
     */
    formatChannelValue(channel: ColorChannel): string;
    /**
     * Returns the color space, 'rgb', 'hsb' or 'hsl', for the current color.
     */
    getColorSpace(): ColorSpace;
    /**
     * Returns the color space axes, xChannel, yChannel, zChannel.
     */
    getColorSpaceAxes(xyChannels: {
        xChannel?: ColorChannel;
        yChannel?: ColorChannel;
    }): ColorAxes;
    /**
     * Returns an array of the color channels within the current color space space.
     */
    getColorChannels(): [ColorChannel, ColorChannel, ColorChannel];
    /**
     * Returns a localized name for the color, for use in visual or accessibility labels.
     */
    getColorName(translations: ColorIntlTranslations): string;
    /**
     * Returns a localized name for the hue, for use in visual or accessibility labels.
     */
    getHueName(translations: ColorIntlTranslations): string;
}

export { Color as C, ColorSpace as a, ColorChannel as b, COLOR_INTL_TRANSLATIONS as c, ColorIntlTranslations as d, ColorFormat as e, ColorAxes as f, ColorChannelRange as g };
