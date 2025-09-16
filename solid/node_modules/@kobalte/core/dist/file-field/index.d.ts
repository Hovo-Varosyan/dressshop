import * as solid_js from 'solid-js';
import { Accessor, Setter, JSX, ValidComponent, ComponentProps } from 'solid-js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import { d as ButtonRootRenderProps } from '../button-root-da654b3e.js';
import { ValidationState } from '@kobalte/utils';
import { F as FormControlDataSet, a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as FileFieldDescriptionCommonProps, b as FileFieldDescriptionOptions, e as FileFieldDescriptionProps, d as FileFieldDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as FileFieldErrorMessageCommonProps, a as FileFieldErrorMessageOptions, d as FileFieldErrorMessageProps, c as FileFieldErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';

declare const FILE_FIELD_INTL_TRANSLATIONS: {
    bytes: string;
    kb: string;
    mb: string;
    gb: string;
    tb: string;
};
type FileFieldIntlTranslations = typeof FILE_FIELD_INTL_TRANSLATIONS;

type FileError = "TOO_MANY_FILES" | "FILE_INVALID_TYPE" | "FILE_TOO_LARGE" | "FILE_TOO_SMALL";
type FileRejection = {
    file: File;
    errors: FileError[];
};
type Details = {
    acceptedFiles: File[];
    rejectedFiles: FileRejection[];
};
type Accept = string | string[] | undefined;

interface FileFieldContextValue {
    translations: Accessor<FileFieldIntlTranslations>;
    inputId: Accessor<string>;
    fileInputRef: Accessor<HTMLInputElement | undefined>;
    setFileInputRef: Setter<HTMLInputElement | undefined>;
    dropzoneRef: Accessor<HTMLElement | undefined>;
    setDropzoneRef: Setter<HTMLElement | undefined>;
    disabled: Accessor<boolean | undefined>;
    multiple: Accessor<boolean | undefined>;
    accept: Accessor<string | undefined>;
    allowDragAndDrop: Accessor<boolean | undefined>;
    processFiles: (files: File[]) => void;
    acceptedFiles: File[];
    rejectedFiles: FileRejection[];
    removeFile: (file: File) => void;
}
declare const FileFieldContext: solid_js.Context<FileFieldContextValue | undefined>;
declare function useFileFieldContext(): FileFieldContextValue;

interface FileFieldDropzoneOptions {
}
interface FileFieldDropzoneCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
    onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>;
    onDragOver: JSX.EventHandlerUnion<T, DragEvent>;
    onDragLeave: JSX.EventHandlerUnion<T, DragEvent>;
    onDrop: JSX.EventHandlerUnion<T, DragEvent>;
}
interface FileFieldDropzoneRenderProps extends FileFieldDropzoneCommonProps {
    "aria-label": "dropzone";
    role: "button";
    tabindex: "0";
    "aria-disabled": boolean | undefined;
    "data-dragging": boolean;
}
type FileFieldDropzoneProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldDropzoneOptions & Partial<FileFieldDropzoneCommonProps<ElementOf<T>>>;
declare function FileFieldDropzone<T extends ValidComponent = "div">(props: PolymorphicProps<T, FileFieldDropzoneProps<T>>): JSX.Element;

interface FileFieldHiddenInputProps extends ComponentProps<"input"> {
}
declare function FileFieldHiddenInput<T extends ValidComponent = "input">(props: FileFieldHiddenInputProps): JSX.Element;

interface FileFieldItemOptions {
}
interface FileFieldItemCommonProps<T extends HTMLElement = HTMLElement> {
}
interface FileFieldItemRenderProps extends FileFieldItemCommonProps {
}
type FileFieldItemRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldItemOptions & Partial<FileFieldItemCommonProps<ElementOf<T>>>;
declare function FileFieldItem<T extends ValidComponent = "li">(props: PolymorphicProps<T, FileFieldItemRootProps<T>>): JSX.Element;

interface FileFieldItemDeleteTriggerOptions {
}
interface FileFieldItemDeleteTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface FileFieldItemDeleteTriggerRenderProps extends FileFieldItemDeleteTriggerCommonProps, ButtonRootRenderProps {
    disabled: boolean | undefined;
}
type FileFieldItemDeleteTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = Partial<FileFieldItemDeleteTriggerCommonProps<ElementOf<T>>>;
declare function FileFieldItemDeleteTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, FileFieldItemDeleteTriggerProps<T>>): JSX.Element;

interface FileFieldItemListOptions {
    children: (file: File) => JSX.Element;
}
interface FileFieldItemListCommonProps<T extends HTMLElement = HTMLElement> {
}
interface FileFieldItemListRenderProps extends FileFieldItemListCommonProps {
    children: JSX.Element;
}
type FileFieldItemListProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldItemListOptions & Partial<FileFieldItemListCommonProps<ElementOf<T>>>;
declare function FileFieldItemList<T extends ValidComponent = "ul">(props: PolymorphicProps<T, FileFieldItemListProps<T>>): JSX.Element;

interface FileFieldItemNameOptions {
}
interface FileFieldItemNameCommonProps<T extends HTMLElement = HTMLElement> {
    children: JSX.Element;
}
interface FileFieldItemNameRenderProps extends FileFieldItemNameCommonProps {
}
type FileFieldItemNameProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldItemNameOptions & Partial<FileFieldItemNameCommonProps<ElementOf<T>>>;
declare function FileFieldItemName<T extends ValidComponent = "span">(props: PolymorphicProps<T, FileFieldItemNameProps<T>>): JSX.Element;

interface FileFieldItemPreviewOptions {
    type: string;
}
interface FileFieldItemPreviewCommonProps<T extends HTMLElement = HTMLElement> {
}
interface FileFieldItemPreviewRenderProps extends FileFieldItemPreviewCommonProps {
}
type FileFieldItemPreviewProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldItemPreviewOptions & Partial<FileFieldItemPreviewCommonProps<ElementOf<T>>>;
declare function FileFieldItemPreview<T extends ValidComponent = "div">(props: PolymorphicProps<T, FileFieldItemPreviewProps<T>>): JSX.Element;

interface FileFieldItemPreviewImageOptions {
}
interface FileFieldItemPreviewImageCommonProps<T extends HTMLElement = HTMLElement> {
}
interface FileFieldItemPreviewImageRenderProps extends FileFieldItemPreviewImageCommonProps {
    src: string;
}
type FileFieldItemPreviewImageProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldItemPreviewImageOptions & Partial<FileFieldItemPreviewImageCommonProps<ElementOf<T>>>;
declare function FileFieldItemPreviewImage<T extends ValidComponent = "img">(props: PolymorphicProps<T, FileFieldItemPreviewImageProps<T>>): JSX.Element;

interface FileFieldItemSizeOptions {
    precision?: number;
}
interface FileFieldItemSizeCommonProps<T extends HTMLElement = HTMLElement> {
}
interface FileFieldItemSizeRenderProps extends FileFieldItemSizeCommonProps {
    children: JSX.Element;
}
type FileFieldItemSizeProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldItemSizeOptions & Partial<FileFieldItemSizeCommonProps<ElementOf<T>>>;
declare function FileFieldItemSize<T extends ValidComponent = "span">(props: PolymorphicProps<T, FileFieldItemSizeProps<T>>): JSX.Element;

interface FileFieldLabelOptions {
}
interface FileFieldLabelCommonProps<T extends HTMLElement = HTMLElement> {
}
interface FileFieldLabelRenderProps extends FileFieldLabelCommonProps {
    for: string;
}
type FileFieldLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldLabelOptions & Partial<FileFieldLabelCommonProps<ElementOf<T>>>;
declare function FileFieldLabel<T extends ValidComponent = "label">(props: PolymorphicProps<T, FileFieldLabelProps<T>>): JSX.Element;

interface FileFieldRootOptions {
    /** The localized strings of the component. */
    translations?: FileFieldIntlTranslations;
    multiple?: boolean;
    accept?: Accept;
    maxFiles?: number;
    allowDragAndDrop?: boolean;
    maxFileSize?: number;
    minFileSize?: number;
    onFileAccept?: (files: File[]) => void;
    onFileReject?: (files: FileRejection[]) => void;
    onFileChange?: (details: Details) => void;
    validate?: (file: File) => FileError[] | null;
    id?: string;
    /**
     * The name of the select.
     * Submitted with its owning form as part of a name/value pair.
     */
    name?: string;
    /** Whether the select should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must select an item before the owning form can be submitted. */
    required?: boolean;
    /** Whether the select is disabled. */
    disabled?: boolean;
    /** Whether the select is read only. */
    readOnly?: boolean;
}
interface FileFieldRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface FileFieldRootRenderProps extends FileFieldRootCommonProps, FormControlDataSet {
    role: "group";
}
type FileFieldRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldRootOptions & Partial<FileFieldRootCommonProps<ElementOf<T>>>;
declare function FileField$1<T extends ValidComponent = "div">(props: PolymorphicProps<T, FileFieldRootProps<T>>): solid_js.JSX.Element;

interface FileFieldTriggerOptions {
}
interface FileFieldTriggerCommonProps<T extends HTMLElement = HTMLElement> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface FileFieldTriggerRenderProps extends FileFieldTriggerCommonProps, FormControlDataSet, ButtonRootRenderProps {
}
type FileFieldTriggerProps<T extends ValidComponent | HTMLElement = HTMLElement> = FileFieldTriggerOptions & Partial<FileFieldTriggerCommonProps<ElementOf<T>>>;
declare function FileFieldTrigger<T extends ValidComponent = "button">(props: PolymorphicProps<T, FileFieldTriggerProps<T>>): JSX.Element;

declare const FileField: typeof FileField$1 & {
    Context: solid_js.Context<FileFieldContextValue | undefined>;
    Dropzone: typeof FileFieldDropzone;
    HiddenInput: typeof FileFieldHiddenInput;
    Label: typeof FileFieldLabel;
    Trigger: typeof FileFieldTrigger;
    ItemList: typeof FileFieldItemList;
    Item: typeof FileFieldItem;
    ItemPreview: typeof FileFieldItemPreview;
    ItemPreviewImage: typeof FileFieldItemPreviewImage;
    ItemSize: typeof FileFieldItemSize;
    ItemDeleteTrigger: typeof FileFieldItemDeleteTrigger;
    ItemName: typeof FileFieldItemName;
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
};

export { Accept, FileFieldContext as Context, FormControlDescription as Description, Details, FileFieldDropzone as Dropzone, FormControlErrorMessage as ErrorMessage, FileError, FileField, FileFieldContextValue, FileFieldDropzoneCommonProps, FileFieldDropzoneOptions, FileFieldDropzoneProps, FileFieldDropzoneRenderProps, FileFieldHiddenInputProps, FileFieldItemCommonProps, FileFieldItemDeleteTriggerCommonProps, FileFieldItemDeleteTriggerOptions, FileFieldItemDeleteTriggerProps, FileFieldItemDeleteTriggerRenderProps, FileFieldItemListCommonProps, FileFieldItemListOptions, FileFieldItemListProps, FileFieldItemListRenderProps, FileFieldItemNameCommonProps, FileFieldItemNameOptions, FileFieldItemNameProps, FileFieldItemNameRenderProps, FileFieldItemOptions, FileFieldItemPreviewCommonProps, FileFieldItemPreviewImageCommonProps, FileFieldItemPreviewImageOptions, FileFieldItemPreviewImageProps, FileFieldItemPreviewImageRenderProps, FileFieldItemPreviewOptions, FileFieldItemPreviewProps, FileFieldItemPreviewRenderProps, FileFieldItemRenderProps, FileFieldItemRootProps, FileFieldItemSizeCommonProps, FileFieldItemSizeOptions, FileFieldItemSizeProps, FileFieldItemSizeRenderProps, FileFieldLabelCommonProps, FileFieldLabelOptions, FileFieldLabelProps, FileFieldLabelRenderProps, FileFieldRootCommonProps, FileFieldRootOptions, FileFieldRootProps, FileFieldRootRenderProps, FileFieldTriggerCommonProps, FileFieldTriggerOptions, FileFieldTriggerProps, FileFieldTriggerRenderProps, FileRejection, FileFieldHiddenInput as HiddenInput, FileFieldItem as Item, FileFieldItemDeleteTrigger as ItemDeleteTrigger, FileFieldItemList as ItemList, FileFieldItemName as ItemName, FileFieldItemPreview as ItemPreview, FileFieldItemPreviewImage as ItemPreviewImage, FileFieldItemSize as ItemSize, FileFieldLabel as Label, FileField$1 as Root, FileFieldTrigger as Trigger, useFileFieldContext };
