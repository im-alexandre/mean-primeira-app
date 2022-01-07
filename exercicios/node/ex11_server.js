const http = require('http')
const server = http.createServer(function(req, res) {
  //res.writeHead(200, {"Content-Type": "text/json"})
  //res.end("{teste: 'teste'}")

  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
  res.end('<h1>Acho que é melhor usar o Express, não?</h1>')
})

const porta = 3456
server.listen(porta, function() {
  console.log(`Escutando a ${porta}`)
})
