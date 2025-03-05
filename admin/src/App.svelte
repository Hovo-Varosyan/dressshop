<script>
  import Menu from "./components/menu.svelte";
  import { Router, Route } from "svelte-routing";
  import Deliveri from "./pages/delivery.svelte";
  import Client from "./pages/client.svelte";
  import ProductAdd from "./pages/productAdd.svelte";
  import "carbon-components-svelte/css/all.css";
  import Alert from "./components/ui/alert.svelte";
</script>

<Router url="">
  <section class="global-container">
    <Menu />
    <section class="container">
      <Route path="/product/add"><ProductAdd/></Route>
      <Route path="/delivery"><Deliveri/></Route>
      <Alert />
    </section>
  </section>
</Router>

<style>
  .container {
    flex-grow: 1;
  }
</style>
