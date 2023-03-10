class DispositivoEletronico
{
    constructor (nome, ligado)
    {
        this.nome = nome;
        this.ligado = false;
    }
    ligar () {
        if (this.ligado) {
            console.log( this.nome + ' já está ligado')
            return;
        }
        this.ligado = true;

    };
    desligar () {
        if (!this.ligado) {
            console.log( this.nome + ' já Desligado')
            return;
        }

        this.ligado = false;
    }
}
class smartPhone extends DispositivoEletronico {
    constructor(nome, cor,modelo) {
        super(nome);
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome,temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Você alterou o método ligar')
    }
    falaOI() {
        console.log('oi')
    }
}

const t1 = new Tablet('Samsung', true)
const s1 = new smartPhone('S10', 'preto', 'Galaxy S10')
// s1.ligar()
console.log(s1)
t1.ligar();
t1.falaOI();

