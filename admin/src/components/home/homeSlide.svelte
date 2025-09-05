<script>
  import alertMessage from "../../middleware/alertMessage";
  import server from "../../middleware/api";
  import Button from "../ui/button.svelte";
  import Filebtn from "../ui/filebtn.svelte";
  import "../../assets/style/filestatus.scss";
  import FilePreviws from "./filePreviws.svelte";
  import Fileprevews from "../product/fileprevews.svelte";
  import { CodeSnippetSkeleton } from "carbon-components-svelte";
  import Loading from "../loading.svelte";

  let { product = $bindable() } = $props();
  let data = $state([]);
  let progress = $state({
    loaded: "",
    totoal: "",
    status: "active",
  });

  let loading = $state(false);

  function fileUpload(e) {
    e.preventDefault();
    loading = true;
    const fileData = new FormData();
    data.forEach((file, index) => {
      fileData.append(`index${index}`, file);
    });
    server
      .post("/admin/home/slide", fileData, {
        onUploadProgress: (e) => {
          (progress.totoal = e.total), (progress.loaded = e.loaded);
        },
      })
      .then((res) => {
        alertMessage("success", res);
      })
      .catch((err) => {
        progress.status = "error";
        alertMessage("error", err);
      })
      .finally(() => {
        setTimeout(() => {
          loading = false;
          progress.status = "active";
        }, 10000);
      });
  }
</script>

<section class="flex-center">
  <Loading
    bind:total={progress.totoal}
    bind:loaded={progress.loaded}
    bind:status={progress.status}
    bind:loading
  />
</section>

<form
  class="py-5 flex-center"
  enctype="multipart/form-data"
  onsubmit={fileUpload}
>
  <h1 class="py-4">Upload slide</h1>
  <h3>Dekstop</h3>
  <Filebtn width={1920} ratio={1.78} height={1080} video={true} bind:data />
  <FilePreviws bind:files={data} />
  <Button text="Upload" disabled={!data.length} {loading} type="submit" />
</form>
<h2>Edit slide</h2>

<style>
  h1,
  h2,
  h3 {
    text-align: center;
  }
  section {
    margin: 0 auto;
  }
  form {
    flex-direction: column;
    gap: 20px;
  }
</style>
