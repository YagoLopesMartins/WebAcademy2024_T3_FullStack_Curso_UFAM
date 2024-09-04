var nome1 = {
    nome: "Yago",
    idade: 30
}
var nome2 = {
    nome: "Pedro",
    idade: 9
}
var nome3 = {
    nome: "Rubia",
    idade: 31
}

var users = [nome1, nome2, nome3]

var user = users.find(user => user.nome === "Yago");
var user2 = users.find(user => user.idade <= 10);
console.log(user);
console.log(user2);

console.log(`Usuario ${nome1.nome} tem ${nome1.idade} anos de idade!`);