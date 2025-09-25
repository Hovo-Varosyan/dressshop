<script>
  import Textedidor from "../components/textedidor.svelte";
  import Button from "../components/ui/button.svelte";
  import "../assets/style/product.scss";
  import Filebtn from "../components/ui/filebtn.svelte";
  import Price from "../components/product/price.svelte";
  import Variant from "../components/product/variant.svelte";
  import ProductData from "../components/product/productData.svelte";
  import namespace from "quill/core/logger";
  import server from "../middleware/api";
  import VariantPreview from "../components/product/variantPreview.svelte";
  import FileStatus from "../components/product/fileStatus.svelte";
  import { product as productJson } from "../assets/json/product.json";
  import { v4 as uuidv4 } from "uuid";
  import { alertList } from "./store";
  import formData from "../middleware/productFormData";
  import alertMessage from "../middleware/alertMessage";
  import Loading from "../components/loading.svelte";
  import validateProduct from "../middleware/validateProduct";

  let progress = $state({
    loaded: "",
    totoal: "",
    status: "active",
  });
  let curentLang = $state("en");
  let loading = $state(false);
  let product = $state(productJson);
  $inspect(product);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      validateProduct(product);

      progress.status = "active";
      window.scrollTo(0, 0);
      loading = true;
      const res = await server.post("/admin/product/add", formData(product), {
        onUploadProgress: (e) => {
          (progress.totoal = e.total), (progress.loaded = e.loaded);
        },
      });

      if (!res.data?.message) {
        throw new Error("500 Unknown error");
      }
      product = productJson;

      alertMessage("success", res);
    } catch (err) {
      progress.status = "error";
      alertMessage("error", err);
    } finally {
      setTimeout(() => {
        loading = false;
        progress.status = "active";
      }, 10000);
    }
  }
</script>

<section class="product">
  <Loading
    bind:total={progress.totoal}
    bind:loaded={progress.loaded}
    bind:status={progress.status}
    bind:loading
  />
  <form onsubmit={onSubmit} enctype="multipart/form-data">
    <h2>Product</h2>
    <section>
      <select id="lang-select" bind:value={curentLang}>
        <option value="en">English</option>
        <option value="hy">Armenian</option>
        <option value="ru">Russian</option>
      </select>
      <label
        >title <input
          type="text"
          bind:value={product.title[curentLang]}
          name="variant"
          placeholder={`enter title...${curentLang}`}
          required
        /></label
      >
      <div class="product_editor">
        <Textedidor bind:value={product.description[curentLang]} />
      </div>
      <Price bind:price={product.price} />
      <ProductData bind:data={product} {curentLang} />

      <Filebtn bind:data={product.files} video={true} />
      <FileStatus bind:product />
    </section>

    <Variant bind:data={product.variant} {curentLang} />
    <VariantPreview bind:data={product.variant} {curentLang} />
    <Button type={"submit"} bind:loading disabled={loading} />
  </form>
</section>
