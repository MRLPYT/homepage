const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
res.writeHead(200), { 'Conentent-Type:': 'text/html' }
fs.readFile('main.php', function(error, data) {
  if (error) {
    res.writeHead(404)
    res.write('Datei nicht gefunden.')
    } else { 
    res.write(data)
      }
      res.end()
    })
    }) 

server.listen(port, function(error) {
    if (error) {
    console.log('Es ist ein Fehler unterlaufen.', error)
  } else {
     console.log('Der Sertver läuft unter dem Port:', +port)
  }
})