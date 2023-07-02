<script lang="ts">
  import welcome from '$lib/images/svelte-welcome.webp';
  import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Login from '../components/Login.svelte';
  import PizzasBoard from '../components/PizzasBoard.svelte';

  export let data;
  const dataValue = data.body;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
  <!-- <Login /> -->
  <PizzasBoard data={dataValue} />
</section>

<style>
</style>
