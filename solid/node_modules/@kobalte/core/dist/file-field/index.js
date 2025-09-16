import { ButtonRoot } from '../chunk/7OVKXYPU.js';
import { FormControlErrorMessage } from '../chunk/ICNSTULC.js';
export { FormControlErrorMessage as ErrorMessage } from '../chunk/ICNSTULC.js';
import { FormControlDescription, useFormControlContext, FORM_CONTROL_PROP_NAMES, createFormControl, FormControlContext } from '../chunk/YKGT7A57.js';
export { FormControlDescription as Description } from '../chunk/YKGT7A57.js';
import { Polymorphic } from '../chunk/6Y7B2NEO.js';
import { createContext, useContext, createSignal, splitProps, For, Show, createEffect, onCleanup, createUniqueId } from 'solid-js';
import { createComponent, mergeProps, use, spread, template } from 'solid-js/web';
import { mergeRefs, composeEventHandlers, visuallyHiddenStyles, mergeDefaultProps } from '@kobalte/utils';
import { combineStyle } from '@solid-primitives/props';
import { createStore, unwrap } from 'solid-js/store';

var FileFieldContext = createContext();
function useFileFieldContext() {
  const context = useContext(FileFieldContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useFileFieldContext` must be used within a `FileFieldContext.Root` component");
  }
  return context;
}

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
  const [local, others] = splitProps(props, ["ref", "onClick", "onKeyDown", "onDragOver", "onDragLeave", "onDrop"]);
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
    isDragEventWithFiles(e);
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
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    "aria-label": "dropzone",
    role: "button",
    tabindex: "0",
    get ["aria-disabled"]() {
      return context.disabled();
    },
    get ["data-dragging"]() {
      return isDragging();
    },
    ref(r$) {
      const _ref$ = mergeRefs(context.setDropzoneRef, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    get onClick() {
      return composeEventHandlers([local.onClick, onClick]);
    },
    get onKeyDown() {
      return composeEventHandlers([local.onKeyDown, onKeyDown]);
    },
    get onDragOver() {
      return composeEventHandlers([local.onDragOver, onDragOver]);
    },
    get onDragLeave() {
      return composeEventHandlers([local.onDragLeave, onDragLeave]);
    },
    get onDrop() {
      return composeEventHandlers([local.onDrop, onDrop]);
    }
  }, others));
}
var _tmpl$ = /* @__PURE__ */ template(`<input type="file">`);
function FileFieldHiddenInput(props) {
  const [local, others] = splitProps(props, ["style", "ref", "onChange"]);
  const context = useFileFieldContext();
  const formControlContext = useFormControlContext();
  const onChange = (event) => {
    if (context.disabled()) {
      return;
    }
    const {
      files
    } = event.currentTarget;
    context.processFiles(Array.from(files ?? []));
  };
  return (() => {
    const _el$ = _tmpl$();
    const _ref$ = mergeRefs(context.setFileInputRef, local.ref);
    typeof _ref$ === "function" && use(_ref$, _el$);
    spread(_el$, mergeProps({
      get id() {
        return context.inputId();
      },
      get accept() {
        return context.accept();
      },
      get multiple() {
        return context.multiple();
      },
      get style() {
        return combineStyle({
          ...visuallyHiddenStyles
        }, local.style);
      },
      get onChange() {
        return composeEventHandlers([local.onChange, onChange]);
      },
      get required() {
        return formControlContext.isRequired();
      },
      get disabled() {
        return formControlContext.isDisabled();
      },
      get readOnly() {
        return formControlContext.isReadOnly();
      }
    }, others), false, false);
    return _el$;
  })();
}
function FileFieldItem(props) {
  return createComponent(Polymorphic, mergeProps({
    as: "li"
  }, props));
}
var FileFieldItemContext = createContext();
function useFileFieldItemContext() {
  const context = useContext(FileFieldItemContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useFileFieldItemContext` must be used within a `FileField.ItemList` component");
  }
  return context;
}

// src/file-field/file-field-item-delete-trigger.tsx
function FileFieldItemDeleteTrigger(props) {
  const context = useFileFieldContext();
  const {
    file
  } = useFileFieldItemContext();
  const [local, others] = splitProps(props, ["onClick"]);
  const handleDelete = () => {
    context.removeFile(file);
  };
  return createComponent(ButtonRoot, mergeProps({
    get onClick() {
      return composeEventHandlers([local.onClick, handleDelete]);
    },
    get disabled() {
      return context.disabled();
    }
  }, others));
}
function FileFieldItemList(props) {
  const context = useFileFieldContext();
  const [local, others] = splitProps(props, ["children"]);
  return createComponent(Polymorphic, mergeProps({
    as: "ul"
  }, others, {
    get children() {
      return createComponent(For, {
        get each() {
          return context.acceptedFiles;
        },
        children: (file) => createComponent(FileFieldItemContext.Provider, {
          value: {
            file
          },
          get children() {
            return local.children(file);
          }
        })
      });
    }
  }));
}
function FileFieldItemName(props) {
  const {
    file
  } = useFileFieldItemContext();
  return createComponent(Polymorphic, mergeProps({
    as: "span"
  }, props, {
    get children() {
      return props.children ?? file.name;
    }
  }));
}
function FileFieldItemPreview(props) {
  const {
    file
  } = useFileFieldItemContext();
  const [local, others] = splitProps(props, ["type"]);
  return createComponent(Show, {
    get when() {
      return file.type.match(local.type ?? ".*");
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div"
      }, others));
    }
  });
}
function FileFieldItemPreviewImage(props) {
  return createComponent(FileFieldItemPreview, {
    type: "image/*",
    children: () => {
      const [url, setUrl] = createSignal("");
      const {
        file
      } = useFileFieldItemContext();
      const createFileUrl = (file2, callback) => {
        const win = window;
        const url2 = win.URL.createObjectURL(file2);
        callback(url2);
        return () => win.URL.revokeObjectURL(url2);
      };
      createEffect(() => {
        onCleanup(createFileUrl(file, (url2) => setUrl(url2)));
      });
      return createComponent(Polymorphic, mergeProps({
        as: "img",
        get src() {
          return url();
        }
      }, props));
    }
  });
}
function formatBytes(bytes, precision, sizes) {
  if (bytes === 0)
    return `0 ${sizes[0]}`;
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(precision))} ${sizes[i]}`;
}
function FileFieldItemSize(props) {
  const {
    translations
  } = useFileFieldContext();
  const size = () => [translations().bytes, translations().kb, translations().mb, translations().gb, translations().tb];
  const {
    file
  } = useFileFieldItemContext();
  const [local, others] = splitProps(props, ["precision"]);
  return createComponent(Polymorphic, mergeProps({
    as: "span"
  }, others, {
    get children() {
      return formatBytes(file.size, local.precision ?? 2, size());
    }
  }));
}
function FileFieldLabel(props) {
  const context = useFileFieldContext();
  return createComponent(Polymorphic, mergeProps({
    as: "label",
    get ["for"]() {
      return context.inputId();
    }
  }, props));
}

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
  const [fileInputRef, setFileInputRef] = createSignal();
  const [dropzoneRef, setDropzoneRef] = createSignal();
  const [acceptedFilesState, setAcceptedFilesState] = createStore([]);
  const [rejectedFilesState, setRejectedFilesState] = createStore([]);
  const mergedProps = mergeDefaultProps({
    id: defaultId,
    allowDragAndDrop: true,
    disabled: false,
    multiple: false,
    maxFiles: 1,
    maxFileSize: Number.POSITIVE_INFINITY,
    minFileSize: 0,
    validate: void 0,
    translations: FILE_FIELD_INTL_TRANSLATIONS
  }, props);
  const processFiles = (files) => {
    const {
      acceptedFiles,
      rejectedFiles
    } = getFiles(files, parseAcceptedTypes(mergedProps.accept), mergedProps.multiple ?? false, mergedProps.maxFiles ?? 1, mergedProps.minFileSize, mergedProps.maxFileSize, mergedProps.validate);
    if (mergedProps.multiple) {
      setAcceptedFilesState((prevAcceptedFiles) => [...prevAcceptedFiles, ...acceptedFiles]);
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
    mergedProps.onFileChange?.({
      acceptedFiles,
      rejectedFiles
    });
  };
  const removeFile = (file) => {
    setAcceptedFilesState((prevAcceptedFiles) => prevAcceptedFiles.filter((f) => f !== file));
    mergedProps.onFileChange?.({
      acceptedFiles: unwrap(acceptedFilesState),
      rejectedFiles: unwrap(rejectedFilesState)
    });
  };
  const [formControlProps, others] = splitProps(mergedProps, FORM_CONTROL_PROP_NAMES);
  const {
    formControlContext
  } = createFormControl(formControlProps);
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
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(FileFieldContext.Provider, {
        value: context,
        get children() {
          return createComponent(Polymorphic, mergeProps({
            as: "div",
            role: "group",
            get id() {
              return formControlProps.id;
            }
          }, () => formControlContext.dataset(), others));
        }
      });
    }
  });
}
function FileFieldTrigger(props) {
  const context = useFileFieldContext();
  const formControlContext = useFormControlContext();
  const [local, others] = splitProps(props, ["onClick"]);
  const onClick = (event) => {
    if (context.dropzoneRef()?.contains(event.target)) {
      event.stopPropagation();
    }
    context.fileInputRef()?.click();
  };
  return createComponent(ButtonRoot, mergeProps({
    get disabled() {
      return context.disabled();
    },
    get onClick() {
      return composeEventHandlers([local.onClick, onClick]);
    }
  }, () => formControlContext.dataset(), others));
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

export { FileFieldContext as Context, FileFieldDropzone as Dropzone, FileField2 as FileField, FileFieldHiddenInput as HiddenInput, FileFieldItem as Item, FileFieldItemDeleteTrigger as ItemDeleteTrigger, FileFieldItemList as ItemList, FileFieldItemName as ItemName, FileFieldItemPreview as ItemPreview, FileFieldItemPreviewImage as ItemPreviewImage, FileFieldItemSize as ItemSize, FileFieldLabel as Label, FileField as Root, FileFieldTrigger as Trigger, useFileFieldContext };
