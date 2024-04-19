
type CreateProdutoDto = Pick<Produto, 'nome'|'preco'|'estoque'>;
type UpdateProdutoDto = Pick<Produto, 'nome'|'preco'|'estoque'>;

export default { CreateProdutoDto, UpdateProdutoDto} 