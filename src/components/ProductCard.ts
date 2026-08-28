//visual dos produtos 
import type { Product } from "../types/Product"; //importação do tipo Product 

//função que recebe um objeto do tipo Product e retorna uma string com o HTML do card do produto
export function ProductCard(product: Product): string {
  return `
    <article
      class="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="relative overflow-hidden bg-green-50">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm backdrop-blur"
        >
          ${product.category}
        </span>

      </div>

      <div class="p-6">

        <h3
          class="text-xl font-bold text-gray-900"
        >
          ${product.name}
        </h3>

        <p
          class="mt-3 min-h-12 text-sm leading-6 text-gray-600"
        >
          ${product.description}
        </p>

        <div
          class="mt-6 flex items-end justify-between gap-4"
        >

          <div>
            <span
              class="block text-xs font-medium uppercase tracking-wider text-gray-600"
            >
              A partir de
            </span>

            <strong
              class="mt-1 block text-2xl font-bold text-green-800"
            >
              R$ ${product.price.toFixed(2).replace(".", ",")}
            </strong>
          </div>

          <button
            type="button"
            data-product-id="${product.id}"
            class="add-to-cart rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-900"
          >
            Adicionar
          </button>

        </div>

        <div
          class="mt-5 flex items-center justify-between border-t border-gray-100 pt-4"
        >
          <span class="text-xs text-gray-500">
            Estoque disponível
          </span>

          <span
            class="text-xs font-semibold text-green-700"
          >
            ${product.stock} unidade(s)
          </span>
        </div>

      </div>
    </article>
  `;
}