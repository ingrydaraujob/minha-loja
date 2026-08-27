export function ProductFilters(): string {
  return `
    <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-center">

      <div class="flex-1">
        <label
          for="product-search"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          Buscar plantas
        </label>

        <input
          id="product-search"
          type="search"
          placeholder="Ex.: Jiboia, Maranta..."
          class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div class="md:w-64">
        <label
          for="category-filter"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          Categoria
        </label>

        <select
          id="category-filter"
          class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
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