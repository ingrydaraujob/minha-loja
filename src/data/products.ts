//array de Product (a lista de objeto )
import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Jiboia",
    price: 49.9,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    category: "Plantas",
    description: "Planta resistente e ótima para ambientes internos.",
    stock: 10,
  },

  {
    id: 2,
    name: "Espada-de-São-Jorge",
    price: 59.9,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    category: "Plantas",
    description: "Uma planta resistente e de fácil manutenção.",
    stock: 8,
  },

  {
    id: 3,
    name: "Costela-de-Adão",
    price: 89.9,
    image: "https://images.unsplash.com/photo-1614594575890-0f6f3c3c9c7d",
    category: "Plantas",
    description: "Uma planta tropical que traz personalidade ao ambiente.",
    stock: 5,
  },
];