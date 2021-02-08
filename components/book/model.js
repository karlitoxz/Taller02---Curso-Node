const mongoose = require('mongoose')

const Book = mongoose.model('books', {caratula: String, nombre: String, descripcion: String, valorUnitario : Number, categorias : Array})

module.exports.Book = Book