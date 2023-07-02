import { writable } from 'svelte/store';
import type { IPizzasStore } from './types';

export const pizzas = writable<IPizzasStore[]>([]);
export const pagePizzaStore = writable<number>(1);

