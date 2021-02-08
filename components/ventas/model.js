const mongoose = require('mongoose')

const Venta = mongoose.model('ventas', {fecha: Date, total: Number, idCliente: mongoose.Schema.Types.ObjectId, detalles: [{idLibro : mongoose.Schema.Types.ObjectId, libro: String, valorUnitario : Number, cantidad : Number}]})

module.exports.Venta = Venta