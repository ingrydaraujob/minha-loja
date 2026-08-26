//cabeçalho / header 
export function Header(): string {
  return `
    <header class="border-b border-green-100 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="/" class="text-2xl font-bold text-green-800">
          VERDEZA
        </a>

        <nav>
          <ul class="flex items-center gap-6">
            <li>
              <a
                href="#inicio"
                class="text-sm font-medium text-gray-700 transition hover:text-green-700"
              >
                Início
              </a>
            </li>

            <li>
              <a
                href="#plantas"
                class="text-sm font-medium text-gray-700 transition hover:text-green-700"
              >
                Plantas
              </a>
            </li>

            <li>
              <a
                href="#sobre"
                class="text-sm font-medium text-gray-700 transition hover:text-green-700"
              >
                Sobre nós
              </a>
            </li>
          </ul>
        </nav>

        <button
          id="cart-button"
          type="button"
          class="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Carrinho
        </button>

      </div>
    </header>
  `;
}