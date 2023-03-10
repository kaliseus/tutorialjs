const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Otávio'
}

for (let valor of pessoa) {

}

// const nomes = ['Luiz', 'Otávio', 'Henrique'];
//
// for (let i = 0; i< nomes.length; i++) { // for clássico geralmente iteráveis, como arrays ou strings
//     console.log(nomes[i]);
// }
//
// console.log('########');
//
// for (let i in nomes){ // for in retorna o indice ou chave
//     console.log(nomes[i]);
// }
//
// console.log('########');
//
// for ( let valor of nomes) { // for of retorna o valor em si (iteráveis, arrays ou strings)
//     console.log(valor);
// }
//
// console.log('########');
//
// nomes.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// })