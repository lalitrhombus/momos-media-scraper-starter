const express = require('express')

const app = express()

const PORT = process.env.port || 5000

app.get(
    "/",
    async (request, response) => {
        response.send("Welcome to Momos!")
    }
)

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`)
})