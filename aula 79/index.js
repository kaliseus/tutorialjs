function criaPessoa (nome, sobreNome) {
    // const pessoaPrototype = {
    //     falar() {
    //         console.log(`${this.nome} está falando`)
    //     },
    //     comer() {
    //         console.log(`${this.nome} está comendo`)
    //     },
    //     beber() {
    //         console.log(`${this.nome} está bebendo`)
    //     },
    // };
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobreNome: {value: sobreNome}
    });
}

const falar ={
    falar() {
        console.log(`${this.nome} está falarr`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
};

// const pessoaPrototype = {...falar, ...comer,...beber} // atribuindo prototipos globais a funções fábrica 'mixing'

const pessoaPrototype = Object.assign({}, falar, comer, beber); // atribuindo prototipos globais a funções fábrica 'mixing'

const p1 = criaPessoa('Luiz', 'otávio');
const p2 = criaPessoa('Maria', 'A');
p1.falar();
console.log(p1)

p2.falar();
console.log(p2)