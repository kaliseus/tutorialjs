const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'AV Brasil',
        numero: 320
    }
}

const { nome, ...resto } = pessoa; //extração por desextruturação
console.log(nome, resto);