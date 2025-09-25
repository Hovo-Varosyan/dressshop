<script>
  import alertMessage from "../../middleware/alertMessage";
  import server from "../../middleware/api";
  import MainText from "../mainText.svelte";
  import Button from "../ui/button.svelte";
  let { api } = $props();
  let data = $state({
    title: { en: "", hy: "", ru: "" },
    description: { en: "", hy: "", ru: "" },
  });
  let loading = $state(false);
  let currentLang = $state("en");
  function handleSubmit(e) {
    e.preventDefault();
    server
      .post(api, data)
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

<section class="main-text">
  <label for="lang-select">Select language:</label>
  <select id="lang-select" bind:value={currentLang}>
    <option value="en">English</option>
    <option value="hy">Armenian</option>
    <option value="ru">Russian</option>
  </select>
  <form method="post" onsubmit={handleSubmit}>
    <MainText lang={currentLang} bind:data />
    <Button type={"submit"} {loading} />
  </form>
</section>

<style>
  section {
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 30px;
    width: 60%;
  }
  select {
    min-width: 150px;
  }
</style>
