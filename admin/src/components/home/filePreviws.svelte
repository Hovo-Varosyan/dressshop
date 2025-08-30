<script>
  import {
    Accordion,
    AccordionItem,
    Button as Btn,
  } from "carbon-components-svelte";
  import Button from "../ui/button.svelte";

  let { files = $bindable([]) } = $props();
  let showMenu = $state(false);
  let open = $state(false);
</script>

{#if files.length}
  <Btn size="field" onclick={() => (showMenu = !showMenu)}
    >{showMenu ? "Close" : "Open"} menu</Btn
  >
{/if}
{#if showMenu}
  <section class="file--status">
    <Btn size="field" kind="ghost" onclick={() => (open = !open)}
      >{open ? "Collapse" : "Expand"} all</Btn
    >
    <Accordion>
      {#each files as file, i (file.name)}
        <AccordionItem title={file.name} {open}>
          {@const name = file.name}

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
              <div class="delete">
                <Button text={"delete"} func={() => files.splice(i, 1)} />
              </div>
            </div>
          </div>
        </AccordionItem>
      {/each}
    </Accordion>
  </section>
{/if}
