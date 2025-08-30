<script>
  import { v4 as uuidv4 } from "uuid";
  import alertMessage from "../../middleware/alertMessage";
  let {
    data = $bindable(),
    multiple = true,
    width = 900,
    height = 1200,
    video = false,
    ratio = 0.75, //3:4=0.75
    maxLimit = 10,
  } = $props();

  function fileValidate(item, type = "image") {
    const fileTag =
      type === "image" ? new Image() : document.createElement("video");
    const src = URL.createObjectURL(item);
    fileTag.src = src;
    const { name } = item;
    function clear() {
      URL.revokeObjectURL(src);
    }
    return new Promise((resolve, reject) => {
      if (type === "image") {
        fileTag.onload = () => {
          const { width: imgWidth, height: imgHeight } = fileTag;
          if (width < imgWidth || height < imgHeight) {
            reject(
              new Error(
                `${name} Width must be at least ${width}  and Height must be at least ${height}`
              )
            );
          } else if ((imgWidth / imgHeight).toFixed(2) != ratio) {
            reject(new Error(`${name} Height and width must be equal`));
          } else if (item.size > 10485760) {
            reject(new Error(`${name} size big 10mb`));
          } else {
            resolve(true);
          }
          clear();
        };
        fileTag.onerror = (e) => {
          clear();
          reject(e);
        };
      } else if (type === "video") {
        fileTag.onloadedmetadata = () => {
          const { videoWidth, videoHeight } = fileTag;
          resolve(true);
          clear();
        };
        fileTag.onerror = (e) => {
          reject(e);
          clear();
        };
      }
    });
  }

  async function setFile(e) {
    let { files } = e.target;

    if (!files.length) return;
    if (maxLimit) {
      const { length } = data,
        filesLength = files.length;
      if (
        filesLength > maxLimit ||
        length == maxLimit ||
        filesLength + length > maxLimit
      ) {
        alertMessage(
          "error",
          "The number of selected files must not exceed 10"
        );
        return;
      }
    }

    for (let item of files) {
      try {
        const type = item.type.startsWith("image")
          ? "image"
          : item.type.startsWith("video")
            ? "video"
            : null;

        if (!type) return;

        await fileValidate(item, type);
        fileAdd(item);
      } catch (err) {
        alertMessage("error", err);
      }
    }
  }

  function fileAdd(item) {
    if (data.some(({ name }) => name === item.name)) {
      throw new Error(`the file already exists ${item.name}`);
    }
    data.push(item);
  }
</script>

<label>
  <svg
    width="80"
    height="80"
    viewBox="0 0 25 24"
    fill="#ffffff"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0 0 0)"
    ><path
      d="M12.4239 16.75C12.2079 16.75 12.0132 16.6587 11.8763 16.5126L7.26675 11.9059C6.97376 11.6131 6.97361 11.1382 7.26641 10.8452C7.55921 10.5523 8.03408 10.5521 8.32707 10.8449L11.6739 14.1896L11.6739 4C11.6739 3.58579 12.0096 3.25 12.4239 3.25C12.8381 3.25 13.1739 3.58579 13.1739 4L13.1739 14.1854L16.5168 10.8449C16.8098 10.5521 17.2846 10.5523 17.5774 10.8453C17.8702 11.1383 17.87 11.6131 17.5771 11.9059L13.0021 16.4776C12.8646 16.644 12.6566 16.75 12.4239 16.75Z"
      fill="#ffffff"
    /><path
      d="M5.17188 16C5.17188 15.5858 4.83609 15.25 4.42188 15.25C4.00766 15.25 3.67188 15.5858 3.67188 16V18.5C3.67188 19.7426 4.67923 20.75 5.92188 20.75H18.9227C20.1654 20.75 21.1727 19.7426 21.1727 18.5V16C21.1727 15.5858 20.837 15.25 20.4227 15.25C20.0085 15.25 19.6727 15.5858 19.6727 16V18.5C19.6727 18.9142 19.337 19.25 18.9227 19.25H5.92188C5.50766 19.25 5.17188 18.9142 5.17188 18.5V16Z"
      fill="#ffffff"
    /></svg
  >
  download file<input
    type="file"
    accept={video ? "video/*, image/*" : "image/*"}
    onchange={setFile}
    name="file enter"
    {multiple}
  /></label
>

<style>
  label {
    margin: 15px 0;
    padding-right: 10px;
    background-color: black;
    display: flex;
    min-width: 200px;
    width: max-content;
    gap: 10px;
    align-items: center;
    color: white;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  label:hover {
    background-color: rgb(12, 0, 30);
  }
  svg {
    width: 40px;
    height: 30px;
    border-right: 1px solid white;
  }

  input {
    display: none;
  }
</style>
