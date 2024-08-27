class Cassino {
    constructor(numero_faces) {
        this.numero_faces = numero_faces
    }
    GirarDado (){
        var min = 1
        var dado = Math.floor(Math.random() * (this.numero_faces - min) + min)
        console.log (dado)
    }
    Rolar (){
        console.log (this.getRandomIntInclusive(1,this.numero_faces))
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

dado5 = new Cassino(5)
dado5.GirarDado()

dado10 = new Cassino(10)
dado10.GirarDado()

dado20 = new Cassino(20)
dado20.Rolar()

dado200 = new Cassino(200)
dado200.Rolar()