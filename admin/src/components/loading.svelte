<script>
    import { ProgressBar } from "carbon-components-svelte";

    let { loaded = 0, total = 100, status, loading } = $props();
    function getMegabayt(n) {
        return (parseFloat(n) / 1048576).toFixed(2);
    }
</script>

{#if loading}
    <section class="loading">
        <ProgressBar
            status={loaded == total && status !== "error" ? "finished" : status}
            labelText="Upload status"
            helperText={status === "active"
                ? getMegabayt(loaded) + "Mb of " + getMegabayt(total) + "Mb"
                : status === "error"
                  ? "Upload error"
                  : "upload complate"}
            max={total}
            value={loaded}
        />
    </section>
{/if}

<style>
    section {
        width: 100dvh;
        overflow: hidden;
        padding: 40px 0;
    }
</style>
