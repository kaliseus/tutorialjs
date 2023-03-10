//super classe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente`)
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
};

Conta.prototype.depositar = function (valor) {
    this.saldo +=valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta}` +
     ` Saldo: R$${this.saldo.toFixed(2)}`
    );
}

// const conta1 = new Conta(11,22,10);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor, limite) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente`)
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const cc = new ContaCorrente(11,22,0,100);
const cp = new ContaPoupanca(12,33,0)

cc.depositar(10);
cc.sacar(90);
console.log(cc);

cp.depositar(10);
cp.sacar(90);
cp.sacar(10);
console.log(cp);
