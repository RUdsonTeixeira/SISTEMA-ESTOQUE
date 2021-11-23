class MarcaController {

    static listar(req, res) {
        res.render('marca/listar')
    }
    static novo(req, res) {
        res.render('marca/novo')
    }
    static editar(req, res) {
        res.render('marca/editar')
    }
}
module.exports = MarcaController