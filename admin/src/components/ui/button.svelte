<script>
  import { Loading } from "carbon-components-svelte";

  const {
    text = "save",
    func,
    type = "button",
    disabled = false,
    loading = false,
  } = $props();
</script>

<button onclick={func}  {type} {disabled}
  >{text}
  {#if loading}
    <Loading withOverlay={false} small />{/if}</button
>

<style>
  button {
    display: flex;
    gap: 10px;
    position: relative;
    background: transparent;
    border: 2px solid var(--my-green);
    border-radius: 100px;
    color: var(--my-green);
    overflow: hidden;
    padding: 10px 25px;
  }
  button:disabled {
    background-color: var(--disabled-color);
    border-color: var(--btn-disabled);
    color: var(--btn-disabled);
  }
  button::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    z-index: -1;
  }

  button:hover {
    color: white !important;
  }

  button:hover::after {
    background-color: var(--my-green);
    animation: btn-width 0.2s linear forwards;
  }
  @keyframes btn-width {
    100% {
      width: 100%;
    }
  }
</style>
