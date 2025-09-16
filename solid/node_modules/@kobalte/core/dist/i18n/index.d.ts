import { Accessor, JSX } from 'solid-js';
import { DateFormatter } from '@internationalized/date';
import { MaybeAccessor } from '@kobalte/utils';
import { NumberFormatOptions } from '@internationalized/number';

/**
 * Provides localized string collation for the current locale. Automatically updates when the locale changes,
 * and handles caching of the collator for performance.
 * @param options - Collator options.
 */
declare function createCollator(options?: Intl.CollatorOptions): Accessor<Intl.Collator>;

interface DateFormatterOptions extends Intl.DateTimeFormatOptions {
    calendar?: string;
}
/**
 * Provides localized date formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the date formatter for performance.
 * @param options - Formatting options.
 */
declare function createDateFormatter(options: MaybeAccessor<DateFormatterOptions>): Accessor<DateFormatter>;

type Direction = "rtl" | "ltr";
declare const RTL_LANGS: Set<string>;
/**
 * Determines if a locale is read right to left using [Intl.Locale]
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */
declare function isRTL(locale: string): boolean;
declare function getReadingDirection(locale: string): Direction;

interface Locale {
    /** The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale. */
    locale: string;
    /** The writing direction for the locale. */
    direction: Direction;
}
/**
 * Gets the locale setting of the browser.
 */
declare function getDefaultLocale(): Locale;
/**
 * Returns an accessor for the current browser/system language, and updates when it changes.
 */
declare function createDefaultLocale(): {
    locale: () => string;
    direction: () => Direction;
};

interface Filter {
    /** Returns whether a string starts with a given substring. */
    startsWith(string: string, substring: string): boolean;
    /** Returns whether a string ends with a given substring. */
    endsWith(string: string, substring: string): boolean;
    /** Returns whether a string contains a given substring. */
    contains(string: string, substring: string): boolean;
}
/**
 * Provides localized string search functionality that is useful for filtering or matching items
 * in a list. Options can be provided to adjust the sensitivity to case, diacritics, and other parameters.
 */
declare function createFilter(options?: Intl.CollatorOptions): Filter;

/**
 * Provides localized number formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the number formatter for performance.
 * @param options - Formatting options.
 */
declare function createNumberFormatter(options: MaybeAccessor<NumberFormatOptions>): Accessor<Intl.NumberFormat>;

interface I18nProviderProps {
    /** Contents that should have the locale applied. */
    children?: JSX.Element;
    /** The locale to apply to the children. */
    locale?: string;
}
/**
 * Provides the locale for the application to all child components.
 */
declare function I18nProvider(props: I18nProviderProps): JSX.Element;
/**
 * Returns an accessor for the current locale and layout direction.
 */
declare function useLocale(): {
    locale: () => string;
    direction: () => Direction;
};

export { DateFormatterOptions, Direction, Filter, I18nProvider, RTL_LANGS, createCollator, createDateFormatter, createDefaultLocale, createFilter, createNumberFormatter, getDefaultLocale, getReadingDirection, isRTL, useLocale };
