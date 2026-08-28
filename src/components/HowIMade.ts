//visual de como foi feito o projeto
export function HowIMade(): string {
  return `
    <section
      id="como-fiz"
      class="bg-green-50 px-6 py-20"
    >
      <div class="mx-auto max-w-7xl">

        <div class="text-center">
          <span
            class="text-sm font-semibold uppercase tracking-widest text-green-600"
          >
            Como foi construído
          </span>

          <h2
            class="mt-3 text-3xl font-bold text-green-950 md:text-4xl"
          >
            Por trás da VERDEZA
          </h2>

          <p
            class="mx-auto mt-4 max-w-2xl text-gray-600"
          >
            Este projeto foi desenvolvido como uma mini-loja de e-commerce,
            com foco em organização de código, experiência do usuário,
            separação de responsabilidades e funcionamento de ponta a ponta.
          </p>
        </div>

        <div
          class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >

          <article
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
          >
            <h3
              class="text-lg font-bold text-green-900"
            >
              TypeScript
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Foi utilizado para adicionar tipagem ao projeto, reduzir erros
              durante o desenvolvimento e deixar os contratos entre dados,
              componentes e serviços mais claros.
            </p>
          </article>

          <article
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
          >
            <h3
              class="text-lg font-bold text-green-900"
            >
              Vite
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Responsável pelo ambiente de desenvolvimento e pelo build
              da aplicação para produção, permitindo uma estrutura simples
              e rápida para o projeto.
            </p>
          </article>

          <article
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
          >
            <h3
              class="text-lg font-bold text-green-900"
            >
              Tailwind CSS
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Utilizado para construir a identidade visual da loja por meio
              de classes utilitárias, facilitando responsividade, consistência
              visual e manutenção dos estilos.
            </p>
          </article>

          <article
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
          >
            <h3
              class="text-lg font-bold text-green-900"
            >
              Catálogo em JSON
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Os produtos ficam separados da interface em um arquivo
              products.json e são carregados com fetch, demonstrando
              um conceito simplificado de headless commerce.
            </p>
          </article>

          <article
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
          >
            <h3
              class="text-lg font-bold text-green-900"
            >
              Carrinho e localStorage
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              O carrinho possui controle de quantidade, remoção de itens,
              cálculo de total e persistência no navegador usando
              localStorage.
            </p>
          </article>

          <article
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
          >
            <h3
              class="text-lg font-bold text-green-900"
            >
              Checkout demonstrativo
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              O fluxo de checkout simula formas de pagamento como PIX e
              cartão, com validação de formulário e confirmação de compra,
              sem processar pagamentos reais.
            </p>
          </article>

        </div>

      </div>
    </section>
  `;
}