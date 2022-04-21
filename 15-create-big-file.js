const {writeFileSync} = require('fs');

for (let i = 0; i < 10000000; i++) {
    writeFileSync('./content/big.txt', `Selamat Datang ${i}\n`, {flag : 'a'})
    
}