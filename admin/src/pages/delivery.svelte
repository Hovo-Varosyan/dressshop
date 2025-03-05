<script>
  import Textedidor from "../components/textedidor.svelte";
  import Button from "../components/ui/button.svelte";
  import "../assets/style/delivery.scss";
  import api from "../middleware/api";
  let value = $state("");
  let inst=$state()
  $inspect(value);
  function submit() {
    api
      .get("https://www.instagram.com/kk/")
      .then(() => {})
      .catch((err) => console.log(err));
  }
  submit()
</script>

<section class="delivery">
  <h2>Delivery</h2>
  <div><Textedidor {value}  media={true}/></div>
  <div class="btn-container">
    <Button
      text="save"
      func={() => {
        console.log(1);
      }}
    />
  </div>
  {inst}
</section>
