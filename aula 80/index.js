class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    };
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

function Pessoa2 (nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando`)
}
const p1 = new Pessoa('Luis', 'Miquel');
const p2 = new Pessoa2('Ricardo', 'Miquel');

p1.falar();
console.log(p1);

p2.falar();
console.log(p2);