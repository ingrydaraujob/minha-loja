//interface de checkout de compras 
import type { CartItem } from "../types/CartItem";

export function Checkout(
  items: CartItem[],
  total: number
): string {
  const orderItems = items
    .map(
      (item) => `
        <div
          class="flex items-center gap-4 border-b border-green-100 py-4"
        >
          <img
            src="${item.product.image}"
            alt="${item.product.name}"
            class="h-16 w-16 rounded-2xl object-cover"
          />

          <div class="min-w-0 flex-1">
            <p class="font-bold text-gray-900">
              ${item.product.name}
            </p>

            <p class="mt-1 text-sm text-gray-500">
              ${item.quantity} unidade(s)
            </p>
          </div>

          <strong class="whitespace-nowrap text-green-900">
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
      class="fixed inset-0 z-60 overflow-y-auto bg-green-950/60 px-4 py-8 backdrop-blur-sm"
    >
      <div
        class="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
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
              Finalizar compra
            </h2>
          </div>

          <button
            id="close-checkout"
            type="button"
            aria-label="Fechar checkout"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-lg text-green-800 transition hover:bg-green-100"
          >
            ✕
          </button>
        </div>

        <div
          class="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr]"
        >

          <form id="checkout-form">

            <div>
              <span
                class="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
              >
                1. Seus dados
              </span>

              <h3
                class="mt-3 text-xl font-bold text-gray-900"
              >
                Informações do cliente
              </h3>
            </div>

            <div class="mt-6">
              <label
                for="customer-name"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Nome completo
              </label>

              <input
                id="customer-name"
                name="name"
                type="text"
                required
                placeholder="Digite seu nome"
                class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div class="mt-4">
              <label
                for="customer-email"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                E-mail
              </label>

              <input
                id="customer-email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div class="mt-8">
              <span
                class="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
              >
                2. Pagamento
              </span>

              <h3
                class="mt-3 text-xl font-bold text-gray-900"
              >
                Escolha a forma de pagamento
              </h3>
            </div>

            <div class="mt-5 space-y-3">

              <label
                class="flex cursor-pointer items-center gap-3 rounded-2xl border border-green-100 p-4 transition hover:bg-green-50"
              >
                <input
                  type="radio"
                  name="payment-method"
                  value="pix"
                  checked
                  class="accent-green-700"
                />

                <div>
                  <span class="font-semibold text-gray-900">
                    PIX
                  </span>

                  <p class="mt-1 text-sm text-gray-500">
                    Pagamento instantâneo demonstrativo.
                  </p>
                </div>
              </label>

              <label
                class="flex cursor-pointer items-center gap-3 rounded-2xl border border-green-100 p-4 transition hover:bg-green-50"
              >
                <input
                  type="radio"
                  name="payment-method"
                  value="card"
                  class="accent-green-700"
                />

                <div>
                  <span class="font-semibold text-gray-900">
                    Cartão
                  </span>

                  <p class="mt-1 text-sm text-gray-500">
                    Fluxo fictício para demonstração do checkout.
                  </p>
                </div>
              </label>

            </div>

            <div
              id="card-fields"
              class="mt-5 hidden rounded-3xl border border-green-100 bg-green-50/60 p-5"
            >
              <p
                class="mb-4 font-bold text-gray-900"
              >
                Dados do cartão
              </p>

              <div>
                <label
                  for="card-number"
                  class="mb-2 block text-sm font-semibold text-gray-700"
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
                  class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div class="mt-4">
                <label
                  for="card-name"
                  class="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Nome impresso no cartão
                </label>

                <input
                  id="card-name"
                  name="card-name"
                  type="text"
                  placeholder="NOME SOBRENOME"
                  autocomplete="off"
                  class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div class="mt-4 grid grid-cols-2 gap-4">

                <div>
                  <label
                    for="card-expiry"
                    class="mb-2 block text-sm font-semibold text-gray-700"
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
                    class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    for="card-cvv"
                    class="mb-2 block text-sm font-semibold text-gray-700"
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
                    class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  />
                </div>

              </div>
            </div>

            

            <button
              type="submit"
              class="mt-6 w-full rounded-full bg-green-800 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-900"
            >
              Confirmar pagamento
            </button>

          </form>

          <aside
            class="h-fit rounded-3xl bg-green-50 p-6"
          >
            <span
              class="text-xs font-semibold uppercase tracking-widest text-green-600"
            >
              Resumo
            </span>

            <h3
              class="mt-2 text-xl font-bold text-green-950"
            >
              Seu pedido
            </h3>

            <div class="mt-4">
              ${orderItems}
            </div>

            <div
              class="mt-6 flex items-center justify-between border-t border-green-200 pt-5"
            >
              <span
                class="font-semibold text-gray-700"
              >
                Total
              </span>

              <strong
                class="text-2xl font-bold text-green-900"
              >
                R$ ${total.toFixed(2).replace(".", ",")}
              </strong>
            </div>

           

          </aside>

        </div>
      </div>
    </div>
  `;
}