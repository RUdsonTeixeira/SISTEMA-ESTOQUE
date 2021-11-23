const { Router } = require('express')
const MarcaController = require('../controllers/MarcaController')
const router = Router()
router.get('/',function(req,res){
    res.render('index')
})

router.get('/marca/novo',MarcaController.novo)
router.get('/marca/editar',MarcaController.editar)
router.get('/marca/listar',MarcaController.listar)

module.exports = router