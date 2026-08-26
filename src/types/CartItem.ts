import type { Product } from "./Product"; // cartitem representa um item no carrinho e add a quant comprada

export type CartItem = {
  product: Product; //produto valido
  quantity: number; //unidades do produto 
};