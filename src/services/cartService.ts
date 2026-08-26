//regras do carrinho (add, remover, alterar quant, limpar)(funcionameto do carrinho)
import type { CartItem } from "../types/CartItem";

let cart: CartItem[] = [];

export function addToCart(product: CartItem["product"]): void {
  const existingItem = cart.find(
    (item) => item.product.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
    return;
  }

  cart.push({
    product,
    quantity: 1,
  });
}


export function getCart(): CartItem[] {
  return cart;
}

export function removeFromCart(productId: number): void {
  cart = cart.filter(
    (item) => item.product.id !== productId
  );
}