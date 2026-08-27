import type { CartItem } from "../types/CartItem";

export function Checkout(
  items: CartItem[],
  total: number
): string {
  const orderItems = items
    .map(
      (item) => `
        <div class="flex justify-between border-b border-gray-100 py-3">
          <div>
            <p class="font-medium text-gray-900">
              ${item.product.name}
            </p>

            <p class="text-sm text-gray-500">
              ${item.quantity} unidade(s)
            </p>
          </div>

          <strong class="text-gray-900">
            R$ ${(item.product.price * item.quantity)
              .toFixed(2)
              .replace(".", ",")}
          </strong>
        </div>
      `
    )
    .join("");

  return `
    <div
      id="checkout-overlay"
      class="fixed inset-0 z-60 overflow-y-auto bg-black/50 px-4 py-10"
    >
      <div class="mx-auto max-w-3xl rounded-2xl bg-white shadow-2xl">

        <div class="flex items-center justify-between border-b p-6">
          <div>
            <p class="text-sm font-semibold uppercase tracking-widest text-green-600">
              VERDEZA
            </p>

            <h2 class="mt-1 text-2xl font-bold text-gray-900">
              Finalizar compra
            </h2>
          </div>

          <button
            id="close-checkout"
            type="button"
            class="text-xl text-gray-500 transition hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <div class="grid gap-8 p-6 md:grid-cols-2">

          <form id="checkout-form">

            <h3 class="text-lg font-bold text-gray-900">
              Seus dados
            </h3>

            <div class="mt-5">
              <label
                for="customer-name"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Nome completo
              </label>

              <input
                id="customer-name"
                name="name"
                type="text"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div class="mt-4">
              <label
                for="customer-email"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>

              <input
                id="customer-email"
                name="email"
                type="email"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div class="mt-6">
              <p class="mb-3 text-sm font-medium text-gray-700">
                Forma de pagamento
              </p>

              <label class="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
                <input
                  type="radio"
                  name="payment-method"
                  value="pix"
                  checked
                />

                <span>
                  PIX
                </span>
              </label>

              <label class="mt-3 flex cursor-pointer items-center gap-3 rounded-lg border p-4">
                <input
                  type="radio"
                  name="payment-method"
                  value="card"
                />

                <span>
                  Cartão — demonstração
                </span>
              </label>
            </div>

            <div
              id="card-fields"
              class="mt-5 hidden rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <p class="mb-4 text-sm font-semibold text-gray-800">
                Dados do cartão
              </p>

              <div>
                <label
                  for="card-number"
                  class="mb-2 block text-sm font-medium text-gray-700"
                >
                  Número do cartão
                </label>

                <input
                  id="card-number"
                  name="card-number"
                  type="text"
                  inputmode="numeric"
                  maxlength="19"
                  placeholder="0000 0000 0000 0000"
                  autocomplete="off"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div class="mt-4">
                <label
                  for="card-name"
                  class="mb-2 block text-sm font-medium text-gray-700"
                >
                  Nome impresso no cartão
                </label>

                <input
                  id="card-name"
                  name="card-name"
                  type="text"
                  placeholder="NOME SOBRENOME"
                  autocomplete="off"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div class="mt-4 grid grid-cols-2 gap-4">

                <div>
                  <label
                    for="card-expiry"
                    class="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Validade
                  </label>

                  <input
                    id="card-expiry"
                    name="card-expiry"
                    type="text"
                    inputmode="numeric"
                    maxlength="5"
                    placeholder="MM/AA"
                    autocomplete="off"
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label
                    for="card-cvv"
                    class="mb-2 block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>

                  <input
                    id="card-cvv"
                    name="card-cvv"
                    type="text"
                    inputmode="numeric"
                    maxlength="3"
                    placeholder="123"
                    autocomplete="off"
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

              </div>
            </div>

            <p class="mt-4 text-xs leading-5 text-gray-500">
              Checkout demonstrativo. Não utilize dados reais de cartão.
            </p>

            <button
              type="submit"
              class="mt-6 w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Confirmar pagamento
            </button>

          </form>

          <aside class="rounded-xl bg-green-50 p-5">

            <h3 class="text-lg font-bold text-gray-900">
              Resumo do pedido
            </h3>

            <div class="mt-4">
              ${orderItems}
            </div>

            <div class="mt-5 flex items-center justify-between border-t border-green-200 pt-5">

              <span class="font-semibold text-gray-700">
                Total
              </span>

              <strong class="text-2xl text-green-800">
                R$ ${total.toFixed(2).replace(".", ",")}
              </strong>

            </div>

          </aside>

        </div>

      </div>
    </div>
  `;
}