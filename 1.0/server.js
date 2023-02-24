// const fs = require('fs')

// const data = fs.readFileSync("./config.js")
// console.log(data)

// fs.readFile("./config.js", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// const {promisify} = require('util')
// const readFile = promisify(fs.readFile);
// readFile('./config.js').then(data => {
//     console.log(data);
// })

// const fsp = require("fs").promises;
// fsp.readFile("./config.js").then(data => {
//     console.log(data);
// }).catch(error => {
//     throw error
// })

(async () => {
    const fs = require('fs');
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./config.js')
    const data1 = Buffer.from(data).toString('utf-8')
    console.log(data1)
})()







