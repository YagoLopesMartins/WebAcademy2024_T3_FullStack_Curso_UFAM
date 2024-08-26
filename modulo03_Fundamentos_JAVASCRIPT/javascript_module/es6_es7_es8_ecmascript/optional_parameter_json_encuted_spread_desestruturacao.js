/* Parametros opcionais */
function soma (a, b=50){
    console.log(a+b)
}
// soma(30) - resultado 30 +50 = 80, ou seja pode não enviar o segundo parametro

/* JSON encurtados */
var nome = "Yago"
var cidade  = "Parintins"
var telefone = "92 992624522"
// Se nome do campo for igual ao nome do atributo, então pode-se omitir
var cliente = {
    nome,       // nome: nome
    cidade,     // cidade: cidade
    telefone    // telefone: telefone
}
console.log(cliente)

/* SPREAD */
var empresa = {
    nome: "X",
    cidade: "Manaus"
}

var cliente2 = {
    nome,       // nome: nome
    cidade,     // cidade: cidade
    telefone,    // telefone: telefone
    ...empresa
}

/* DESESTRUTURAÇÂO */

var { nome } = empresa; // nome = empresa.nome
console.log(nome) // Yago
