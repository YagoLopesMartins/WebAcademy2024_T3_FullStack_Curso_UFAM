class Unidade {
	constructor (nome, docentes) {
		this.nome = nome;
		this.docentes = docentes;
	}
	contrata (qtd) {
		this.docentes += qtd;
		console.log("Quantidade de Docentes contratados: "+this.docentes+" na unidade do: "+this.nome);
	}
	aposenta (qtd) {
		this.docentes -= qtd;
		console.log("Quantidade de Docentes aposentados: "+this.docentes+" na unidade do: "+this.nome);
	}
}
 
icomp = new Unidade ("IComp", 35);
ice = new Unidade ("ICE", 28);

console.log("Unidade "+icomp.nome+" criada com "+icomp.docentes+".");
console.log("Unidade "+ice.nome+" criada com "+ice.docentes+".");
 
icomp.contrata(2);
icomp.contrata(2);
icomp.contrata(2);
icomp.aposenta(12);

ice.contrata(25);
ice.aposenta(12);
