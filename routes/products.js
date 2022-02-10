const express = require('express')
const Manager = require('../Managers/Manager')
let admin = new Manager()
const router = express.Router();

const idRouter = require('./ids')
router.use('/',idRouter);



router.get('/', (req,res)=>{
    admin.get().then(result=>res.send(result))
})

router.post('/',(req,res)=>{
    let product = req.body
    admin.save(product).then(result=>res.send(result))
})

module.exports = router;