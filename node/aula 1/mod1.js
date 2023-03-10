class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Luiz';
const sobreNome = 'Miranda';

module.exports = { //sobre escreve exports
    nome,
    sobreNome,
    Pessoa
}

exports.outraCoisa = 'Outra coisa';