const express = require('express')
const cors = require('cors')
const {MongoClient} = require("mongodb");

const app = express()
app.use(cors())

const port = process.env.PORT || 4000

//demo route to check the FE & BE are connected
app.get('/testroute', (req, res) => {
    res.json({name: "cuthbert", age: 99})
})

//demo route to check the BE & DB are connected
app.get('/testdbroute', async (req, res) => {
    const url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@host.docker.internal:${process.env.MONGODB_PORT}`;
    const client = new MongoClient(url);
    await client.connect()
    res.json({connection: true})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}, http://localhost:${port}`)
})