var fs = require("fs")
const { stdin: input, stdout: output } = require('node:process');
const readline = require('node:readline');
const rl = readline.createInterface({ input, output });




rl.question('que txt quieres? ', (txt) => {

fs.readFile(`HTML/actividad21/${txt}`, "UTF-8", (porSiDaError, texto) => {
    console.log(texto);
});
});