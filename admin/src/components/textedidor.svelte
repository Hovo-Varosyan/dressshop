<script>
  import Quill from "quill";
  import "quill/dist/quill.snow.css";
  import { onMount } from "svelte";
  import "../assets/style/editor.scss";
  import Button from "./ui/button.svelte";
  import alertMessage from "../middleware/alertMessage";
  import { v4 as uuidv4 } from "uuid";
  import clsx from "clsx";
  let { value = $bindable(), media = false, curentLang } = $props();
  let mediaList = [];
  let quill;
  let id = `editor-${uuidv4()}`;
  quill.root.innerHTML = value;

  onMount(() => {
    if (quill && value == "") clearEditorText();

    if (media) {
      mediaList = ["image", "video"];
    }
    quill = new Quill(document.getElementById(id), {
      placeholder: "Enter text...",
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ size: ["small", "large", "huge", false] }],
          ["bold", "italic", "underline"],
          ["blockquote"],
          [{ align: [] }],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["link", ...mediaList],
          ["clean"],
        ],
      },
    });
    quill.on("text-change", () => {
      try {
        value = quill.root.innerHTML;
        if (value === "<p><br></p>") clearEditorText();
      } catch (e) {
        alertMessage("error", e);
      }
    });
  });

  function clearEditorText() {
    if (quill) {
      quill.setContents([]);
      value = "";
      return;
    }
    alertMessage("error", "Quill undefined");
  }
</script>

<section>
  <div class="editor-container">
    <div {id} class="editor"></div>
    <div class="clear delete">
      <Button text="clear" func={clearEditorText} />
    </div>
  </div>
</section>
