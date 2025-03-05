<script>
    let { data = $bindable() } = $props();
    let sizeArray = ["xss", "xs", "s", "m", "l", "xl", "xxl"];
</script>

<div>
    {#each sizeArray as item, i}
        <label>
            <input type="checkbox" value={item} bind:group={data} />{item}
        </label>
    {/each}
</div>

<style>
    div {
        margin: 10px 0;
        display: flex;
        gap: 15px;
    }
    input {
        display: inline-block;
    }
    label {
        text-transform: uppercase;
    }
</style>
