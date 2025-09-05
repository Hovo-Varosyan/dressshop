<script>
  import { Route } from "svelte-routing";
  import HomeSlide from "../components/home/homeSlide.svelte";
  import TextOne from "../components/home/textOne.svelte";
</script>

<Route path="/home/slide"><HomeSlide /></Route>
<Route path="/home/textone"><TextOne/></Route>