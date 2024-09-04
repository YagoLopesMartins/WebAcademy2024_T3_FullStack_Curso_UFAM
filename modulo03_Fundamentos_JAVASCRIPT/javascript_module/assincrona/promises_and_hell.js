function sendEmail(body, to) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var err = false;
            if(!err){
                // Only acept one parameter how to result, except an objet example json
                resolve({ time: 4, to: "Yago"})
            }else{
                reject()
            }
        },4000)
    })
}

sendEmail("Hello world", "ylm@icomp.ufam.edu.br")
    .then((dados)=> {
        console.log("OK")
        console.log(`${dados.time} - ${dados.to}`)
    }).catch(()=>{
        console.log("Err")
    })

function getId(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(5)
        },1500)
    })
}

function searchEmailonDB (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ylm@icomp.ufam.edu.br")
        },2000)
    })
}

getId()
.then((id) =>{
    searchEmailonDB(id)
    .then((email)=>{
        sendEmail("Hello world", "ylm@icomp.ufam.edu.br")
            .then((dados)=> {
                console.log("OK")
                console.log(`${dados.time} - ${dados.to}`)
            }).catch((err)=>{
                console.log("Err: "+err)
            })
    })
})