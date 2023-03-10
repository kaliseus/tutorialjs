function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (percent) {
    this.preco += percent;
}

Produto.prototype.desconto = function (percent) {
    this.preco -= percent;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function (percent) {
    this.preco = this.preco + (this.preco * (percent / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco, material);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'preta');
const caneca = new Caneca('Dragon', 10, 'Porcelana', 10);


console.log(caneca.estoque)
console.log(caneca)
console.log(camiseta)
console.log(produto)