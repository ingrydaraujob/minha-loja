# 🌿 VERDEZA

E-commerce demonstrativo de plantas desenvolvido com TypeScript, Vite e Tailwind CSS.

O projeto foi criado com foco em organização de código, responsividade, experiência do usuário, acessibilidade e funcionamento de ponta a ponta.

## Projeto online

Acesse a aplicação publicada:

https://minha-loja-snowy.vercel.app/

Página “Como fiz”:

https://minha-loja-snowy.vercel.app/como-fiz

---

##  Funcionalidades

- Catálogo de plantas carregado por `products.json`
- Consumo dos produtos utilizando `fetch`
- Busca por nome
- Filtro por categoria
- Carrinho de compras
- Controle de quantidade
- Remoção de produtos do carrinho
- Controle de estoque
- Cálculo automático do total
- Contador de itens no cabeçalho
- Persistência do carrinho com `localStorage`
- Checkout demonstrativo
- Opções de pagamento por PIX e cartão
- Validação dos campos do cartão
- Confirmação de compra
- Layout responsivo para desktop e mobile
- Página `/como-fiz` com documentação do projeto
- Deploy automatizado na Vercel

---

## Tecnologias utilizadas

### TypeScript

Utilizado para adicionar tipagem estática ao projeto, tornando os dados e funções mais previsíveis e ajudando a identificar erros durante o desenvolvimento.

### Vite

Utilizado como ambiente de desenvolvimento e ferramenta de build da aplicação.

O Vite fornece um servidor de desenvolvimento rápido e gera os arquivos otimizados utilizados no deploy.

### Tailwind CSS

Utilizado na construção da interface e da responsividade através de classes utilitárias.

### HTML

Utilizado como estrutura base da aplicação.

### Fetch API

Responsável por carregar o catálogo de produtos armazenado em `products.json`.

### LocalStorage

Utilizado para persistir os itens do carrinho mesmo quando a página é atualizada.

### Git e GitHub

Utilizados para controle de versão e armazenamento do repositório.

### Vercel

Utilizada para realizar o deploy da aplicação e disponibilizar o projeto publicamente.

---

##  Estrutura do projeto

```text
minha-loja/
├── public/
│   ├── plants/
│   ├── favicon.svg
│   ├── products.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Cart.ts
│   │   ├── Checkout.ts
│   │   ├── Header.ts
│   │   ├── HowIMade.ts
│   │   ├── ProductCard.ts
│   │   └── ProductFilters.ts
│   │
│   ├── services/
│   │   ├── cartService.ts
│   │   ├── paymentService.ts
│   │   └── productService.ts
│   │
│   ├── types/
│   │   ├── CartItem.ts
│   │   └── Product.ts
│   │
│   ├── main.ts
│   └── style.css
│
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

### Organização da aplicação

O projeto foi organizado buscando separar as diferentes responsabilidades da aplicação.

# components

Contém os componentes responsáveis pela interface.

Exemplos:

- Header.ts: cabeçalho e navegação
- ProductCard.ts: representação visual dos produtos
- ProductFilters.ts: busca e filtro
- Cart.ts: interface do carrinho
- Checkout.ts: interface de finalização da compra
- HowIMade.ts: conteúdo da página sobre o desenvolvimento do projeto


# services

Contém regras e operações separadas da camada visual.

- productService.ts: carregamento do catálogo
- cartService.ts: regras do carrinho
- paymentService.ts: simulação do processamento do pagamento

# types

Contém os tipos utilizados pelo TypeScript.

- Product.ts: estrutura de um produto
- CartItem.ts: estrutura de um item do carrinho
- main.ts

Responsável por integrar os componentes e serviços, controlar os eventos da aplicação e coordenar as renderizações.
