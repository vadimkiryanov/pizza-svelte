<script lang="ts">
  import welcome from '$lib/images/svelte-welcome.webp';
  import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Login from '../components/Login.svelte';
  import PizzasBoard from '../components/PizzasBoard.svelte';

  export let data;
  const dataPizzas = data.body.items;
  const meta = data.body.meta;

  let currentPage = 0;

  const setPage = (page: number) => {
    currentPage = page;
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
  <!-- <Login /> -->
  <PizzasBoard data={dataPizzas} />

  <div class="join">
    {#each [...new Array(meta?.total_pages)] as elem, i (i)}
      <button on:click={() => setPage(i)} class={`${currentPage === i ? 'btn-active' : ''} join-item btn`}>{i + 1}</button>
    {/each}
  </div>
</section>

<style>
</style>
