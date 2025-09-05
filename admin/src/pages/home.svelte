<script>
  import { Route } from "svelte-routing";
  import HomeSlide from "../components/home/homeSlide.svelte";
  import TextOne from "../components/home/textOne.svelte";
  import TextTwo from "../components/home/textTwo.svelte";
</script>

<Route path="/home/slide"><HomeSlide /></Route>
<Route path="/home/textone"><TextOne/></Route>
<Route path="/home/texttwo"><TextTwo/></Route>