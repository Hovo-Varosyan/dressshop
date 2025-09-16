import {
  ButtonRoot
} from "../chunk/UKTBL2JL.jsx";
import {
  FormControlErrorMessage
} from "../chunk/ZZYKR3VO.jsx";
import {
  FORM_CONTROL_PROP_NAMES,
  FormControlContext,
  FormControlDescription,
  createFormControl,
  useFormControlContext
} from "../chunk/XUUROM4M.jsx";
import "../chunk/JNCCF6MP.jsx";
import "../chunk/OYES4GOP.jsx";
import {
  Polymorphic
} from "../chunk/FLVHQV4A.jsx";
import "../chunk/5WXHJDCZ.jsx";

// src/file-field/file-field-context.tsx
import {
  createContext,
  useContext
} from "solid-js";
var FileFieldContext = createContext();
function useFileFieldContext() {
  const context = useContext(FileFieldContext);
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `useFileFieldContext` must be used within a `FileFieldContext.Root` component"
    );
  }
  return context;
}

// src/file-field/file-field-dropzone.tsx
import {
  createSignal,
  splitProps
} from "solid-js";
import { composeEventHandlers, mergeRefs } from "@kobalte/utils";

// src/file-field/util.ts
var isFileAccepted = (file, accept) => {
  if (file && accept) {
    const types = Array.isArray(accept) ? accept : accept.split(",");
    const fileName = file.name || "";
    const mimeType = (file.type || "").toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, "");
    return types.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      }
      if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
};
var isValidFileSize = (file, minSize, maxSize) => {
  if (file.size) {
    if (minSize && maxSize) {
      if (file.size > maxSize) {
        return [false, "FILE_TOO_LARGE"];
      }
      if (file.size < minSize) {
        return [false, "FILE_TOO_SMALL"];
      }
    } else if (minSize && file.size < minSize) {
      return [false, "FILE_TOO_SMALL"];
    } else if (maxSize && file.size > maxSize) {
      return [false, "FILE_TOO_LARGE"];
    }
  }
  return [true, null];
};
var isValidFileType = (file, accept) => {
  const isAcceptable = file.type === "application/x-moz-file" || isFileAccepted(file, accept);
  return [isAcceptable, isAcceptable ? null : "FILE_INVALID_TYPE"];
};
var isFilesWithinMaxRange = (acceptedFilesLength, multiple, maxFiles) => {
  if (!multiple && acceptedFilesLength > 1) {
    return false;
  }
  return acceptedFilesLength <= maxFiles;
};
var getFiles = (files, accept, multiple, maxFiles, minFileSize, maxFileSize, validate) => {
  const acceptedFiles = [];
  const rejectedFiles = [];
  for (const file of files) {
    const [accepted, acceptError] = isValidFileType(file, accept);
    const [isValidSize, invalidSizeErro] = isValidFileSize(
      file,
      minFileSize,
      maxFileSize
    );
    const validateErrors = validate?.(file);
    const valid = validateErrors ? validateErrors.length === 0 : true;
    if (accepted && isValidSize && valid) {
      acceptedFiles.push(file);
    } else {
      const errors = [acceptError, invalidSizeErro];
      if (!valid) {
        errors.push(...validateErrors ?? []);
      }
      rejectedFiles.push({
        file,
        errors: errors.filter(Boolean)
      });
    }
  }
  if (!isFilesWithinMaxRange(acceptedFiles.length, !!multiple, maxFiles)) {
    for (const file of acceptedFiles) {
      rejectedFiles.push({ file, errors: ["TOO_MANY_FILES"] });
    }
    acceptedFiles.splice(0);
  }
  return {
    acceptedFiles,
    rejectedFiles
  };
};
var isDragEventWithFiles = (event) => {
  if (!event.dataTransfer) {
    return !!event.target && "files" in event.target;
  }
  return event.dataTransfer.types.some((type) => {
    return type === "Files" || type === "application/x-moz-file";
  });
};
var parseAcceptedTypes = (accept) => {
  if (typeof accept === "string") {
    return accept;
  }
  if (Array.isArray(accept)) {
    return accept.join(",");
  }
};

// src/file-field/file-field-dropzone.tsx
function FileFieldDropzone(props) {
  const [isDragging, setIsDragging] = createSignal(false);
  const context = useFileFieldContext();
  const [local, others] = splitProps(props, [
    "ref",
    "onClick",
    "onKeyDown",
    "onDragOver",
    "onDragLeave",
    "onDrop"
  ]);
  const onClick = (e) => {
    if (e.target.tagName === "LABEL") {
      e.stopPropagation();
    } else {
      context.fileInputRef()?.click();
    }
  };
  const onKeyDown = (e) => {
    if (e.defaultPrevented) {
      return;
    }
    if (e.key !== "Enter" && e.key !== " ") {
      return;
    }
    context.fileInputRef()?.click();
  };
  const onDragOver = (e) => {
    if (!context.allowDragAndDrop || context.disabled()) {
      return;
    }
    e.preventDefault();
    try {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "copy";
      }
    } catch {
    }
    const isFilesEvent = isDragEventWithFiles(e);
    if ((e.dataTransfer?.items ?? []).length > 0) {
      setIsDragging(true);
    }
  };
  const onDragLeave = (e) => {
    if (!context.allowDragAndDrop || context.disabled()) {
      return;
    }
    setIsDragging(false);
  };
  const onDrop = (e) => {
    if (context.allowDragAndDrop()) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isFilesEvent = isDragEventWithFiles(e);
    if (context.disabled() || !isFilesEvent) {
      return;
    }
    const files = e.dataTransfer?.files;
    const fileList = Array.from(files ?? []);
    context.processFiles(fileList);
  };
  return <Polymorphic
    as="div"
    aria-label="dropzone"
    role="button"
    tabindex="0"
    aria-disabled={context.disabled()}
    data-dragging={isDragging()}
    ref={mergeRefs(context.setDropzoneRef, local.ref)}
    onClick={composeEventHandlers([local.onClick, onClick])}
    onKeyDown={composeEventHandlers([local.onKeyDown, onKeyDown])}
    onDragOver={composeEventHandlers([local.onDragOver, onDragOver])}
    onDragLeave={composeEventHandlers([local.onDragLeave, onDragLeave])}
    onDrop={composeEventHandlers([local.onDrop, onDrop])}
    {...others}
  />;
}

// src/file-field/file-field-hidden-input.tsx
import {
  composeEventHandlers as composeEventHandlers2,
  mergeRefs as mergeRefs2,
  visuallyHiddenStyles
} from "@kobalte/utils";
import { combineStyle } from "@solid-primitives/props";
import {
  splitProps as splitProps2
} from "solid-js";
function FileFieldHiddenInput(props) {
  const [local, others] = splitProps2(props, ["style", "ref", "onChange"]);
  const context = useFileFieldContext();
  const formControlContext = useFormControlContext();
  const onChange = (event) => {
    if (context.disabled()) {
      return;
    }
    const { files } = event.currentTarget;
    context.processFiles(Array.from(files ?? []));
  };
  return <input
    type="file"
    id={context.inputId()}
    accept={context.accept()}
    multiple={context.multiple()}
    ref={mergeRefs2(context.setFileInputRef, local.ref)}
    style={combineStyle({ ...visuallyHiddenStyles }, local.style)}
    onChange={composeEventHandlers2([local.onChange, onChange])}
    required={formControlContext.isRequired()}
    disabled={formControlContext.isDisabled()}
    readOnly={formControlContext.isReadOnly()}
    {...others}
  />;
}

// src/file-field/file-field-item.tsx
function FileFieldItem(props) {
  return <Polymorphic
    as="li"
    {...props}
  />;
}

// src/file-field/file-field-item-delete-trigger.tsx
import {
  splitProps as splitProps3
} from "solid-js";
import { composeEventHandlers as composeEventHandlers3 } from "@kobalte/utils";

// src/file-field/file-field-item-context.tsx
import { createContext as createContext2, useContext as useContext2 } from "solid-js";
var FileFieldItemContext = createContext2();
function useFileFieldItemContext() {
  const context = useContext2(FileFieldItemContext);
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `useFileFieldItemContext` must be used within a `FileField.ItemList` component"
    );
  }
  return context;
}

// src/file-field/file-field-item-delete-trigger.tsx
function FileFieldItemDeleteTrigger(props) {
  const context = useFileFieldContext();
  const { file } = useFileFieldItemContext();
  const [local, others] = splitProps3(props, [
    "onClick"
  ]);
  const handleDelete = () => {
    context.removeFile(file);
  };
  return <ButtonRoot
    onClick={composeEventHandlers3([local.onClick, handleDelete])}
    disabled={context.disabled()}
    {...others}
  />;
}

// src/file-field/file-field-item-list.tsx
import { For, splitProps as splitProps4 } from "solid-js";
function FileFieldItemList(props) {
  const context = useFileFieldContext();
  const [local, others] = splitProps4(props, [
    "children"
  ]);
  return <Polymorphic as="ul" {...others}><For each={context.acceptedFiles}>{(file) => <FileFieldItemContext.Provider value={{ file }}>{local.children(file)}</FileFieldItemContext.Provider>}</For></Polymorphic>;
}

// src/file-field/file-field-item-name.tsx
function FileFieldItemName(props) {
  const { file } = useFileFieldItemContext();
  return <Polymorphic
    as="span"
    {...props}
  >{props.children ?? file.name}</Polymorphic>;
}

// src/file-field/file-field-item-preview.tsx
import { Show, splitProps as splitProps5 } from "solid-js";
function FileFieldItemPreview(props) {
  const { file } = useFileFieldItemContext();
  const [local, others] = splitProps5(props, [
    "type"
  ]);
  return <Show when={file.type.match(local.type ?? ".*")}><Polymorphic as="div" {...others} /></Show>;
}

// src/file-field/file-field-item-preview-image.tsx
import {
  createEffect,
  createSignal as createSignal2,
  onCleanup
} from "solid-js";
function FileFieldItemPreviewImage(props) {
  return <FileFieldItemPreview type="image/*">{() => {
    const [url, setUrl] = createSignal2("");
    const { file } = useFileFieldItemContext();
    const createFileUrl = (file2, callback) => {
      const win = window;
      const url2 = win.URL.createObjectURL(file2);
      callback(url2);
      return () => win.URL.revokeObjectURL(url2);
    };
    createEffect(() => {
      onCleanup(createFileUrl(file, (url2) => setUrl(url2)));
    });
    return <Polymorphic
      as="img"
      src={url()}
      {...props}
    />;
  }}</FileFieldItemPreview>;
}

// src/file-field/file-field-item-size.tsx
import { splitProps as splitProps6 } from "solid-js";
function formatBytes(bytes, precision, sizes) {
  if (bytes === 0)
    return `0 ${sizes[0]}`;
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(precision))} ${sizes[i]}`;
}
function FileFieldItemSize(props) {
  const { translations } = useFileFieldContext();
  const size = () => [
    translations().bytes,
    translations().kb,
    translations().mb,
    translations().gb,
    translations().tb
  ];
  const { file } = useFileFieldItemContext();
  const [local, others] = splitProps6(props, [
    "precision"
  ]);
  return <Polymorphic as="span" {...others}>{formatBytes(file.size, local.precision ?? 2, size())}</Polymorphic>;
}

// src/file-field/file-field-label.tsx
function FileFieldLabel(props) {
  const context = useFileFieldContext();
  return <Polymorphic
    as="label"
    for={context.inputId()}
    {...props}
  />;
}

// src/file-field/file-field-root.tsx
import {
  createSignal as createSignal3,
  createUniqueId,
  splitProps as splitProps7
} from "solid-js";
import { mergeDefaultProps } from "@kobalte/utils";
import { createStore, unwrap } from "solid-js/store";

// src/file-field/file-field.intl.ts
var FILE_FIELD_INTL_TRANSLATIONS = {
  bytes: "Bytes",
  kb: "KB",
  mb: "MB",
  gb: "GB",
  tb: "TB"
};

// src/file-field/file-field-root.tsx
function FileField(props) {
  const defaultId = `FileField-${createUniqueId()}`;
  const [fileInputRef, setFileInputRef] = createSignal3();
  const [dropzoneRef, setDropzoneRef] = createSignal3();
  const [acceptedFilesState, setAcceptedFilesState] = createStore([]);
  const [rejectedFilesState, setRejectedFilesState] = createStore([]);
  const mergedProps = mergeDefaultProps(
    {
      id: defaultId,
      allowDragAndDrop: true,
      disabled: false,
      multiple: false,
      maxFiles: 1,
      maxFileSize: Number.POSITIVE_INFINITY,
      minFileSize: 0,
      validate: void 0,
      translations: FILE_FIELD_INTL_TRANSLATIONS
    },
    props
  );
  const processFiles = (files) => {
    const { acceptedFiles, rejectedFiles } = getFiles(
      files,
      parseAcceptedTypes(mergedProps.accept),
      mergedProps.multiple ?? false,
      mergedProps.maxFiles ?? 1,
      mergedProps.minFileSize,
      mergedProps.maxFileSize,
      mergedProps.validate
    );
    if (mergedProps.multiple) {
      setAcceptedFilesState((prevAcceptedFiles) => [
        ...prevAcceptedFiles,
        ...acceptedFiles
      ]);
      setRejectedFilesState(rejectedFiles);
    } else {
      if (acceptedFiles.length > 0 && acceptedFiles.length === 1) {
        setAcceptedFilesState([acceptedFiles[0]]);
        setRejectedFilesState(rejectedFiles);
      } else if (rejectedFiles.length > 0 && rejectedFiles.length === 1) {
        setRejectedFilesState(rejectedFiles);
      }
    }
    mergedProps.onFileAccept?.(acceptedFiles);
    if (rejectedFiles.length > 0) {
      mergedProps.onFileReject?.(rejectedFiles);
    }
    mergedProps.onFileChange?.({ acceptedFiles, rejectedFiles });
  };
  const removeFile = (file) => {
    setAcceptedFilesState(
      (prevAcceptedFiles) => prevAcceptedFiles.filter((f) => f !== file)
    );
    mergedProps.onFileChange?.({
      acceptedFiles: unwrap(acceptedFilesState),
      rejectedFiles: unwrap(rejectedFilesState)
    });
  };
  const [formControlProps, others] = splitProps7(
    mergedProps,
    FORM_CONTROL_PROP_NAMES
  );
  const { formControlContext } = createFormControl(formControlProps);
  const context = {
    inputId: () => mergedProps.id,
    fileInputRef,
    setFileInputRef,
    dropzoneRef,
    setDropzoneRef,
    disabled: () => mergedProps.disabled,
    multiple: () => mergedProps.multiple,
    accept: () => parseAcceptedTypes(mergedProps.accept),
    allowDragAndDrop: () => mergedProps.allowDragAndDrop,
    processFiles,
    acceptedFiles: acceptedFilesState,
    rejectedFiles: rejectedFilesState,
    removeFile,
    translations: () => mergedProps.translations
  };
  return <FormControlContext.Provider value={formControlContext}><FileFieldContext.Provider value={context}><Polymorphic
    as="div"
    role="group"
    id={formControlProps.id}
    {...formControlContext.dataset()}
    {...others}
  /></FileFieldContext.Provider></FormControlContext.Provider>;
}

// src/file-field/file-field-trigger.tsx
import { composeEventHandlers as composeEventHandlers4 } from "@kobalte/utils";
import {
  splitProps as splitProps8
} from "solid-js";
function FileFieldTrigger(props) {
  const context = useFileFieldContext();
  const formControlContext = useFormControlContext();
  const [local, others] = splitProps8(props, [
    "onClick"
  ]);
  const onClick = (event) => {
    if (context.dropzoneRef()?.contains(event.target)) {
      event.stopPropagation();
    }
    context.fileInputRef()?.click();
  };
  return <ButtonRoot
    disabled={context.disabled()}
    onClick={composeEventHandlers4([local.onClick, onClick])}
    {...formControlContext.dataset()}
    {...others}
  />;
}

// src/file-field/index.tsx
var FileField2 = Object.assign(FileField, {
  Context: FileFieldContext,
  Dropzone: FileFieldDropzone,
  HiddenInput: FileFieldHiddenInput,
  Label: FileFieldLabel,
  Trigger: FileFieldTrigger,
  ItemList: FileFieldItemList,
  Item: FileFieldItem,
  ItemPreview: FileFieldItemPreview,
  ItemPreviewImage: FileFieldItemPreviewImage,
  ItemSize: FileFieldItemSize,
  ItemDeleteTrigger: FileFieldItemDeleteTrigger,
  ItemName: FileFieldItemName,
  Description: FormControlDescription,
  ErrorMessage: FormControlErrorMessage
});
export {
  FileFieldContext as Context,
  FormControlDescription as Description,
  FileFieldDropzone as Dropzone,
  FormControlErrorMessage as ErrorMessage,
  FileField2 as FileField,
  FileFieldHiddenInput as HiddenInput,
  FileFieldItem as Item,
  FileFieldItemDeleteTrigger as ItemDeleteTrigger,
  FileFieldItemList as ItemList,
  FileFieldItemName as ItemName,
  FileFieldItemPreview as ItemPreview,
  FileFieldItemPreviewImage as ItemPreviewImage,
  FileFieldItemSize as ItemSize,
  FileFieldLabel as Label,
  FileField as Root,
  FileFieldTrigger as Trigger,
  useFileFieldContext
};
