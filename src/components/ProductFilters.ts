export function ProductFilters(): string {
  return `
    <div
      class="mb-10 grid gap-4 rounded-3xl border border-green-100 bg-green-50/60 p-5 shadow-sm md:grid-cols-[1fr_260px]"
    >

      <div>
        <label
          for="product-search"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          Buscar plantas
        </label>

        <div class="relative">
          <span
            class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            🔎
          </span>

          <input
            id="product-search"
            type="search"
            placeholder="Ex.: Jiboia, Maranta..."
            class="w-full rounded-2xl border border-green-100 bg-white py-3 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>
      </div>

      <div>
        <label
          for="category-filter"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          Categoria
        </label>

        <select
          id="category-filter"
          class="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
        >
          <option value="all">
            Todas as categorias
          </option>

          <option value="Interior">
            Interior
          </option>

          <option value="Tropical">
            Tropical
          </option>

          <option value="Compacta">
            Compacta
          </option>
        </select>
      </div>

    </div>
  `;
}