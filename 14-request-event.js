const http = require('http');

const server = http.createServer()

server.on('request', (req,res) => {
    res.end('Selamat datang')
})

server.listen(5000)