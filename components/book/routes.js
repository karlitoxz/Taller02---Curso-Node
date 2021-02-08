const express = require('express');
const router = express.Router();
const { Book } = require('../book/model');

//Get ALL
router.get('/', async(req, res) => {
    const book = await Book.find();
    res.status(200).send(book);
})

//Get by ID
router.get('/:id', async(req, res) => {
    const book = await Book.findById(req.params.id)
    res.status(200).send(book);
})

//POST Create a Book
router.post('/', async(req, res) => {
    const book = new Book({
        caratula : req.body.caratula,
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        valorUnitario : req.body.valorUnitario,
        categorias : req.body.categorias
     })
     const resultado = await book.save();
     res.status(201).send(resultado);
})

//PUT Update a Book´s info
router.put('/:id', async(req, res, next) => {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(201).json({post});
    });
})

//DELETE by ID
router.delete('/:id', async(req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    res.status(200).json({"message":"the book has been deleted"});
})

module.exports = router;

/* { "caratula": "Caratula 01", "nombre": "Nombre del libro 01", "descripcion": "Descripcion 01", "valorUnitario": 1111, "categorias": [{"cat01" : "Categoria 01", "cat02" : "Categoria 02"}] }*/