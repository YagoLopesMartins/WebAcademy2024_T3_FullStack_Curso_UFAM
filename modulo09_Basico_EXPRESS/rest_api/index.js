const express = require("express")

const app = express()
const  cors = require("cors")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "asfsdfsdfsdfsdfsçdf´ç541s51dfs1df1541"

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors())

function auth(req, res, next) {
    const authToken = req.headers['authorization']
    if(authToken != undefined) {
        const bearer = authToken.split(' ')
        var token = bearer[1]

        jwt.verify(token, JWT_SECRET, (err, data) => {
            if(err) {
                res.status(401)
                res.json({ err: "Token invalido"})
            }else{
                req.token = token
                req.loggedUser = { id: data.id, email: data.email}
                next()
            }
        })
    }else{
        res.status(401)
        res.json({err: "Token invalido"})
    }
}

var DB = {
    games: [
        {
            id: 1,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 2,
            title: "CS:GO",
            year: 2020,
            price: 70
        },
        {
            id: 3,
            title: "GTA vice city",
            year: 2021,
            price: 80
        }
    ],
    users: [
        {
            id: 1,
            name: "Yago",
            email: "yagolopesmartins777@gmail.com",
            password: "java123"
        },
        {
            id: 2,
            name: "Pedro",
            email: "pedro@gmail.com",
            password: "node123"
        }
    ]
}

app.get('/games', auth, (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})
app.get('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var game = DB.games.find(game => game.id == id)
        if (game != undefined){
            res.statusCode = 200
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})

app.post('/game', (req, res) => {
    const {title, year, price} = req.body;
    DB.games.push({
        id: 4,
        title,
        year,
        price
    })
    res.sendStatus(200)
})

app.delete('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var index = DB.games.findIndex(game => game.id == id)
        if (index == -1){
            res.statusCode = 404
        }else{
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})

app.put('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var game = DB.games.find(game => game.id == id)
        if (game != undefined){
            const {title, year, price} = req.body;
            if(title != undefined) {
                game.title = title
            }
            if(price != undefined) {
                game.title = title
            }
            if(year != undefined) {
                game.title = title
            }
            res.sendStatus(200)
        }else{
            res.sendStatus(404)
        }
    }
})

app.post("/auth", (req, res) => {
    var {email, password} = req.body
    if(email != undefined){
        var user = DB.users.find(user => user.email == email)
        if (user != undefined) {
            if (user.password == password) {
                
                jwt.sign({
                    id: user.id,
                    email: user.email
                }, JWT_SECRET, {expiresIn:'48h'}, (err, token) => {
                    if(err){
                        res.status(400)
                        res.json({ err: "Falha interna"})
                    }else{
                        res.status(200)
                        res.json({ token: token})
                    }
                })                
            }else{
                res.status(401)
                res.json({ err: "Crredenciais invalidas"})
            }
        }else{
            res.status(404)
            res.json({ err: "E-mail não existe"})
        }
    }else{
        res.status(400)
        res.json({ err: "E-mail inválido"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`)
})