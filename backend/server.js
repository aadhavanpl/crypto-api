const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')

const app = express()
app.use(cors())
app.use(morgan("coins"))

app.get("/coins", (request, response) => {
    const url = 'https://api.coinranking.com/v2/coins';
    (async () => {
        try {
            await fetch(`${url}`, {
                headers: {
                    'x-access-token': `${processs.env.COIN_RANKING_API_KEY}`
                }
            }).then((response) => response.json())
            .then((json) => {
                console.log(json)
                response.json(json)
            })
        } catch (error) {
            console.log(error)
        }
    })()
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})