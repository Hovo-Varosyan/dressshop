<script>
  import Textedidor from "./textedidor.svelte";
  let { lang, data = $bindable() } = $props();

  $inspect(data);
</script>

<section>
  <input
    name={`title${lang}`}
    type="text"
class="title-lang"
    placeholder={`Title ${lang}`}
    bind:value={data.title[lang]}
  />
  <Textedidor bind:value={data.description[lang]} />
</section>
 
<style>
   .title-lang{
    width: 100%;
    padding: 10px 15px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
   }
</style>
