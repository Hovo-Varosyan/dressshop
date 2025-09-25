<script>
  import alertMessage from "../../middleware/alertMessage";
  import Button from "../ui/button.svelte";
  import Filebtn from "../ui/filebtn.svelte";
  import Fileprevews from "./fileprevews.svelte";
  import { variant } from "../../assets/json/product.json";
  import Size from "./size.svelte";
  
  let { data = $bindable(), curentLang } = $props();
  let variantObj = $state(variant);
  let language = $state(curentLang);

  function variantAdd() {
    try {
      const { title, quantity, file, size } = variantObj;
      if (Object.values(title).some(val => !val.trim())) {
        throw "Variant title all language is required";
      } else if (!file.length) {
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
    <select id="lang-select" bind:value={language}>
      <option value="en">English</option>
      <option value="hy">Armenian</option>
      <option value="ru">Russian</option>
    </select>
    <label
      >title <input
        type="text"
        name="variant"
        bind:value={variantObj.title[language]}
        placeholder={`enter title...${language}`}
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
  <Filebtn bind:data={variantObj.file} maxLimit={1} multiple={false} />
  <Fileprevews bind:file={variantObj.file[0]} />
  <section>
    <Button text="add" func={variantAdd} />
  </section>
</section>
