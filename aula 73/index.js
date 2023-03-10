const produto = {
    nome: 'camiseta',
    preco: 1.80
}
// const caneca = {
//     nome: produto.nome,
//     preco: produto.preco
// }

// const outraCoisa = {...produto} // copiando valores por spread operator
// const outraCoisa = Object.assign({}, produto); // copiando valores da constante para outra constante, primeira parametro é o tipo, segundo a variável a ser copiada
// Object.defineProperty(produto, 'nome', { // primeiro passa a váriavel, segundo a cheva e em 3 os atributos a serem alterados
//     writable:false,
//     configurable: false,
//     value: 'Outra coisa'
// });
// produto.nome = 'coisa'
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))// pega as propriedados do objeto

// console.log(Object.values(produto)) // pega os valore do objeto
// console.log(Object.entries(produto)) // retoarn a chave e valor em forma de array separadamente

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}