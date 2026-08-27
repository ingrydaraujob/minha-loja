import "./style.css";

import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { ProductFilters } from "./components/ProductFilters";
import { Checkout } from "./components/Checkout";

import type { Product } from "./types/Product";
import type { PaymentMethod } from "./services/paymentService";

import { getProducts } from "./services/productService";

import {
  processPayment,
} from "./services/paymentService";

import {
  addToCart,
  getCart,
  getCartTotal,
  getCartItemCount,
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

function renderProducts(
  filteredProducts: Product[]
): void {
  const productsGrid =
    document.querySelector<HTMLDivElement>(
      "#products-grid"
    );

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
    document.querySelectorAll<HTMLButtonElement>(
      ".add-to-cart"
    );

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId =
        Number(button.dataset.productId);

      const product = products.find(
        (product) => product.id === productId
      );

      if (!product) {
        return;
      }

      addToCart(product);

      updateCartButton();

      renderCart();
    });
  });
}

function setupEvents(): void {
  setupAddToCartEvents();

  updateCartButton();

  const searchInput =
    document.querySelector<HTMLInputElement>(
      "#product-search"
    );

  const categoryFilter =
    document.querySelector<HTMLSelectElement>(
      "#category-filter"
    );

  function applyFilters(): void {
    const searchTerm =
      searchInput?.value.toLowerCase().trim() ?? "";

    const selectedCategory =
      categoryFilter?.value ?? "all";

    const filteredProducts =
      products.filter((product) => {
        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(searchTerm);

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
    document.querySelector<HTMLButtonElement>(
      "#cart-button"
    );

  cartButton?.addEventListener("click", () => {
    renderCart();
  });
}

function updateCartButton(): void {
  const cartButton =
    document.querySelector<HTMLButtonElement>(
      "#cart-button"
    );

  if (!cartButton) {
    return;
  }

  const itemCount = getCartItemCount();

  cartButton.textContent =
    `Carrinho (${itemCount})`;
}

function renderCart(): void {
  const cartContainer =
    document.querySelector<HTMLDivElement>(
      "#cart-container"
    );

  if (!cartContainer) {
    return;
  }

  const items = getCart();
  const total = getCartTotal();

  cartContainer.innerHTML =
    Cart(items, total);

  const closeButton =
    document.querySelector<HTMLButtonElement>(
      "#close-cart"
    );

  closeButton?.addEventListener("click", () => {
    cartContainer.innerHTML = "";
  });

  const checkoutButton =
    document.querySelector<HTMLButtonElement>(
      "#checkout-button"
    );

  checkoutButton?.addEventListener("click", () => {
    renderCheckout();
  });

  const cartActionButtons =
    document.querySelectorAll<HTMLButtonElement>(
      ".cart-action"
    );

  cartActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId =
        Number(button.dataset.productId);

      const action =
        button.dataset.action;

      const item = getCart().find(
        (item) =>
          item.product.id === productId
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

      updateCartButton();

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

      updateCartButton();

      renderCart();
    });
  });
}

function renderCheckout(): void {
  const cartContainer =
    document.querySelector<HTMLDivElement>(
      "#cart-container"
    );

  if (!cartContainer) {
    return;
  }

  const items = getCart();
  const total = getCartTotal();

  if (items.length === 0) {
    return;
  }

  cartContainer.innerHTML =
    Checkout(items, total);

  const closeCheckoutButton =
    document.querySelector<HTMLButtonElement>(
      "#close-checkout"
    );

  closeCheckoutButton?.addEventListener(
    "click",
    () => {
      renderCart();
    }
  );

  setupCheckoutForm();
}

function setupCheckoutForm(): void {
  const form =
    document.querySelector<HTMLFormElement>(
      "#checkout-form"
    );

  if (!form) {
    return;
  }

  const paymentOptions =
    document.querySelectorAll<HTMLInputElement>(
      'input[name="payment-method"]'
    );

  const cardFields =
    document.querySelector<HTMLDivElement>(
      "#card-fields"
    );

  paymentOptions.forEach((option) => {
    option.addEventListener("change", () => {
      if (!cardFields) {
        return;
      }

      if (
        option.value === "card" &&
        option.checked
      ) {
        cardFields.classList.remove("hidden");
      }

      if (
        option.value === "pix" &&
        option.checked
      ) {
        cardFields.classList.add("hidden");
      }
    });
  });

  form.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      const formData =
        new FormData(form);

      const name =
        String(
          formData.get("name") ?? ""
        ).trim();

      const email =
        String(
          formData.get("email") ?? ""
        ).trim();

      const paymentMethod =
        formData.get(
          "payment-method"
        ) as PaymentMethod;

      if (
        !name ||
        !email ||
        !paymentMethod
      ) {
        alert(
          "Preencha seus dados antes de continuar."
        );

        return;
      }

      if (paymentMethod === "card") {
        const cardNumber =
          String(
            formData.get("card-number") ?? ""
          )
            .replace(/\s/g, "")
            .trim();

        const cardName =
          String(
            formData.get("card-name") ?? ""
          ).trim();

        const cardExpiry =
          String(
            formData.get("card-expiry") ?? ""
          ).trim();

        const cardCvv =
          String(
            formData.get("card-cvv") ?? ""
          ).trim();

        const cardNumberIsValid =
          /^\d{16}$/.test(cardNumber);

        const cardNameIsValid =
          cardName.length >= 3;

        const cardExpiryIsValid =
          /^(0[1-9]|1[0-2])\/\d{2}$/.test(
            cardExpiry
          );

        const cardCvvIsValid =
          /^\d{3}$/.test(cardCvv);

        if (
          !cardNumberIsValid ||
          !cardNameIsValid ||
          !cardExpiryIsValid ||
          !cardCvvIsValid
        ) {
          alert(
            "Preencha corretamente os dados fictícios do cartão."
          );

          return;
        }
      }

      const total =
        getCartTotal();

      await handlePayment(
        name,
        email,
        paymentMethod,
        total
      );
    }
  );
}

async function handlePayment(
  name: string,
  email: string,
  paymentMethod: PaymentMethod,
  total: number
): Promise<void> {
  const cartContainer =
    document.querySelector<HTMLDivElement>(
      "#cart-container"
    );

  if (!cartContainer) {
    return;
  }

  cartContainer.innerHTML = `
    <div
      class="fixed inset-0 z-60 flex items-center justify-center bg-black/50 px-4"
    >
      <div
        class="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
      >

        <p
          class="text-sm font-semibold uppercase tracking-widest text-green-600"
        >
          VERDEZA
        </p>

        <h2
          class="mt-3 text-2xl font-bold text-gray-900"
        >
          Processando pagamento...
        </h2>

        <p class="mt-3 text-gray-600">
          Aguarde enquanto confirmamos sua compra.
        </p>

      </div>
    </div>
  `;

  try {
    const result =
      await processPayment(
        paymentMethod,
        total
      );

    if (!result.success) {
      throw new Error(
        "Pagamento não aprovado."
      );
    }

    renderPaymentSuccess(
      name,
      email,
      result.transactionId,
      total
    );
  } catch (error) {
    console.error(error);

    cartContainer.innerHTML = `
      <div
        class="fixed inset-0 z-60 flex items-center justify-center bg-black/50 px-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
        >

          <h2
            class="text-2xl font-bold text-red-700"
          >
            Não foi possível concluir o pagamento.
          </h2>

          <p class="mt-3 text-gray-600">
            Tente novamente.
          </p>

          <button
            id="back-to-cart"
            type="button"
            class="mt-6 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white"
          >
            Voltar ao carrinho
          </button>

        </div>
      </div>
    `;

    const backButton =
      document.querySelector<HTMLButtonElement>(
        "#back-to-cart"
      );

    backButton?.addEventListener(
      "click",
      () => {
        renderCart();
      }
    );
  }
}

function renderPaymentSuccess(
  name: string,
  email: string,
  transactionId: string,
  total: number
): void {
  const cartContainer =
    document.querySelector<HTMLDivElement>(
      "#cart-container"
    );

  if (!cartContainer) {
    return;
  }

  cartContainer.innerHTML = `
    <div
      class="fixed inset-0 z-60 flex items-center justify-center bg-black/50 px-4"
    >
      <div
        class="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
      >

        <div class="text-center">

          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700"
          >
            ✓
          </div>

          <h2
            class="mt-5 text-2xl font-bold text-gray-900"
          >
            Pagamento aprovado!
          </h2>

          <p class="mt-3 text-gray-600">
            Obrigada pela compra, ${name}.
          </p>

        </div>

        <div
          class="mt-6 rounded-xl bg-green-50 p-5"
        >

          <p class="text-sm text-gray-600">
            E-mail
          </p>

          <p class="font-semibold text-gray-900">
            ${email}
          </p>

          <p class="mt-4 text-sm text-gray-600">
            Total
          </p>

          <p class="font-semibold text-green-800">
            R$ ${total.toFixed(2).replace(".", ",")}
          </p>

          <p class="mt-4 text-sm text-gray-600">
            Transação
          </p>

          <p
            class="break-all font-mono text-sm text-gray-900"
          >
            ${transactionId}
          </p>

        </div>

        <button
          id="finish-order"
          type="button"
          class="mt-6 w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Voltar para a loja
        </button>

      </div>
    </div>
  `;

  const finishButton =
    document.querySelector<HTMLButtonElement>(
      "#finish-order"
    );

  finishButton?.addEventListener(
    "click",
    () => {
      cartContainer.innerHTML = "";
    }
  );
}

async function init(): Promise<void> {
  try {
    products =
      await getProducts();

    renderApp();
  } catch (error) {
    console.error(error);

    app.innerHTML = `
      <main
        class="flex min-h-screen items-center justify-center bg-green-50 px-6"
      >
        <div class="text-center">

          <h1
            class="text-2xl font-bold text-red-700"
          >
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