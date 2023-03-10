function Pessoa (nome, sobreNome) {
    const ID = 123456;

    const metodoInterno = () => {
        
    };
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.metodo = function () {
        console.log(`Sou um metodo ${nome}`)
    };
}

const p1 = new Pessoa('Luis', 'Otávio');
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1.metodo());
console.log(p2.metodo());