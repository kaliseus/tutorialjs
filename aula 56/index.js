function criaPessoa(nome, sobreNome, peso, altura) { //fabric function
    return {
        nome,
        sobreNome,
        get nomeCompleto () { //getter
            return `${this.nome} ${this.sobreNome}`
        },

        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ');
            console.log(valor);
        },
        fala (assunto = 'nada') {
            return `${this.nome} está falando ${assunto}`;
        },
        peso: peso,
        altura: altura,
        get imc () { //getter tranformou a função em atributo
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 80, 1.90);
const p2 = criaPessoa('Luiz', 'Otávio',60,1.50);


p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobreNome);
console.log(p1.nomeCompleto);

console.log(p1.fala())