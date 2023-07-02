<script lang="ts">
  import CardPizza from './CardPizza.svelte';

  export let data: any[];
  console.log({ data });
</script>

<div class="grid grid-cols-4 auto-rows-max gap-10 p-10">
  {#each data as pizza, i (i)}
    <div class="col-span-4 lg:col-span-2 xl:col-span-1">
      <div class="card max-w-xl bg-base-100 shadow-xl">
        <figure><img src="https://cdn.aniagotuje.com/pictures/articles/2022/08/31553217-v-1500x1500.jpg" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{pizza.title}</h2>
          <p>{pizza.rating}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
