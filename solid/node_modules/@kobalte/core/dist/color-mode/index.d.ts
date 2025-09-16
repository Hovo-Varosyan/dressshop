import * as solid_js from 'solid-js';
import { Accessor, ParentProps } from 'solid-js';

type ColorMode = "light" | "dark";
type ConfigColorMode = ColorMode | "system";
type MaybeConfigColorMode = ConfigColorMode | undefined;
interface ColorModeStorageManager {
    /** The type of storage. */
    type: "cookie" | "localStorage";
    /** Whether it's an SSR environment. */
    ssr?: boolean;
    /** Get the color mode from the storage. */
    get: (fallback?: ConfigColorMode) => MaybeConfigColorMode;
    /** Save the color mode in the storage. */
    set: (value: ConfigColorMode) => void;
}
interface ColorModeContextType {
    colorMode: Accessor<ColorMode>;
    setColorMode: (value: ConfigColorMode) => void;
    toggleColorMode: () => void;
}
interface ColorModeOptions {
    /** The initial color mode to use. */
    initialColorMode?: ConfigColorMode;
    /** Whether css transitions should be disabled during the color mode changes. */
    disableTransitionOnChange?: boolean;
    /** The color mode storage manager, either localStorage or cookie. */
    storageManager?: ColorModeStorageManager;
}
type ColorModeProviderProps = ParentProps<ColorModeOptions>;
type ColorModeScriptProps = {
    /** The initial color mode to use. */
    initialColorMode?: ConfigColorMode;
    /** The type of the color mode storage manager, either localStorage or cookie. */
    storageType?: "localStorage" | "cookie";
    /** The key used to store color mode preference in localStorage or cookie. */
    storageKey?: string;
    nonce?: string;
};

declare const ColorModeContext: solid_js.Context<ColorModeContextType | undefined>;
/**
 * Primitive that reads from `ColorModeProvider` context,
 * Returns the color mode and function to toggle it.
 */
declare function useColorMode(): ColorModeContextType;
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 * @return A memoized value based on the color mode.
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
declare function useColorModeValue<TLight = unknown, TDark = unknown>(light: TLight, dark: TDark): solid_js.Accessor<TLight | TDark>;

/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
declare function ColorModeProvider(props: ColorModeProviderProps): solid_js.JSX.Element;

declare function ColorModeScript(props: ColorModeScriptProps): solid_js.JSX.Element;

declare const COLOR_MODE_STORAGE_KEY = "kb-color-mode";
declare function createLocalStorageManager(key: string): ColorModeStorageManager;
declare const localStorageManager: ColorModeStorageManager;
declare function createCookieStorageManager(key: string, cookie?: string): ColorModeStorageManager;
declare const cookieStorageManager: ColorModeStorageManager;
declare function cookieStorageManagerSSR(cookie: string): ColorModeStorageManager;

export { COLOR_MODE_STORAGE_KEY, ColorMode, ColorModeContext, ColorModeContextType, ColorModeOptions, ColorModeProvider, ColorModeProviderProps, ColorModeScript, ColorModeScriptProps, ColorModeStorageManager, ConfigColorMode, MaybeConfigColorMode, cookieStorageManager, cookieStorageManagerSSR, createCookieStorageManager, createLocalStorageManager, localStorageManager, useColorMode, useColorModeValue };
