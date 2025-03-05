<script>
  let { price = $bindable() } = $props();
  $effect(() => {
    price.total = Math.round(price.value - (price.value * price.promition) / 100);
  });


</script>

<div class="price">
  <label>
    price<input type="number" min="1" bind:value={price.value} />
  </label>
  <label
    >promition <input
      type="number"
      min="0"
      bind:value={price.promition}
      disabled={!price.value}
    />
  </label>
  <label
    >totoal price <input
      type="text"
      class="totalprice"
      bind:value={price.total}
      readonly
    /></label
  >
</div>
