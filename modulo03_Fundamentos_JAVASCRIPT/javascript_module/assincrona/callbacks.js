function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------
            Msg: ${corpo}
            ----------------------------
            De: Yago Martins`)
        callback("OK", 5, "2s")
    }, 2000)
}
console.log("Inicio")

enviarEmail("Oi", "ylm@icomp.ufam.edu.br", (status, amount, time) => {
    console.log(`
        Status ${status}
        --------------------------------
        Quantidade contatos: ${amount}
        --------------------------------
        Tempo de envio: ${time}`)
    console.log("E-mail Enviado com sucesso")
})

/* Ex.: Node - Express
    app.get("/route", (req, res) => {
        
    })
*/
