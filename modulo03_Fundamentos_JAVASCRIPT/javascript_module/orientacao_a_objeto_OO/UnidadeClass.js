class Unidade {
	constructor (nome, docentes) {
		// Atributos
		this.nome = nome;
		this.docentes = docentes;
	}
	// Metodos
	Contrata (quantidade_contratados) {
		this.docentes += quantidade_contratados;
		console.log("Quantidade de Docentes contratados: "+this.docentes+", na unidade do "+this.nome);
	}
	Aposenta (quantidade_aposentados) {
		this.docentes -= quantidade_aposentados;
		console.log("Quantidade de Docentes aposentados: "+this.docentes+", na unidade do "+this.nome);
	}
}

// Instancias / Objetos
icomp = new Unidade ("IComp", 35);
ice = new Unidade ("ICE", 28);

console.log("\nUnidade "+icomp.nome+" criada com "+icomp.docentes+" docentes.");
console.log(`Unidade ${ice.nome} criada com ${ice.docentes} docentes.\n`);
 
icomp.Contrata(2);
icomp.Contrata(2);
icomp.Contrata(2);
icomp.Aposenta(12);

ice.Contrata(25);
ice.Aposenta(12);
console.log("");

class Calculadora {
	static Somar(a,b){
		console.log(a+b)
	}
	static Subtrair(a,b){
		console.log(a-b)
	}
}

Calculadora.Somar(10,5)
Calculadora.Subtrair(10,5)