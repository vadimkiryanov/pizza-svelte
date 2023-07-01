<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/images/svelte-logo.svg';
  import github from '$lib/images/github.svg';
</script>

<div class="bg-base-200">
  <div class="container mx-auto navbar">
    <div class="flex-1">
      <a href="/" class="text-xl normal-case btn btn-ghost">
        <img class="w-8" src="https://react-market-ashen.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" />

        <span>Pizza Jenkins</span></a
      >
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              /></svg
            >
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <a href="/basket" class="btn btn-primary btn-block">View cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://as2.ftcdn.net/v2/jpg/02/08/98/05/1000_F_208980504_njS12KTuZLQ3wQZaHLbKpSLFNu9rF6Hs.jpg" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a href="/profile" class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!--   <header class="flex items-center justify-center mt-4">
  
  
  
    <nav class="p-4 border rounded-xl">
      <ul class="flex gap-4">
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a href="/">Home</a>
        </li>
        <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
          <a href="/about">About</a>
        </li>
  
        <li aria-current={$page.url.pathname.startsWith('/basket') ? 'page' : undefined}>
          <a href="/basket">basket</a>
        </li>
      </ul>
    </nav>
  </header> -->

<style>
  /*   header {
      display: flex;
      justify-content: space-between;
    }
  
    .corner {
      width: 3em;
      height: 3em;
    }
  
    .corner a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  
    .corner img {
      width: 2em;
      height: 2em;
      object-fit: contain;
    }
  
    nav {
      display: flex;
      justify-content: center;
      --background: rgba(255, 255, 255, 0.7);
    }
  
    svg {
      width: 2em;
      height: 3em;
      display: block;
    }
  
    path {
      fill: var(--background);
    }
  
    ul {
      position: relative;
      padding: 0;
      margin: 0;
      height: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      background: var(--background);
      background-size: contain;
    }
  
    li {
      position: relative;
      height: 100%;
    }
  
    li[aria-current='page']::before {
      --size: 6px;
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: calc(50% - var(--size));
      border: var(--size) solid transparent;
      border-top: var(--size) solid var(--color-theme-1);
    }
  
    nav a {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 0.5rem;
      color: var(--color-text);
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: color 0.2s linear;
    }
  
    a:hover {
      color: var(--color-theme-1);
    } */
</style>
