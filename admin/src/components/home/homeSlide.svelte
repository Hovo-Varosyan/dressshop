<script>
  import alertMessage from "../../middleware/alertMessage";
  import server from "../../middleware/api";
  import Button from "../ui/button.svelte";
  import Filebtn from "../ui/filebtn.svelte";
  import "../../assets/style/filestatus.scss";
  import FilePreviws from "./filePreviws.svelte";
  import Fileprevews from "../product/fileprevews.svelte";

  let { product = $bindable() } = $props();
  let data = $state({ dekstop: [], mobile: [] });

  let loading = $state(false);
  function fileUpload(e) {
    e.preventDefault();
    loading = true;
    server
      .post("/admin/home/slide")
      .then((res) => {
        alertMessage("success", res);
      })
      .catch((err) => {
        alertMessage("error", err);
      })
      .finally(() => {
        loading = false;
      });
  }
  $inspect(data);
</script>

<form class="py-5" onsubmit={fileUpload}>
  <h1 class="py-4">Upload slide</h1>
  <h3>Dekstop</h3>
  <Filebtn video={true} bind:data={data.dekstop} />
  <FilePreviws bind:files={data.dekstop} />
  <h3>Mobile</h3>
  <Filebtn video={true} bind:data={data.mobile} />
  <FilePreviws bind:files={data.mobile} />
  <Button text="Upload" disabled={loading} {loading} type="submit" />
</form>
<h2>Edit slide</h2>

<style>
  h1,
  h2,
  h3 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>
