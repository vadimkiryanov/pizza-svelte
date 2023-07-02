export interface IPizzaItems {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;

  status: string;
}

type TPizzaMeta = {
  current_page: number;
  per_page: number;
  remaining_count: number;
  total_items: number;
  total_pages: number;
};

export interface IPizzasStore {
  items: IPizzaItems[];
  meta?: TPizzaMeta;
  status?: 'loading' | 'success';
}
