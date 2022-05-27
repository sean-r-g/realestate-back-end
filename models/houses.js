const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema ({
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

const Houses = mongoose.model('House', houseSchema)

module.exports = Houses