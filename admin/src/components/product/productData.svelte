<script>
    import Size from "./size.svelte";
    let { data = $bindable() } = $props();
</script>

<div class="product_data flex">
    <label class="material">
        <p>material</p>
        <span
            >* Enter materials separated by commas - cotton, polyester, ...</span
        >
        <input
            type="text"
            placeholder="Enter materials separated by commas - cotton, polyester, ..."
            bind:value={data.material}
            required
        /></label
    >

    <select name="category" bind:value={data.category} required>
        <option value="" selected disabled> category</option>
        <option value="ցoats">Coats</option>
        <option value="հats">Hats</option>
        <option value="dresses">Dresses</option>
        <option value="wedding_dresses">wedding dresses </option>
        <option value="trousers">trousers</option>
        <option value="sweaters">sweaters</option>
        <option value="bags">bags</option>
        <option value="suits">suits</option>
    </select>
    <Size bind:data={data.size} />
</div>
