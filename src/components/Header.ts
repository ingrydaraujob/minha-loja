//cabeçalho / header 
export function Header(): string {
  return `
    <header class="sticky top-0 z-40 border-b border-green-100 bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a
          href="#inicio"
          class="flex items-center gap-2"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl">
            🌿
          </span>

          <div>
            <span class="block text-xl font-bold tracking-tight text-green-900">
              VERDEZA
            </span>

            <span class="block text-xs text-green-800">
              plantas para viver melhor
            </span>
          </div>
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center gap-8">
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
    href="/como-fiz"
    class="text-sm font-medium text-gray-700 transition hover:text-green-700"
  >
    Como fiz
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
          class="rounded-full bg-green-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-900"
        >
          Carrinho (0)
        </button>

      </div>
    </header>
  `;
}