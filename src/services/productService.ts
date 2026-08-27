import type { Product } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/products.json");

  if (!response.ok) {
    throw new Error("Não foi possível carregar o catálogo.");
  }

  const products: Product[] = await response.json();

  return products;
}