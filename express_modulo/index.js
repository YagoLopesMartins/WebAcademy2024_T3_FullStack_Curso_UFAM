const express = require("express")

require("dotenv").config();

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`)
})