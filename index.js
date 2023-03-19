require('dotenv').config()

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(process.env.PORT, () => { 
    console.log("Listening on port ", process.env.PORT)
})