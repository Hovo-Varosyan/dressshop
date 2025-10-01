<script>
  import Button from "../ui/button.svelte";
  import "../../assets/style/filestatus.scss";
  import {
    Accordion,
    AccordionItem,
    Button as Btn,
  } from "carbon-components-svelte";
  let { product = $bindable() } = $props();
  let open = $state(false);
  let showMenu = $state(false);

  function deleteItem(index, name) {
    product.files.splice(index, 1);
    if (product.hoverFile === name) {
      product.hoverFile = "";
    } else if (product.mainFile === name) {
      product.mainFile = "";
    }
  }
</script>

{#if product.files.length}
  <Btn size="field" onclick={() => (showMenu = !showMenu)}
    >{showMenu ? "Close" : "Open"} menu</Btn
  >
  {#if showMenu}
    <section class="file--status">
      <Btn size="field" kind="ghost" onclick={() => (open = !open)}
        >{open ? "Collapse" : "Expand"} all</Btn
      >
      <Accordion>
        {#each product.files as file, i (file.name)}
          <AccordionItem title={file.name} {open}>
            {@const name = file.name}
            {@const disabled =
              name == product.mainFile || name == product.hoverFile}
            <div class="flex-between">
              {#if file.type.startsWith("image")}
                <figure class="file--container">
                  <img src={URL.createObjectURL(file)} alt="product" />
                </figure>
              {:else}
                <div class="file--container">
                  <video controls>
                    <source src={URL.createObjectURL(file)} type="video/mp4" />
                    <track kind="captions" srclang="en" />
                  </video>
                </div>
              {/if}
              <!-- 1024*1024= 1048576 bayt -> megabayt  -->
              <span>{(file.size / 1048576).toFixed(3)}Mb</span>
              <div class="flex-between">
                <Button
                  text={"make main"}
                  {disabled}
                  func={() => (product.mainFile = name)}
                />
                <Button
                  text={"make secondary"}
                  {disabled}
                  func={() => (product.hoverFile = name)}
                />
                <div class="delete">
                  <Button text={"delete"} func={() => deleteItem(i, name)} />
                </div>
              </div>
            </div>
          </AccordionItem>
        {/each}
      </Accordion>
    </section>
  {/if}
{/if}
