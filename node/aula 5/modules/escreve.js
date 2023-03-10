const fs = require('fs').promises;


module.exports = (caminho, dados) => {
    fs.writeFile(caminho,dados, { // \n faz uma quebra de linha do arquivo
        // flag: 'w', //tag w faz um overwriting no arquivo,
        flag: 'w', //faz um apend no arquivo
        encoding: "utf-8",
    });
}
