export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  usuario_id: number;
  imagem?: string | null;
}

export interface ProdutoFormData {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  usuario_id: number;
  novaImagem: File | null;
}
