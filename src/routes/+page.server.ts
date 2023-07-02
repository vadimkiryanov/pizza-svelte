import { pagePizzaStore } from './../store/pizzas/index';
import type { IPizzasStore } from './../store/pizzas/types';

let page: number;
pagePizzaStore.subscribe((value) => {
  page = value;
  console.log({ page });
});

export async function load() {
  const response = await fetch(`https://d007d5eef0542fa2.mokky.ru/pizzas?page=${page}&limit=4`);
  const data: IPizzasStore = await response.json();
  return { body: data };
}
