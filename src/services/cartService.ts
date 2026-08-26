//regras do carrinho (add, remover, alterar quant, limpar)(funcionameto do carrinho)
import type { CartItem } from "../types/CartItem";

let cart: CartItem[] = [];

export function addToCart(product: CartItem["product"]): void {
  const existingItem = cart.find(
    (item) => item.product.id === product.id
  );

  if (existingItem) {
  if (existingItem.quantity >= product.stock) {
    return;
  }

  existingItem.quantity += 1;
  return;
}

  cart.push({
    product,
    quantity: 1,
  });
}

//getcart consutar o carrinho 
export function getCart(): CartItem[] {
  return cart;
}

//função remove produto especifico filtrando o id
export function removeFromCart(productId: number): void {
  cart = cart.filter(
    (item) => item.product.id !== productId
  );
}

//altera a quantidade de um produto no carrinho, se a quantidade for 0 remove o produto do carrinho
export function updateQuantity(
  productId: number,
  quantity: number
): void {
  const item = cart.find(
    (item) => item.product.id === productId
  );

  if (!item) {
    return;
  }

  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (quantity > item.product.stock) {
    return;
  }

  item.quantity = quantity;
}

//funçao soma
export function getCartTotal(): number {
  return cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
}