const express = require("express")

const app = express()
const  cors = require("cors")

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors())

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
    ]
}

app.get('/games', (req, res) => {
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

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`)
})