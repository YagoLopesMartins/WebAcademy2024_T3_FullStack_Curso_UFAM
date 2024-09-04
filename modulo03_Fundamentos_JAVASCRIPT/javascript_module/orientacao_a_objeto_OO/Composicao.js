class Criador {
    Criar(nome){
        console.log("Criar")
    }
}
class Leitor {
    Ler(nome){
        console.log("Lendo")
    }
}

class ManipuladoArquivos {
   constructor(nome){
        this.arquivo  = nome;
        this.leitor = new Leitor();
        this.criador = new Criador();
   }
}

var manipulador = new ManipuladoArquivos("file.txt")
manipulador.leitor.Ler()
manipulador.criador.Criar()