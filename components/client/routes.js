const express = require('express');
const router = express.Router();
const { Client } = require('../client/model');

//Get ALL
router.get('/', async(req, res) => {
    const client = await Client.find();
    res.status(200).send(client);
})

//Get by ID
router.get('/:id', async(req, res) => {
    const client = await Client.findById(req.params.id)
    res.status(200).send(client);
})

//POST Create a Client
router.post('/', async(req, res) => {
    const client = new Client({
        name : req.body.name,
        address : req.body.address,
        mobile : req.body.mobile,
        email : req.body.email,
        password : req.body.password
     })
     const resultado = await client.save();
     res.status(201).send(resultado);
})

//PUT Update a Client´s info
router.put('/:id', async(req, res, next) => {
    const id = req.params.id;
    const client = await Client.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(201).json({post});
    });
})

//DELETE by ID
router.delete('/:id', async(req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id)
    res.status(200).json({"message":"the client has been deleted"});
})

module.exports = router;

/*{ "name": "Juan 02", "address": "Calle 40 a sur", "mobile": "31381333 95", "email": "juan@juanserver.com", "password": "PassWord 02" }*/