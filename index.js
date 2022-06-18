const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const { MongoClient, ObjectID} = require("mongodb");
const port = 3000
const uri ="mongodb://appuser:supersecret@mongo:27017/threepoint?authSource=admin";

const client = new MongoClient(uri);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Api encarga de obtener todos los cinemas.
 * @api {get} /cinemas Obtiene todos los cinemas.
 */
app.get('/threepoint/cinemas', async (req, res) => {
    let response = {}
    try {
        // Obtencion de parametros para paginar
        let page = req.query.page && !isNaN(req.query.page) ?  parseInt(req.query.page): 0
        let limit = req.query.limit && !isNaN(req.query.limit) ? parseInt( req.query.limit)  :100;
        // Realizando conexion de BD
        await client.connect();
        // Seleccionando BD
        const database = client.db('threepoint');
        // Seleccionando Coleccion
        const movies = database.collection('movies');
        // Realizando busqueda
        response = await movies.find({},{}).skip(page).limit(limit).toArray();
    } finally {
        await client.close();
    }
    // retorno de api
    res.json(response).status(200);
})

/**
 * Api encarga de obtener un cinema por su titulo.
 * @api {get} /cinemas/:id Obtiene un cinema por su titulo.
 */
app.get('/threepoint/cinema/:title', async (req, res) => {
    let response = {}
    try {
        // Obtencion de parametros para filtro
        let title = req.params.title ? req.params.title : '';
        // Realizando conexion de BD
        await client.connect();
        // Seleccionando BD
        const database = client.db('threepoint');
        // Seleccionando Coleccion
        const movies = database.collection('movies');
        // Realizando busqueda con query
        response = await movies.find({title},{}).toArray();;
    } finally {
        await client.close();
    }
    // retorno de api
    res.json(response).status(200);
})

/**
 * Api encarga de actualizar o crear un cinema por su id.
 * @api {post} /cinemas/:id Actualiza o crea un cinema por su id.
 */
app.put('/threepoint/cinema/:id', async (req, res) => {
    let response = {}
    try {
        // Obtencion de parametros para filtro
        let id = req.params.id ? req.params.id : ''
        // creacion de ObjectId para filtro.
        const o_id = new ObjectID(id);
        // Obtencion de cuerpo para actualizar
        let body = req.body ? req.body : {}
        // validacion de contenido a actualizar u crear.
        if (Object.keys(body).length === 0 || id === '') {
            res.status(400)
            res.json({error: 'Debe ingresar algun valor en el cuerpo de la peticion'});
        }
        // Realizando conexion de BD
        await client.connect();
        // Seleccionando BD
        const database = client.db('threepoint');
        // Seleccionando Coleccion
        const movies = database.collection('movies');
        // Realizando actualizacion con creacion mediante  query
        response = await movies.updateOne({_id:o_id},{ $set: body } ,{upsert:true});
        // validacion de actualizacion o creacion.
        if (response.upsertedCount === 1) {
            // Codigo de retorno para creacion
            res.status(201);
            // retorno de api
            res.json({
                message: 'Registro inexistente, creado correctamente',
                data: { id: response.upsertedId}
            });
        } else {
            // Codigo de retorno para actualizacion
            res.status(200);
            // retorno de api
            res.json({
                message: 'Registro actualizado correctamente',
                data:body
            });
        }
    }catch (error){
        // Codigo de retorno para error
        res.status(500)
        // retorno de api
        res.json({message:"Ocurrio un error inesperado",error: error.message});

    } finally {
        // Cerrando conexion de BD
        await client.close();
    }
})


/**
 * Api encarga de eliminar un cinema por su id.
 * @api {post} /cinemas/:id eliminar un cinema por su id.
 */
app.delete('/threepoint/cinema/:id', async (req, res) => {
    let response = {}
    try {
        // Obtencion de parametros para filtro
        let id = req.params.id ? req.params.id : ''
        // creacion de ObjectId para filtro.
        const o_id = new ObjectID(id);
        // Realizando conexion de BD
        await client.connect();
        // Seleccionando BD
        const database = client.db('threepoint');
        // Seleccionando Coleccion
        const movies = database.collection('movies');
        // Realizando eliminacion con query
        response = await movies.deleteOne({_id:o_id} ,{});
        // validacion de eliminacion
        if (response.deletedCount === 0)
        {
            // Codigo de retorno para error
            res.status(204);
            // retorno de api
            res.json({
                message: 'Registro eliminado correctamente'
            });
        } else {
            // Codigo de retorno para eliminacion
            res.status(200);
            // retorno de api
            res.json({
                message: 'Registro eliminado correctamente'
            });
        }
    }catch (error){
        // Codigo de retorno para error
        res.status(500)
        // retorno de api
        res.json({message:"Ocurrio un error inesperado",error: error.message});
    } finally {
        // Cerrando conexion de BD
        await client.close();
    }
})


/**
 * listenes to port 3000
 */
app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})