const mongoose = require('mongoose')

const condoSchema = new mongoose.Schema ({
  name: String,
  location: String,
  price: Number,
  size: Number,
  rooms: Number,
  bath: Number,
  image: String,
  available: Boolean,
  showEdit: Boolean
})

const Condos = mongoose.model('Condo', condoSchema)

module.exports = Condos