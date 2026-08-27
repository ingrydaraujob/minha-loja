import "./style.css";

import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { ProductFilters } from "./components/ProductFilters";

import type { Product } from "./types/Product";

import { getProducts } from "./services/productService";

import {
  addToCart,
  getCart,
  getCartTotal,
  removeFromCart,
  updateQuantity,
} from "./services/cartService";

let products: Product[] = [];

const appElement =
  document.querySelector<HTMLDivElement>("#app");

if (!appElement) {
  throw new Error("Elemento #app não encontrado.");
}

const app = appElement;

function renderApp(): void {
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

          ${ProductFilters()}

          <div
            id="products-grid"
            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            ${productCards}
          </div>

        </div>
      </section>

    </main>

    <div id="cart-container"></div>
  `;

  setupEvents();
}

function renderProducts(filteredProducts: Product[]): void {
  const productsGrid =
    document.querySelector<HTMLDivElement>("#products-grid");

  if (!productsGrid) {
    return;
  }

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <p class="col-span-full py-10 text-center text-gray-500">
        Nenhuma planta encontrada.
      </p>
    `;

    return;
  }

  productsGrid.innerHTML = filteredProducts
    .map((product) => ProductCard(product))
    .join("");

  setupAddToCartEvents();
}

function setupAddToCartEvents(): void {
  const addButtons =
    document.querySelectorAll<HTMLButtonElement>(".add-to-cart");

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);

      const product = products.find(
        (product) => product.id === productId
      );

      if (!product) {
        return;
      }

      addToCart(product);

      renderCart();
    });
  });
}

function setupEvents(): void {
  setupAddToCartEvents();

  const searchInput =
    document.querySelector<HTMLInputElement>("#product-search");

  const categoryFilter =
    document.querySelector<HTMLSelectElement>("#category-filter");

  function applyFilters(): void {
    const searchTerm =
      searchInput?.value.toLowerCase().trim() ?? "";

    const selectedCategory =
      categoryFilter?.value ?? "all";

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm);

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    renderProducts(filteredProducts);
  }

  searchInput?.addEventListener(
    "input",
    applyFilters
  );

  categoryFilter?.addEventListener(
    "change",
    applyFilters
  );

  const cartButton =
    document.querySelector<HTMLButtonElement>("#cart-button");

  cartButton?.addEventListener("click", () => {
    renderCart();
  });
}

function renderCart(): void {
  const cartContainer =
    document.querySelector<HTMLDivElement>("#cart-container");

  if (!cartContainer) {
    return;
  }

  const items = getCart();
  const total = getCartTotal();

  cartContainer.innerHTML = Cart(items, total);

  const closeButton =
    document.querySelector<HTMLButtonElement>("#close-cart");

  closeButton?.addEventListener("click", () => {
    cartContainer.innerHTML = "";
  });

  const cartActionButtons =
    document.querySelectorAll<HTMLButtonElement>(".cart-action");

  cartActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);

      const action = button.dataset.action;

      const item = getCart().find(
        (item) => item.product.id === productId
      );

      if (!item) {
        return;
      }

      if (action === "increase") {
        updateQuantity(
          productId,
          item.quantity + 1
        );
      }

      if (action === "decrease") {
        updateQuantity(
          productId,
          item.quantity - 1
        );
      }

      renderCart();
    });
  });

  const removeButtons =
    document.querySelectorAll<HTMLButtonElement>(
      ".remove-from-cart"
    );

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId =
        Number(button.dataset.productId);

      removeFromCart(productId);

      renderCart();
    });
  });
}

async function init(): Promise<void> {
  try {
    products = await getProducts();

    renderApp();
  } catch (error) {
    console.error(error);

    app.innerHTML = `
      <main class="flex min-h-screen items-center justify-center bg-green-50 px-6">

        <div class="text-center">

          <h1 class="text-2xl font-bold text-red-700">
            Não foi possível carregar a loja.
          </h1>

          <p class="mt-3 text-gray-600">
            Tente novamente em alguns instantes.
          </p>

        </div>

      </main>
    `;
  }
}

init();