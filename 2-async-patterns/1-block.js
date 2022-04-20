const {readFile,writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile('./content/first.txt','utf8',(err, data)=>{
//             if(err)
//             {
//                 reject(err)
//             }
//             else
//             {
//                 resolve(data)
//             }
//         })
//     })
// }

// readFilePromise('./content/first.txt','utf8').then((result) => console.log(result)).catch((err) => console.log(err))

const start = async() =>{
    try {
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',`Disini Data Baru : ${first} ${second}`, {flag: 'a'})
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}

start()