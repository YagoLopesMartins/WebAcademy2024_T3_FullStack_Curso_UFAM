// Interface para representar um produto genérico
interface Produto {
    modelo: string;
    fabricante: string;
    valor: number;
}

// Classe genérica para representar um carrinho de compras
class CarrinhoDeCompras<T extends Produto> {
    private produtos: T[] = [];

    adicionarProduto(produto: T): void {
        this.produtos.push(produto);
    }

    removerProduto(index: number): void {
        if (index >= 0 && index < this.produtos.length) {
            this.produtos.splice(index, 1);
        }
    }

    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }

    exibirCarrinho(): void {
        console.log('===== Carrinho de Compras =====');
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.modelo} - ${produto.fabricante} - R$ ${produto.valor.toFixed(2)}`);
        });
        console.log(`Total: R$ ${this.calcularTotal().toFixed(2)}`);
        console.log('===============================');
    }
}

// Classe para representar um produto específico: TV
class TV implements Produto {
    constructor(
        public modelo: string,
        public resolucao: string,
        public tamanhoPolegadas: number,
        public fabricante: string,
        public valor: number
    ) {}
}

// Classe para representar um produto específico: Celular
class Celular implements Produto {
    constructor(
        public modelo: string,
        public memoria: string,
        public fabricante: string,
        public valor: number
    ) {}
}

// Classe para representar um produto específico: Bicicleta
class Bicicleta implements Produto {
    constructor(
        public modelo: string,
        public tamanhoAro: number,
        public fabricante: string,
        public valor: number
    ) {}
}

// Exemplo de uso das classes e do carrinho de compras
const carrinho = new CarrinhoDeCompras<Produto>();

const tv = new TV('Smart TV X500', '4K', 55, 'Samsung', 2999.99);
const celular = new Celular('Galaxy S20', '128GB', 'Samsung', 3499.99);
const bicicleta = new Bicicleta('Mountain Bike Elite', 26, 'Caloi', 1899.99);

carrinho.adicionarProduto(tv);
carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(bicicleta);

carrinho.exibirCarrinho();

// Remover um produto do carrinho
carrinho.removerProduto(1);

carrinho.exibirCarrinho();
