// Interface do carrinho

import type { CartItem } from "../types/CartItem";

export function Cart(
  items: CartItem[],
  total: number
): string {
  return `
    <aside
      id="cart"
      class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
    >
      <div
        class="flex items-center justify-between border-b border-green-100 px-6 py-5"
      >
        <div>
          <p
            class="text-xs font-semibold uppercase tracking-widest text-green-600"
          >
            VERDEZA
          </p>

          <h2
            class="mt-1 text-2xl font-bold text-green-950"
          >
            Seu carrinho
          </h2>
        </div>

        <button
          id="close-cart"
          type="button"
          aria-label="Fechar carrinho"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-lg text-green-800 transition hover:bg-green-100"
        >
          ✕
        </button>
      </div>

      <div
        class="flex-1 overflow-y-auto px-6 py-4"
      >
        ${
          items.length === 0
            ? `
              <div
                class="flex h-full flex-col items-center justify-center text-center"
              >
                <div
                  class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl"
                >
                  🛒
                </div>

                <h3
                  class="mt-5 text-lg font-bold text-gray-900"
                >
                  Seu carrinho está vazio
                </h3>

                <p
                  class="mt-2 max-w-xs text-sm leading-6 text-gray-500"
                >
                  Escolha suas plantas favoritas e elas aparecerão aqui.
                </p>
              </div>
            `
            : items
                .map(
                  (item) => `
                    <article
                      class="border-b border-gray-100 py-5"
                    >
                      <div
                        class="flex gap-4"
                      >
                        <img
                          src="${item.product.image}"
                          alt="${item.product.name}"
                          class="h-20 w-20 rounded-2xl object-cover"
                        />

                        <div class="min-w-0 flex-1">

                          <div
                            class="flex items-start justify-between gap-3"
                          >
                            <div>
                              <h3
                                class="font-bold text-gray-900"
                              >
                                ${item.product.name}
                              </h3>

                              <p
                                class="mt-1 text-sm text-gray-500"
                              >
                                R$ ${item.product.price
                                  .toFixed(2)
                                  .replace(".", ",")} cada
                              </p>
                            </div>

                            <strong
                              class="whitespace-nowrap text-green-800"
                            >
                              R$ ${(
                                item.product.price *
                                item.quantity
                              )
                                .toFixed(2)
                                .replace(".", ",")}
                            </strong>
                          </div>

                          <div
                            class="mt-4 flex items-center justify-between"
                          >
                            <div
                              class="flex items-center rounded-full border border-green-100 bg-green-50 p-1"
                            >
                              <button
                                type="button"
                                data-product-id="${item.product.id}"
                                data-action="decrease"
                                class="cart-action flex h-8 w-8 items-center justify-center rounded-full text-green-800 transition hover:bg-white"
                                aria-label="Diminuir quantidade"
                              >
                                −
                              </button>

                              <span
                                class="min-w-8 text-center text-sm font-bold text-gray-900"
                              >
                                ${item.quantity}
                              </span>

                              <button
                                type="button"
                                data-product-id="${item.product.id}"
                                data-action="increase"
                                class="cart-action flex h-8 w-8 items-center justify-center rounded-full text-green-800 transition hover:bg-white"
                                aria-label="Aumentar quantidade"
                              >
                                +
                              </button>
                            </div>

                            <button
                              type="button"
                              data-product-id="${item.product.id}"
                              class="remove-from-cart text-sm font-semibold text-red-500 transition hover:text-red-700"
                            >
                              Remover
                            </button>
                          </div>

                        </div>
                      </div>
                    </article>
                  `
                )
                .join("")
        }
      </div>

      <div
        class="border-t border-green-100 bg-white px-6 py-5"
      >
        <div
          class="flex items-center justify-between"
        >
          <span
            class="text-sm font-medium text-gray-600"
          >
            Total
          </span>

          <strong
            class="text-2xl font-bold text-green-900"
          >
            R$ ${total.toFixed(2).replace(".", ",")}
          </strong>
        </div>

        <button
          id="checkout-button"
          type="button"
          ${items.length === 0 ? "disabled" : ""}
          class="mt-5 w-full rounded-full bg-green-800 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-900 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Finalizar compra
        </button>

        <p
          class="mt-3 text-center text-xs text-gray-400"
        >
          Checkout demonstrativo para fins de projeto.
        </p>
      </div>
    </aside>
  `;
}