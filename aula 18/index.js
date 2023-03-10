// função fábrica
// function criaPessoa (nome, sobreNome, idade) {
//     return {
//         nome,
//         sobreNome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'otávio', 25);

// console.log(pessoa1)

const pessoa1 = {
    nome : "Luiz",
    sobreNome: "Miranda",
    idade : 25,


    fala () {
        console.log(`a minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();