const express = require('express');
const router = express.Router();
const { Venta } = require('../ventas/model');

//Get ALL
router.get('/', async(req, res) => {
    const venta = await Venta.find();
    res.status(200).send(venta);
})

//Get by ID
router.get('/:id', async(req, res) => {
    const venta = await Venta.findById(req.params.id)
    res.status(200).send(venta);
})

//POST Create a venta
router.post('/', async(req, res) => {
    const venta = new Venta({
        fecha : req.body.fecha,
        total : req.body.total,
        idCliente : req.body.idCliente,
        detalles : req.body.detalles
     })
     const resultado = await venta.save();
     res.status(201).send(resultado);
})

//PUT Update a venta info
router.put('/:id', async(req, res, next) => {
    const id = req.params.id;
    const venta = await Venta.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(201).json({post});
    });
})

//DELETE by ID
router.delete('/:id', async(req, res) => {
    const venta = await Venta.findByIdAndDelete(req.params.id)
    res.status(200).json({"message":"the venta has been deleted"});
})

module.exports = router;

/* {
	"fecha": "1987-10-19",
	"total": 999999,
	"idCliente": "6021487e0e127b0a601036b9",
    "detalles" : [{
        "idLibro": "60215831651d791564f78e85",
        "libro": "Nombre del libro",
        "valorUnitario": 212,
        "cantidad": 2
    }]
}*/