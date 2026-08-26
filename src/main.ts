import "./style.css";
import { Header } from "./components/Header";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

app.innerHTML = `
  ${Header()}

  <main id="inicio" class="min-h-screen bg-green-50">
    <section class="mx-auto max-w-7xl px-6 py-20 text-center">

      <h1 class="text-5xl font-bold text-green-800">
        Sua casa mais verde começa aqui.
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-lg text-green-700">
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
  </main>
`;