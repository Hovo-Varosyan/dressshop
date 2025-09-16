import * as solid_js from 'solid-js';
import { ValidComponent, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface ImageFallbackOptions {
}
interface ImageFallbackCommonProps<T extends HTMLElement = HTMLElement> {
}
interface ImageFallbackRenderProps extends ImageFallbackCommonProps {
}
type ImageFallbackProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageFallbackOptions & Partial<ImageFallbackCommonProps<ElementOf<T>>>;
/**
 * An element that renders when the image hasn't loaded.
 * This means whilst it's loading, or if there was an error.
 */
declare function ImageFallback<T extends ValidComponent = "span">(props: PolymorphicProps<T, ImageFallbackProps<T>>): solid_js.JSX.Element;

interface ImageImgOptions {
}
interface ImageImgCommonProps<T extends HTMLElement = HTMLElement> {
    src?: string;
}
interface ImageImgRenderProps extends ImageImgCommonProps {
}
type ImageImgProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageImgOptions & Partial<ImageImgCommonProps<ElementOf<T>>>;
/**
 * The image to render. By default, it will only render when it has loaded.
 */
declare function ImageImg<T extends ValidComponent = "img">(props: PolymorphicProps<T, ImageImgProps<T>>): solid_js.JSX.Element;

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

interface ImageRootOptions {
    /**
     * The delay (in ms) before displaying the image fallback.
     * Useful if you notice a flash during loading for delaying rendering,
     * so it only appears for those with slower internet connections.
     */
    fallbackDelay?: number;
    /**
     * A callback providing information about the loading status of the image.
     * This is useful in case you want to control more precisely what to render as the image is loading.
     */
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
}
interface ImageRootCommonProps<T extends HTMLElement = HTMLElement> {
}
interface ImageRootRenderProps extends ImageRootCommonProps {
}
type ImageRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageRootOptions & Partial<ImageRootCommonProps<ElementOf<T>>>;
/**
 * An image element with an optional fallback for loading and error status.
 */
declare function ImageRoot<T extends ValidComponent = "span">(props: PolymorphicProps<T, ImageRootProps<T>>): solid_js.JSX.Element;

interface ImageContextValue {
    fallbackDelay: Accessor<number | undefined>;
    imageLoadingStatus: Accessor<ImageLoadingStatus>;
    onImageLoadingStatusChange: (status: ImageLoadingStatus) => void;
}
declare function useImageContext(): ImageContextValue;

declare const Image: typeof ImageRoot & {
    Fallback: typeof ImageFallback;
    Img: typeof ImageImg;
};

declare const index_Image: typeof Image;
type index_ImageContextValue = ImageContextValue;
type index_ImageFallbackCommonProps<T extends HTMLElement = HTMLElement> = ImageFallbackCommonProps<T>;
type index_ImageFallbackOptions = ImageFallbackOptions;
type index_ImageFallbackProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageFallbackProps<T>;
type index_ImageFallbackRenderProps = ImageFallbackRenderProps;
type index_ImageImgCommonProps<T extends HTMLElement = HTMLElement> = ImageImgCommonProps<T>;
type index_ImageImgOptions = ImageImgOptions;
type index_ImageImgProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageImgProps<T>;
type index_ImageImgRenderProps = ImageImgRenderProps;
type index_ImageRootCommonProps<T extends HTMLElement = HTMLElement> = ImageRootCommonProps<T>;
type index_ImageRootOptions = ImageRootOptions;
type index_ImageRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageRootProps<T>;
type index_ImageRootRenderProps = ImageRootRenderProps;
declare const index_useImageContext: typeof useImageContext;
declare namespace index {
  export {
    ImageFallback as Fallback,
    index_Image as Image,
    index_ImageContextValue as ImageContextValue,
    index_ImageFallbackCommonProps as ImageFallbackCommonProps,
    index_ImageFallbackOptions as ImageFallbackOptions,
    index_ImageFallbackProps as ImageFallbackProps,
    index_ImageFallbackRenderProps as ImageFallbackRenderProps,
    index_ImageImgCommonProps as ImageImgCommonProps,
    index_ImageImgOptions as ImageImgOptions,
    index_ImageImgProps as ImageImgProps,
    index_ImageImgRenderProps as ImageImgRenderProps,
    index_ImageRootCommonProps as ImageRootCommonProps,
    index_ImageRootOptions as ImageRootOptions,
    index_ImageRootProps as ImageRootProps,
    index_ImageRootRenderProps as ImageRootRenderProps,
    ImageImg as Img,
    ImageRoot as Root,
    index_useImageContext as useImageContext,
  };
}

export { ImageFallbackOptions as I, ImageFallbackCommonProps as a, ImageFallbackRenderProps as b, ImageFallbackProps as c, ImageImgOptions as d, ImageImgCommonProps as e, ImageImgRenderProps as f, ImageImgProps as g, ImageRootOptions as h, index as i, ImageRootCommonProps as j, ImageRootRenderProps as k, ImageRootProps as l, ImageFallback as m, ImageImg as n, ImageRoot as o, Image as p, ImageContextValue as q, useImageContext as u };
