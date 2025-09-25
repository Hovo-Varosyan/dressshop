<script>
  import alertMessage from "../../middleware/alertMessage";
  import server from "../../middleware/api";
  import Loading from "../loading.svelte";
  import Button from "../ui/button.svelte";
  import Filebtn from "../ui/filebtn.svelte";
  import FilePreviws from "./filePreviws.svelte";
  import Text from "./text.svelte";

  let loading = $state(false);
  let files = $state([]);
   let progress = $state({
    loaded: "",
    totoal: "",
    status: "active",
  });
  $inspect(files);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", files[0]);
    console.log(formData);
    loading = true;
    server
      .post("/admin/home/texttwofile", formData, {
        onUploadProgress: (e) => {
          (progress.totoal = e.total), (progress.loaded = e.loaded);
        },
      })
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
</script>
<section class="flex-center">
  <Loading
    bind:total={progress.totoal}
    bind:loaded={progress.loaded}
    bind:status={progress.status}
    bind:loading
  />
</section>
<Text api="/admin/home/text/textTwo" />
<form method="post" enctype="multipart/form-data" onsubmit={handleSubmit}>
  <Filebtn multiple="false" bind:data={files} />
  <FilePreviws {files} />
  <Button type={"submit"} {loading} />
</form>
