<script>
  import { Link } from "svelte-routing";
  import "../assets/style/menu.scss";
  let menuStatus = $state(true);
  function menuClose() {
    menuStatus = false;
  }
</script>

<section
  class="menu-container"
  role="navigation"
  onmouseleave={menuClose}
  onmouseenter={() => (menuStatus = true)}
>
  <div class="close">
    <button onclick={() => (menuStatus = !menuStatus)}
      >{menuStatus ? "X" : String.fromCharCode(8594)}
    </button>
  </div>
  {#if menuStatus}
    <div class="menu">
      <h5>Menu</h5>
      <nav>
        <ul>
          <li>
            <Link to="/" let:active
              ><span class={active ? "active" : ""}>Home</span></Link
            >
          </li>
          <li>
            <Link to="/orders" let:active
              ><span class={active ? "active" : ""}>orders</span></Link
            >
          </li>
          <li>
            <Link to="/clientlist" let:active
              ><span class={active ? "active" : ""}>client list</span></Link
            >
          </li>
          <li class="product">
            <span>product</span>
            <ul>
              <li>
                <Link to="/product/add" let:active
                  ><span class={active ? "active" : ""}>add</span></Link
                >
              </li>
              <li>
                <Link to="/product/edit" let:active
                  ><span class={active ? "active" : ""}>edit</span></Link
                >
              </li>
            </ul>
          </li>
          <li>
            <Link to="/delivery" let:active
              ><span class={active ? "active" : ""}>delivery</span></Link
            >
          </li>
          <li>
            <Link to="/analitics" let:active
              ><span class={active ? "active" : ""}>analitics</span></Link
            >
          </li>
          <li>
            <Link to="/signout" let:active
              ><span class={active ? "active" : ""}>sign out</span></Link
            >
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</section>
