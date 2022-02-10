const express = require('express')
const Manager = require('../Managers/Manager')
let admin = new Manager()
const router = express.Router();


router.get('/:id', (req,res)=>{
    admin.getById(req.params.id).then(result=>res.send(result))
})

router.put('/:id', (req,res)=>{
    let update = req.body
    admin.put(req.params.id,update).then(result=>res.send(result))
})

router.delete('/:id', (req,res)=>{
    admin.deleteById(req.params.id).then(result=>res.send(result))
})

module.exports = router;