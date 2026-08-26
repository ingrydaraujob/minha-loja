//estrutura do produto (informações do produto) define como o produto deve ser 
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
};