// Interface do carrinho

import type { CartItem } from "../types/CartItem";

export function Cart(
  items: CartItem[],
  total: number
): string {
  return `
    <aside
      id="cart"
      class="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl"
    >
      <div class="flex items-center justify-between border-b p-5">
        <h2 class="text-xl font-bold text-gray-900">
          Seu carrinho
        </h2>

        <button
          id="close-cart"
          type="button"
          class="text-gray-500 transition hover:text-gray-900"
        >
          ✕
        </button>
      </div>

      <div class="flex h-[calc(100%-140px)] flex-col overflow-y-auto p-5">
        ${
          items.length === 0
            ? `
              <p class="text-center text-gray-500">
                Seu carrinho está vazio.
              </p>
            `
            : items
                .map(
                  (item) => `
                    <div class="border-b py-5">

                      <div class="flex items-start justify-between gap-4">

                        <div>
                          <h3 class="font-semibold text-gray-900">
                            ${item.product.name}
                          </h3>

                          <p class="mt-1 text-sm text-gray-500">
                            R$ ${item.product.price
                              .toFixed(2)
                              .replace(".", ",")} cada
                          </p>
                        </div>

                        <strong class="text-green-800">
                          R$ ${(item.product.price * item.quantity)
                            .toFixed(2)
                            .replace(".", ",")}
                        </strong>

                      </div>

                      <div class="mt-4 flex items-center justify-between">

                        <div class="flex items-center gap-3">

                          <button
                            type="button"
                            data-product-id="${item.product.id}"
                            data-action="decrease"
                            class="cart-action flex h-8 w-8 items-center justify-center rounded-md border border-gray-300"
                          >
                            -
                          </button>

                          <span class="min-w-6 text-center font-semibold">
                            ${item.quantity}
                          </span>

                          <button
                            type="button"
                            data-product-id="${item.product.id}"
                            data-action="increase"
                            class="cart-action flex h-8 w-8 items-center justify-center rounded-md border border-gray-300"
                          >
                            +
                          </button>

                        </div>

                        <button
                          type="button"
                          data-product-id="${item.product.id}"
                          class="remove-from-cart text-sm font-medium text-red-600 hover:text-red-800"
                        >
                          Remover
                        </button>

                      </div>

                    </div>
                  `
                )
                .join("")
        }
      </div>

      <div class="absolute bottom-0 left-0 right-0 border-t bg-white p-5">

        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">
            Total
          </span>

          <strong class="text-xl text-green-800">
            R$ ${total.toFixed(2).replace(".", ",")}
          </strong>
        </div>

        <button
  id="checkout-button"
  type="button"
  ${items.length === 0 ? "disabled" : ""}
  class="mt-5 w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
>
  Finalizar compra
</button>

      </div>
    </aside>
  `;
}