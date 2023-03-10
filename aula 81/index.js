class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    get nomeCompleto () {
        return this.nome + " " + this.sobreNome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.unshift();
        this.sobreNome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luis', 'Miranda Cardoso');
console.log(p1.nome)
console.log(p1.sobreNome)
console.log(p1.nomeCompleto)