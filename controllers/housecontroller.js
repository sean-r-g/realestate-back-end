const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')


////CREATE/////
router.post('/', (req, res)=>{
  Houses.create(req.body, (err, createdHouses)=>{
    res.json(createdHouses)
  })
})

////INDEX////
router.get('/', (req, res)=>{
  Houses.find({}, (err, foundHouses)=>{
    res.json(foundHouses)
  })
})

////DELETE////
router.delete('/:id', (req, res)=>{
  Houses.findByIdAndDelete(req.params.id, (err, deletedHouses)=>{
    res.json(deletedHouses)
  })
})

/////UPDATE////
router.put('/:id', (req, res)=>{
  Houses.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedHouses)=>{
    res.json(updatedHouses)
  })
})



module.exports = router