export async function load() {
  const response = await fetch('https://d007d5eef0542fa2.mokky.ru/pizzas');
  const data = await response.json();

  return { body: data };
}
