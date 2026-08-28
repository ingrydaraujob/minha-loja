# 🌿 VERDEZA

E-commerce demonstrativo de plantas desenvolvido com **TypeScript, Vite e Tailwind CSS**, com foco em organização de código, experiência do usuário, responsividade, acessibilidade e boas práticas de desenvolvimento web.

A proposta da VERDEZA é simular uma loja virtual de plantas, permitindo ao usuário navegar pelo catálogo, pesquisar e filtrar produtos, adicionar itens ao carrinho e realizar um fluxo demonstrativo de checkout.

---

##  Projeto online

A aplicação está publicada na Vercel:

**VERDEZA:**  
https://minha-loja-snowy.vercel.app/

O projeto também possui uma página explicando algumas das decisões utilizadas durante o desenvolvimento:

**Como fiz:**  
https://minha-loja-snowy.vercel.app/como-fiz

---

##  Resultados no Lighthouse

A aplicação foi analisada utilizando o **Google Lighthouse**, ferramenta utilizada para avaliar qualidade, desempenho, acessibilidade e SEO de aplicações web.

Na auditoria mobile, a VERDEZA alcançou:

| Categoria | Pontuação |
|---|---:|
| Desempenho | 99 |
| Acessibilidade | 100 |
| Práticas recomendadas | 100 |
| SEO | 100 |

Entre as métricas observadas no teste:

- First Contentful Paint: **0,9 s**
- Largest Contentful Paint: **1,0 s**
- Total Blocking Time: **0 ms**
- Cumulative Layout Shift: **0**

Durante o desenvolvimento, o Lighthouse também foi utilizado para identificar oportunidades de melhoria.

Foram realizados ajustes relacionados a:

- contraste entre texto e fundo;
- legibilidade;
- idioma da página;
- título da aplicação;
- meta description;
- acessibilidade;
- SEO;
- arquivo `robots.txt`.

Depois dessas melhorias, a aplicação atingiu **100 pontos em Acessibilidade, Práticas Recomendadas e SEO** na auditoria apresentada.

> As pontuações de desempenho do Lighthouse podem variar de acordo com dispositivo, ambiente, conexão e execução do teste.

---

## Funcionalidades

A VERDEZA possui funcionalidades que simulam partes importantes de uma experiência de e-commerce:

-  catálogo de plantas;
-  busca de produtos;
-  filtros de produtos;
-  carrinho de compras;
-  adição de produtos ao carrinho;
-  controle de quantidade;
-  remoção de itens;
-  controle de estoque;
-  cálculo do valor do carrinho;
-  contador de itens no cabeçalho;
-  persistência do carrinho;
-  checkout demonstrativo;
-  interface responsiva;
-  página explicativa "Como fiz";
-  deploy da aplicação na Vercel.

---

#  Tecnologias utilizadas

## TypeScript

O **TypeScript** foi utilizado como principal linguagem de desenvolvimento da aplicação.

Ele adiciona tipagem ao JavaScript, permitindo definir de maneira mais clara quais dados são esperados pelas funções e componentes.

No projeto, por exemplo, foram criados tipos específicos para representar produtos e itens do carrinho.

Isso ajuda a:

- reduzir erros;
- melhorar a organização;
- facilitar manutenção;
- melhorar a leitura do código;
- tornar as estruturas de dados mais previsíveis.

---

## Vite

O **Vite** foi utilizado como ferramenta de desenvolvimento e build.

Ele fornece um ambiente rápido para desenvolvimento front-end e também é responsável por gerar a versão otimizada da aplicação utilizada em produção.

Durante o desenvolvimento:

```bash
npm run dev
```

inicia o servidor local.

Para gerar a versão de produção:

```bash
npm run build
```

---

## Tailwind CSS

O **Tailwind CSS** foi utilizado para estilização da interface.

Em vez de concentrar toda a estilização em grandes arquivos CSS, o Tailwind permite utilizar classes utilitárias diretamente nos elementos.

Exemplo:

```html
class="rounded-3xl bg-white shadow-sm"
```

No projeto ele foi utilizado para:

- cores;
- espaçamentos;
- tipografia;
- grids;
- responsividade;
- botões;
- cards;
- bordas;
- sombras;
- estados de hover;
- organização visual da aplicação.

---

## HTML

O HTML fornece a estrutura inicial da aplicação.

O arquivo `index.html` também possui informações importantes para SEO e acessibilidade, como:

```html
<html lang="pt-BR">
```

além de título, viewport e descrição da página.

---

## Fetch API

Os produtos são carregados a partir do arquivo:

```text
public/products.json
```

A aplicação utiliza a **Fetch API** para buscar esses dados.

Isso permite separar os dados dos produtos da interface responsável por apresentá-los.

---

## LocalStorage

O navegador oferece uma API chamada `localStorage`, que permite armazenar pequenas informações localmente.

Ela é utilizada no projeto para ajudar na persistência dos dados do carrinho.

Dessa forma, o estado do carrinho pode permanecer disponível mesmo após uma atualização da página.

---

## Git e GitHub

O **Git** é utilizado para controle de versão.

Com ele é possível registrar a evolução do projeto através de commits.

O **GitHub** é utilizado para armazenar o repositório remotamente e manter o histórico do desenvolvimento disponível.

---

## Vercel

A **Vercel** foi utilizada para publicar a aplicação na internet.

A versão disponível online pode ser acessada em:

https://minha-loja-snowy.vercel.app/

---

#  Estrutura do projeto

A aplicação foi organizada separando componentes, serviços e tipos.

```text
minha-loja/
│
├── public/
│   ├── plants/
│   ├── favicon.svg
│   ├── products.json
│   └── robots.txt
│
├── src/
│   │
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
├── .gitattributes
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

#  Arquitetura e organização

Uma das preocupações durante o desenvolvimento foi evitar colocar toda a aplicação em um único arquivo.

Por isso, o projeto foi dividido em três áreas principais:

```text
components
services
types
```

Cada uma possui uma responsabilidade diferente.

---

##  Components

A pasta:

```text
src/components
```

contém partes responsáveis principalmente pela construção da interface da aplicação.

### `Header.ts`

Responsável pelo cabeçalho da loja.

Ele apresenta informações de navegação e integração visual com o carrinho.

### `ProductCard.ts`

Responsável por gerar a representação visual de cada produto.

O componente recebe um objeto do tipo `Product` e utiliza suas informações para construir o card.

Entre as informações apresentadas estão:

- imagem;
- nome;
- categoria;
- descrição;
- preço;
- estoque;
- botão para adicionar ao carrinho.

### `ProductFilters.ts`

Responsável pela interface relacionada à pesquisa e filtragem dos produtos.

### `Cart.ts`

Responsável pela interface do carrinho de compras.

### `Checkout.ts`

Responsável pela interface utilizada durante o fluxo demonstrativo de finalização da compra.

### `HowIMade.ts`

Responsável pela página que apresenta informações sobre como o projeto foi desenvolvido.

---

#  Services

A pasta:

```text
src/services
```

separa operações e regras da camada responsável pela apresentação visual.

Essa separação ajuda a evitar que toda a lógica da aplicação fique misturada com o HTML.

---

## `productService.ts`

Responsável pelo carregamento dos produtos.

Os dados são obtidos a partir de:

```text
/products.json
```

utilizando `fetch`.

De forma simplificada, o fluxo é:

```text
products.json
      ↓
productService
      ↓
main.ts
      ↓
ProductCard
      ↓
Interface
```

---

## `cartService.ts`

Concentra operações relacionadas ao carrinho.

Isso ajuda a separar regras do carrinho da interface responsável por mostrá-lo.

---

## `paymentService.ts`

Responsável pela parte demonstrativa relacionada ao processamento do checkout/pagamento.

O projeto **não realiza transações financeiras reais**.

Em um e-commerce real, essa camada precisaria ser integrada a um backend e a um provedor de pagamento seguro.

---

#  Types

A pasta:

```text
src/types
```

contém definições utilizadas pelo TypeScript.

---

## `Product.ts`

Representa a estrutura esperada para um produto.

Isso permite que partes diferentes da aplicação trabalhem com o mesmo formato de dados.

---

## `CartItem.ts`

Representa a estrutura utilizada pelos itens adicionados ao carrinho.

A tipagem ajuda a tornar o código mais previsível e reduz a possibilidade de utilizar dados em formatos incorretos.

---

#  Papel do `main.ts`

O arquivo:

```text
src/main.ts
```

funciona como um dos principais pontos de integração da aplicação.

Ele conecta diferentes partes do sistema e coordena a renderização e os eventos necessários para o funcionamento da loja.

De maneira simplificada:

```text
Dados
  ↓
Services
  ↓
main.ts
  ↓
Components
  ↓
Interface
```

Essa organização permite separar melhor as responsabilidades do projeto.

---

#  Catálogo de produtos

Os produtos da VERDEZA não precisam ser escritos individualmente diretamente no HTML principal.

Eles são armazenados em:

```text
public/products.json
```

Esse arquivo funciona como uma fonte de dados do catálogo.

Depois, o `productService.ts` carrega esses dados utilizando `fetch`.

Os produtos podem então ser transformados em cards pela aplicação.

Isso permite que a interface seja reutilizada para vários produtos.

---

#  Renderização dos produtos

O componente `ProductCard.ts` recebe um produto e retorna a estrutura HTML correspondente ao card.

Conceitualmente:

```text
Produto
   ↓
ProductCard(product)
   ↓
HTML do card
   ↓
Grid de produtos
```

Assim, não é necessário criar manualmente um bloco HTML diferente para cada planta.

---

#  Carrinho de compras

O projeto possui um carrinho de compras demonstrativo.

O usuário pode adicionar produtos e interagir com os itens selecionados.

A aplicação trabalha com informações como:

```text
Produto
+
Quantidade
=
Item do carrinho
```

O carrinho também considera informações de estoque para controlar as quantidades disponíveis.

---

#  Persistência do carrinho

Uma aplicação front-end normalmente perde seu estado quando a página é recarregada caso nenhuma estratégia de persistência seja utilizada.

Para evitar isso no carrinho, o projeto utiliza armazenamento local do navegador.

Fluxo simplificado:

```text
Usuário adiciona produto
        ↓
Carrinho é atualizado
        ↓
Estado é armazenado
        ↓
Página é recarregada
        ↓
Carrinho pode ser recuperado
```

Isso melhora a experiência do usuário.

---

#  Checkout

A VERDEZA possui um fluxo demonstrativo de checkout.

Essa funcionalidade foi criada para representar uma etapa comum de um e-commerce.

O objetivo é demonstrar a lógica e a interface de finalização de uma compra.

>  Nenhum pagamento real é realizado pela VERDEZA.

Dados reais de cartão não devem ser utilizados.

Em uma aplicação comercial real, informações sensíveis de pagamento não deveriam ser processadas diretamente dessa forma pelo front-end.

Seria necessário utilizar infraestrutura segura, backend e integração com um provedor de pagamentos.

---

#  Busca e filtros

A aplicação possui recursos para facilitar a localização dos produtos.

Em vez de modificar o catálogo original, a interface pode trabalhar com uma versão filtrada dos dados.

Conceitualmente:

```text
Todos os produtos
       ↓
Busca / filtro
       ↓
Produtos correspondentes
       ↓
Renderização
```

Essa abordagem mantém os dados originais separados da visualização filtrada.

---

#  Responsividade

A interface foi construída considerando diferentes tamanhos de tela.

O Tailwind CSS permite utilizar breakpoints como:

```text
sm:
md:
lg:
```

para modificar o layout dependendo da largura disponível.

Por exemplo, o catálogo pode apresentar uma organização diferente em celulares e computadores.

Isso permite que a mesma aplicação seja utilizada em diferentes dispositivos.

---

#  Acessibilidade

A acessibilidade foi considerada durante o desenvolvimento e também avaliada utilizando o Lighthouse.

Entre os pontos trabalhados estão:

- contraste entre texto e fundo;
- idioma da página;
- textos alternativos em imagens;
- legibilidade;
- estrutura dos elementos;
- controles interativos.

Após os ajustes realizados durante o desenvolvimento, a auditoria apresentada atingiu:

```text
Acessibilidade: 100
```

---

#  SEO

Também foram implementadas melhorias básicas relacionadas à otimização para mecanismos de busca.

O `index.html` possui:

```html
<title>VERDEZA | Plantas para viver melhor</title>
```

e uma descrição da aplicação:

```html
<meta
  name="description"
  content="VERDEZA é uma loja virtual de plantas para transformar sua casa com mais natureza, personalidade e bem-estar."
/>
```

Também foi criado:

```text
public/robots.txt
```

com:

```text
User-agent: *
Allow: /
```

Esses elementos ajudam mecanismos de busca a compreender melhor a página.

Na auditoria apresentada pelo Lighthouse:

```text
SEO: 100
```

---

#  Qualidade da aplicação

Além de verificar se as funcionalidades estavam funcionando, o projeto também passou por análise utilizando o Lighthouse.

Durante esse processo foram identificados problemas de contraste e oportunidades de melhoria.

Depois dos ajustes, o resultado apresentado foi:

```text
Performance:          99
Accessibility:       100
Best Practices:      100
SEO:                 100
```

Isso mostra a importância de não avaliar um projeto apenas pela aparência, mas também por aspectos técnicos da experiência do usuário.

---

#  Como executar o projeto

## 1. Clone o repositório

```bash
git clone COLOQUE_AQUI_A_URL_DO_SEU_REPOSITORIO
```

## 2. Entre na pasta

```bash
cd minha-loja
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Execute o projeto

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e mostrará no terminal o endereço local da aplicação.

---

#  Build de produção

Para gerar uma versão otimizada:

```bash
npm run build
```

O Vite gera os arquivos de produção dentro da pasta:

```text
dist/
```

Essa é a versão preparada para publicação.

---

#  Deploy

O projeto está publicado utilizando a **Vercel**.

O fluxo de desenvolvimento utilizado permite trabalhar com:

```text
Código local
     ↓
Git
     ↓
GitHub
     ↓
Vercel
     ↓
Aplicação online
```

Com isso, alterações enviadas ao repositório podem gerar uma nova versão publicada da aplicação.

---

#  Conceitos praticados

Durante o desenvolvimento da VERDEZA foram trabalhados conceitos importantes de desenvolvimento front-end, entre eles:

- TypeScript;
- tipagem;
- interfaces e tipos;
- funções;
- arrays;
- manipulação do DOM;
- eventos;
- template strings;
- `map`;
- `filter`;
- `find`;
- `fetch`;
- Promises;
- `async/await`;
- tratamento de erros;
- `localStorage`;
- componentização;
- separação de responsabilidades;
- responsividade;
- acessibilidade;
- SEO;
- Git;
- GitHub;
- build;
- deploy.

---

#  Decisões de arquitetura

Mesmo sendo um projeto demonstrativo, a aplicação foi organizada buscando separar diferentes responsabilidades.

Em vez de concentrar:

```text
interface + dados + carrinho + pagamento
```

em um único arquivo, foram criadas estruturas específicas.

```text
components → interface
services   → operações e regras
types      → contratos dos dados
main.ts    → integração
```

Essa organização facilita a leitura e cria uma base melhor para futuras evoluções.

---

#  Possíveis evoluções

A VERDEZA ainda pode evoluir com funcionalidades encontradas em aplicações comerciais maiores.

Algumas possibilidades são:

- backend próprio;
- API de produtos;
- banco de dados;
- cadastro e login;
- autenticação;
- favoritos;
- histórico de pedidos;
- painel administrativo;
- gateway de pagamento real;
- gerenciamento de estoque no servidor;
- testes automatizados;
- recomendações personalizadas;
- integração com serviços externos.

Uma evolução natural seria substituir o catálogo estático em `products.json` por uma API real.

O fluxo poderia passar de:

```text
products.json
      ↓
Front-end
```

para:

```text
Banco de dados
      ↓
Backend / API
      ↓
Front-end
```

A interface poderia continuar utilizando conceitos semelhantes, enquanto a origem dos dados evoluiria.

---

#  Objetivo do projeto

A VERDEZA foi desenvolvida para colocar em prática conhecimentos de desenvolvimento web através da construção de uma aplicação próxima de um cenário real de e-commerce.

Além da interface visual, o projeto busca demonstrar conhecimentos relacionados a:

- organização de código;
- lógica de programação;
- TypeScript;
- arquitetura front-end;
- consumo de dados;
- estado e persistência;
- experiência do usuário;
- acessibilidade;
- SEO;
- versionamento;
- publicação de aplicações.

---

#  Principais aprendizados

O desenvolvimento da VERDEZA permitiu trabalhar não apenas na construção da interface, mas também no processo de evolução e melhoria de uma aplicação.

Um dos principais aprendizados foi entender que desenvolver uma aplicação envolve um ciclo contínuo:

```text
Planejar
   ↓
Desenvolver
   ↓
Testar
   ↓
Identificar problemas
   ↓
Corrigir
   ↓
Medir novamente
   ↓
Publicar
```

O uso do Lighthouse foi um exemplo desse processo.

A aplicação inicialmente apresentou oportunidades de melhoria em áreas como acessibilidade e SEO.

Esses problemas foram analisados e corrigidos até alcançar os resultados apresentados na versão atual.

---

#  Autora

**Ingryd Vitoria de Araújo Barbosa**

Projeto desenvolvido para estudo, prática e demonstração de conhecimentos em desenvolvimento web.

---

#  Observação

A VERDEZA é um projeto demonstrativo.

Não representa uma loja real e **não realiza pagamentos ou vendas reais**.

O checkout e as funcionalidades relacionadas a pagamento foram implementados apenas para fins educacionais e de demonstração.

---

## 🌿 VERDEZA

**Plantas para viver melhor.**