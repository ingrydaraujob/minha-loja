import "./style.css";

import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { products } from "./data/products";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

//array de Product (a lista de objeto ) que é mapeado para criar os cards dos produtos
const productCards = products
  .map((product) => ProductCard(product))
  .join("");

app.innerHTML = `
  ${Header()}

  <main id="inicio" class="min-h-screen bg-green-50">

    <section class="mx-auto max-w-7xl px-6 py-20 text-center">

      <span class="text-sm font-semibold uppercase tracking-widest text-green-600">
        VERDEZA
      </span>

      <h1 class="mt-4 text-4xl font-bold tracking-tight text-green-900 md:text-5xl">
        Sua casa mais verde começa aqui.
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-700">
        Encontre plantas, vasos e acessórios para transformar
        seus ambientes em espaços mais vivos.
      </p>

      <a
        href="#plantas"
        class="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
      >
        Explorar plantas
      </a>

    </section>

    <section
      id="plantas"
      class="bg-white px-6 py-20"
    >

      <div class="mx-auto max-w-7xl">

        <div class="mb-10">
          <span class="text-sm font-semibold uppercase tracking-widest text-green-600">
            Nossa coleção
          </span>

          <h2 class="mt-2 text-3xl font-bold text-gray-900">
            Plantas para o seu espaço
          </h2>

          <p class="mt-3 max-w-2xl text-gray-600">
            Escolha suas plantas favoritas e transforme sua casa
            em um ambiente mais acolhedor.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${productCards}
        </div>

      </div>

    </section>

  </main>
`;