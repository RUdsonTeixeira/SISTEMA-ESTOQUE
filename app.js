const express = require('express')

const app = express()
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index')
})
app.get('/produto/novo', function(req,res){
    res.render('produto/novo')
})
<<<<<<< HEAD
app.get('/marca/novo',function(req,res){
    res.render('marca/novo')
})
app.get('/marca/editar',function(req,res){
    res.render('marca/editar')
})
app.get('/marca/listar',function(req,res){
=======
app.get('/marca/novo', function(req,res){
    res.render('marca/novo')
})
app.get('/marca/editar', function(req,res){
    res.render('marca/editar')
})
app.get('/marca/listar', function(req,res){
>>>>>>> ec2908165e0273a087378b445c4bb1bca4165b17
    res.render('marca/listar')
})

app.listen(3000,function(){
    console.log("Server is running on http://localhost:3000")
})