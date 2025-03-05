<script>
  import { fade } from "svelte/transition";
  let { file = $bindable() } = $props();
</script>

{#if file && file.name}
  <section transition:fade={{ duration: 500 }}>
    <img src={URL.createObjectURL(file)} alt="product" />
  </section>
{/if}

<style>
  img {
    width: 160px;
    box-shadow: 0 0 10px gray;
    aspect-ratio: 3/4;
  }

  section {
    margin: 30px 0;
    display: flex;
    gap: 25px;
  }
</style>
