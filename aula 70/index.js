function Pessoa(nome,sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    Object.freeze(this)
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Outra coisa';
// Object.freeze(p1) // trava o valor para não ser alterado
delete  p1.nome;
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);