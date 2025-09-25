<script>
  import { Link } from "svelte-routing";
  import "../assets/style/menu.scss";
  import clsx from "clsx/lite";
  let menuStatus = $state(true);
</script>

<section
  class="menu-container"
  role="navigation"
  onmouseleave={() => (menuStatus = false)}
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
          <li class="product">
            <span>home</span>
            <ul>
              <li>
                <Link to="/home/slide" let:active
                  ><span class={clsx(active && "active")}>slide</span></Link
                >
              </li>
              <li>
                <Link to="/home/textone" let:active
                  ><span class={clsx(active && "active")}>text 1</span></Link
                >
              </li>
              <li>
                <Link to="/home/texttwo" let:active
                  ><span class={clsx(active && "active")}>text 2</span></Link
                >
              </li>
              <li>
                <Link to="/home/textthree" let:active
                  ><span class={clsx(active && "active")}>text 3</span></Link
                >
              </li>
            </ul>
          </li>
          <li>
            <Link to="/orders" let:active
              ><span class={clsx(active && "active")}>orders</span></Link
            >
          </li>
          <li>
            <Link to="/clientlist" let:active
              ><span class={clsx(active && "active")}>client list</span></Link
            >
          </li>
          <li class="product">
            <span>product</span>
            <ul>
              <li>
                <Link to="/product/add" let:active
                  ><span class={clsx(active && "active")}>add</span></Link
                >
              </li>
              <li>
                <Link to="/product/edit" let:active
                  ><span class={clsx(active && "active")}>edit</span></Link
                >
              </li>
            </ul>
          </li>
          <li>
            <Link to="/delivery" let:active
              ><span class={clsx(active && "active")}>delivery</span></Link
            >
          </li>
          <li>
            <Link to="/analitics" let:active
              ><span class={clsx(active && "active")}>analitics</span></Link
            >
          </li>
          <li>
            <Link to="/signout" let:active
              ><span class={clsx(active && "active")}>sign out</span></Link
            >
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</section>
