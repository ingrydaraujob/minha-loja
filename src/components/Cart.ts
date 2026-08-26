import type { CartItem } from "../types/CartItem"; //interface do carrinho

export function Cart(items: CartItem[]): string {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

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
          class="text-gray-500 hover:text-gray-900"
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
                    <div class="flex items-center justify-between border-b py-4">

                      <div>
                        <h3 class="font-semibold text-gray-900">
                          ${item.product.name}
                        </h3>

                        <p class="text-sm text-gray-500">
                          ${item.quantity} x
                          R$ ${item.product.price
                            .toFixed(2)
                            .replace(".", ",")}
                        </p>
                      </div>

                      <strong class="text-green-800">
                        R$ ${(item.product.price * item.quantity)
                          .toFixed(2)
                          .replace(".", ",")}
                      </strong>

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

      </div>
    </aside>
  `;
}