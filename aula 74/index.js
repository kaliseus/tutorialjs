function Pessoa (nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.nomeCompleto = () => "original: " + this.nome + " " + this.sobreNome;
}

const pessoa1 = new Pessoa('Luis','Ricardo');
// const pessoa2 = new Pessoa('Maria','Luiza');

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + " " + this.sobreNome;
};

const data = new Date();

console.dir(pessoa1)
console.dir(pessoa1.nomeCompleto())
console.dir(data)