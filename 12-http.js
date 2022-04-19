const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url == '/')
    {
        res.end('Selamat Datang di Halaman Pertama Saya')
        return;
    }
    if(req.url =='/about')
    {
        res.end('Halaman Tentang Saya')
        return;
    }
    else
    {
        res.end(`
            <h1>Ooops!</h1>
            <p>Mohon maaf halaman yang ada cari tidak tersedia</p>
            <a href="/">Halaman Utama</a>
        `)
        return;
    }
    
    
})

server.listen(3000);