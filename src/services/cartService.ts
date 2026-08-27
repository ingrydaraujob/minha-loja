//regras do carrinho (add, remover, alterar quant, limpar)(funcionameto do carrinho)
import type { CartItem } from "../types/CartItem";

const CART_STORAGE_KEY = "verdeza-cart";

function loadCart(): CartItem[] {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) {
    return [];
  }

  try {
    return JSON.parse(storedCart) as CartItem[];
  } catch {
    return [];
  }
}

let cart: CartItem[] = loadCart();

function saveCart(): void {
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart)
  );
}

export function addToCart(
  product: CartItem["product"]
): void {
  const existingItem = cart.find(
    (item) => item.product.id === product.id
  );

  if (existingItem) {
    if (existingItem.quantity >= product.stock) {
      return;
    }

    existingItem.quantity += 1;

    saveCart();

    return;
  }

  cart.push({
    product,
    quantity: 1,
  });

  saveCart();
}

export function getCart(): CartItem[] {
  return cart;
}

export function removeFromCart(
  productId: number
): void {
  cart = cart.filter(
    (item) => item.product.id !== productId
  );

  saveCart();
}

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

  saveCart();
}

export function getCartTotal(): number {
  return cart.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );
}

//sona qunt itens
export function getCartItemCount(): number {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}