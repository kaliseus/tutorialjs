function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.deconto = function (desconto) {
    this.preco = this.preco - (this.preco * (desconto / 100));
}

Produto.prototype.aumenta = function (desconto) {
    this.preco = this.preco + (this.preco * (desconto / 100));
}

const p1 = new Produto('Camiseta', 50);
const p2 = Object.create(Produto.prototype); //criando um objheto litaral e setadno seus prototipos da função construtora Produto
p2.nome = 'Caneca';
p2.preco =  30;

// Object.setPrototypeOf(p2, Produto.prototype)
p2.deconto(10);
// console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2 : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})
p3.aumenta(10)
console.log(p3)