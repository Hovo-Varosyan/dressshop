<script>
    import { InlineNotification } from "carbon-components-svelte";
    import { alertList } from "../../pages/store";
    import "../../assets/style/alert.scss";
    $inspect($alertList);
    $effect(() => {
        if ($alertList.length > 10)
            alertList.update((prev) => {
                prev.shift();
                return prev;
            });
    });
    function removeAlert(id) {
        alertList.update((prev) => prev.filter((item) => item.id !== id));
    }
</script>

{#if $alertList.length > 0}
    <div class="alert--container">
        {#each $alertList as item (item.id)}
            <div class="alert">
                <InlineNotification
                    kind={item.kind}
                    title={item.kind}
                    subtitle={item.subtitle}
                    on:close={(e) => {
                        removeAlert(item.id);
                    }}
                />
            </div>
        {/each}
    </div>
{/if}
