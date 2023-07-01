<script lang="ts">
  import CardPizza from './CardPizza.svelte';
</script>

<div class="grid grid-cols-4 auto-rows-max gap-10 p-10">
  {#each [...new Array(6)] as pizza, i (i)}
    <div class="col-span-4 lg:col-span-2 xl:col-span-1"><CardPizza  /></div>
  {/each}
</div>
