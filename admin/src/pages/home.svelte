<script>
  import { Route } from "svelte-routing";
  import HomeSlide from "../components/home/homeSlide.svelte";
  import TextTwo from "../components/home/textTwo.svelte";
  import Text from "../components/home/text.svelte";
</script>

<Route path="/home/slide"><HomeSlide /></Route>
<Route path="/home/textone"><Text api="/admin/home/text/textOne" /></Route>
<Route path="/home/texttwo"><TextTwo /></Route>
<Route path="/home/textthree"><Text api="/admin/home/text/textThre" /></Route>
