function soma (a, b) {
    console.log(a+b)
}

var mult = function(a,b){
    console.log(a*b)
}

var mult2 = (a,b) => {
    console.log(a*b)
}
// Usada nesse formato somente se houver apenas uma linha de retorno
var mult3 = (a,b) => console.log(a*b);

// Usada nesse formato somente se houver apenas um parametro
var mult4 = a => console.log(a*2);