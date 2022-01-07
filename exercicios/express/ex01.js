const express = require('express')
const server = express()

server.post('/', function(req, res) {
    console.log(req.headers)
    res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req, res) {
    res.send('<h1>Teste!</h1>')
})

server.get(/api/, function(req, res) {
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))
