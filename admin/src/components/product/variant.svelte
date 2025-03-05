<script>
  import alertMessage from "../../middleware/alertMessage";
  import Button from "../ui/button.svelte";
  import Filebtn from "../ui/filebtn.svelte";
  import Fileprevews from "./fileprevews.svelte";
  import { variant } from "../../assets/json/product.json";
  import Size from "./size.svelte";
  let { data = $bindable() } = $props();
  let variantObj = $state(variant);

  function variantAdd() {
    try {
      const { title, quantity, file, size } = variantObj;
      if (!title.trim()) {
        throw "Variant title is required";
      } else if (!file.name) {
        throw "variant file is required";
      } else if (quantity <= 0) {
        throw "The quantity field is required and must be greater than 0";
      } else if (!size.length) {
        throw "Size must be specified.";
      }

      data.push(variantObj);
      variantObj = variant;
    } catch (err) {
      alertMessage("error", err);
    }
  }
</script>

<section class="variant">
  <h4>Variant</h4>

  <div class="flex">
    <label
      >title <input
        type="text"
        name="variant"
        bind:value={variantObj.title}
        placeholder="enter title..."
      /></label
    >
    <label
      >quantity <input
        type="number"
        bind:value={variantObj.quantity}
        min="0"
        name="limit"
      />
    </label>
    <Size bind:data={variantObj.size} />
  </div>
  <Filebtn bind:data={variantObj.file} multiple={false} />
  <Fileprevews bind:file={variantObj.file} />
  <section>
    <Button text="add" func={variantAdd} />
  </section>
</section>
