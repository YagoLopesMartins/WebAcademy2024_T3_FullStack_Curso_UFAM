console.log("Hello World!!")

let ufam = {
    nome: "Universidade Federal do Amazonas (UFAM)",
    fundacao: 1909,
    ativa: true
}

document.writeln(ufam.nome);
document.writeln(ufam.fundacao);
document.writeln(ufam.ativa);

document.writeln("<br>");

document.writeln(ufam["nome"]);
document.writeln(ufam["fundacao"]);
document.writeln(ufam["ativa"]);