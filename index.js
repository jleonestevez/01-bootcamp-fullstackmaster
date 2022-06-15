const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const { MongoClient } = require("mongodb");
const port = 3000
const uri =
    "mongodb://appuser:supersecret@127.0.0.1:27017/test?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const client = new MongoClient(uri);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/threepoint/cinemas', async (req, res) => {
    let response = {}
    try {
        // Access the provided 'page' and 'limt' query parameters
        let page = req.query.page && !isNaN(req.query.page) ?  req.query.page: 0
        let limit = req.query.limit && !isNaN(req.query.limit) ? parseInt( req.query.limit)  :100;
        await client.connect();
        const database = client.db('threepoint');
        const movies = database.collection('movies');
        response = await movies.find({},{}).skip(page).limit(limit).toArray();
        console.log(response);
    } finally {
        await client.close();
    }
    res.json(response).status(200);
})

app.get('/threepoint/cinema', async (req, res) => {
    let response = {}
    try {
        // Access the provided 'page' and 'limt' query parameters
        let title = req.query.title ? req.query.title : ''

        await client.connect();
        const database = client.db('threepoint');
        const movies = database.collection('movies');
        response = await movies.find({title},{}).toArray();
        console.log(response);
    } finally {
        await client.close();
    }
    res.json(response).status(200);
})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})