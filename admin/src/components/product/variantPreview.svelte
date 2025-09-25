<script>
  import {
    Accordion,
    AccordionItem,
    Button as Btn,
  } from "carbon-components-svelte";
  import Button from "../ui/button.svelte";
  import "../../assets/style/variantPreview.scss";

  let { data = $bindable(), curentLang } = $props();
  let open = $state(false);
</script>

{#if data.length}
  <section class="variant--preview">
    <Btn size="field" kind="ghost" onclick={() => (open = !open)}
      >{open ? "Collapse" : "Expand"} all</Btn
    >
    <Accordion>
      {#each data as item, i (item.title[curentLang] + Math.round(Math.random() * 100).toString())}
        <AccordionItem title={item.title[curentLang]} {open}>
          <img src={URL.createObjectURL(item.file[0])} alt="product variant" />
          <span>{item.article}</span>
          <span>{item.quantity}</span>
          <div class="delete">
            <Button func={() => data.splice(i, 1)} text={"delete variant"} />
          </div>
        </AccordionItem>
      {/each}
    </Accordion>
  </section>
{/if}
