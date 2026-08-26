import type { Product } from "../types/Product"; //importação do tipo Product 

//função que recebe um objeto do tipo Product e retorna uma string com o HTML do card do produto
export function ProductCard(product: Product): string {
  return `
    <article
      class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-green-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src="${product.image}"
        alt="${product.name}"
        class="h-64 w-full object-cover"
      />

      <div class="p-5">
        <span class="text-sm font-medium text-green-600">
          ${product.category}
        </span>

        <h3 class="mt-2 text-xl font-bold text-gray-900">
          ${product.name}
        </h3>

        <p class="mt-2 text-sm leading-6 text-gray-600">
          ${product.description}
        </p>

        <div class="mt-5 flex items-center justify-between">
          <strong class="text-xl font-bold text-green-800">
            R$ ${product.price.toFixed(2).replace(".", ",")}
          </strong>

          <button
            type="button"
            data-product-id="${product.id}"
            class="add-to-cart rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  `;
}