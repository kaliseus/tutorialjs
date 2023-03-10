function Produto(nome,preco,estoque) {
    Object.defineProperties(this, {
       nome: {
           enumerable: true, //mostra a chave
           value: estoque, // define o valor
           writable: true, // define se pode ser alterado seu valor
           configurable: false // pode apagar ou editar a chave
       },
       preco: {
           enumerable: true, //mostra a chave
           value: estoque, // define o valor
           writable: true, // define se pode ser alterado seu valor
           configurable: false // pode apagar ou editar a chave
       }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: false, //mostra a chave
        value: estoque, // define o valor
        writable: true, // define se pode ser alterado seu valor
        configurable: false // pode apagar ou editar a chave
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))


for (let chave in p1) {
    console.log(chave)
}