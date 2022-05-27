const express = require('express')
const router = express.Router()
const Condos = require('../models/condos.js')


////CREATE/////
router.post('/', (req, res)=>{
  Condos.create(req.body, (err, createdCondos)=>{
    res.json(createdCondos)
  })
})

////INDEX////
router.get('/', (req, res)=>{
  Condos.find({}, (err, foundCondos)=>{
    res.json(foundCondos)
  })
})

////DELETE////
router.delete('/:id', (req, res)=>{
  Condos.findByIdAndDelete(req.params.id, (err, deletedCondos)=>{
    res.json(deletedCondos)
  })
})

/////UPDATE////
router.put('/:id', (req, res)=>{
  Condos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCondos)=>{
    res.json(updatedCondos)
  })
})





module.exports = router