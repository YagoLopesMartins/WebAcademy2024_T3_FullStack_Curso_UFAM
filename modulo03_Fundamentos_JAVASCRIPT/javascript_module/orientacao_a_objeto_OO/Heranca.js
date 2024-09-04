class AnimalPetShop {
    constructor(nome, idade, preco) {
        this.nome = nome
        this.idade = idade
        this.preco = preco
    }
    ChecarEstoque(){
        return 10
    }
    MetodoQualquer(){
        return 10
    }
}

class Cachorro extends AnimalPetShop{

    constructor(nome, idade, preco, raca){
        super(nome, idade, preco)
        this.raca = raca
    }
    MetodoQualquer(){
       super.MetodoQualquer()
    }
}

var dog = new Cachorro("Sadan", 5, 1000)

dog.ChecarEstoque()