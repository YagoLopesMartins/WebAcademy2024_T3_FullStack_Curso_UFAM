// Classe genérica para representar um carrinho de compras
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    CarrinhoDeCompras.prototype.removerProduto = function (index) {
        if (index >= 0 && index < this.produtos.length) {
            this.produtos.splice(index, 1);
        }
    };
    CarrinhoDeCompras.prototype.calcularTotal = function () {
        return this.produtos.reduce(function (total, produto) { return total + produto.valor; }, 0);
    };
    CarrinhoDeCompras.prototype.exibirCarrinho = function () {
        console.log('===== Carrinho de Compras =====');
        this.produtos.forEach(function (produto, index) {
            console.log("".concat(index + 1, ". ").concat(produto.modelo, " - ").concat(produto.fabricante, " - R$ ").concat(produto.valor.toFixed(2)));
        });
        console.log("Total: R$ ".concat(this.calcularTotal().toFixed(2)));
        console.log('===============================');
    };
    return CarrinhoDeCompras;
}());
// Classe para representar um produto específico: TV
var TV = /** @class */ (function () {
    function TV(modelo, resolucao, tamanhoPolegadas, fabricante, valor) {
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.tamanhoPolegadas = tamanhoPolegadas;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    return TV;
}());
// Classe para representar um produto específico: Celular
var Celular = /** @class */ (function () {
    function Celular(modelo, memoria, fabricante, valor) {
        this.modelo = modelo;
        this.memoria = memoria;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    return Celular;
}());
// Classe para representar um produto específico: Bicicleta
var Bicicleta = /** @class */ (function () {
    function Bicicleta(modelo, tamanhoAro, fabricante, valor) {
        this.modelo = modelo;
        this.tamanhoAro = tamanhoAro;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    return Bicicleta;
}());
// Exemplo de uso das classes e do carrinho de compras
var carrinho = new CarrinhoDeCompras();
var tv = new TV('Smart TV X500', '4K', 55, 'Samsung', 2999.99);
var celular = new Celular('Galaxy S20', '128GB', 'Samsung', 3499.99);
var bicicleta = new Bicicleta('Mountain Bike Elite', 26, 'Caloi', 1899.99);
carrinho.adicionarProduto(tv);
carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(bicicleta);
carrinho.exibirCarrinho();
// Remover um produto do carrinho
carrinho.removerProduto(1);
carrinho.exibirCarrinho();
