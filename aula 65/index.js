// const numeros = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];
//
//
// const numerosFiltrados = numeros.filter((valor, indice, array) => { //filter sempre vai retornar um array, com a mesma quantidade de elementos ou menos
//     console.log(valor, indice, array);
//     return valor > 10;
// }
// );
// console.log(numerosFiltrados);


const pessoas = [
    { nome:'Luiz' , idade: 62},
    { nome:'Maria' , idade: 23},
    { nome:'Eduardo' , idade: 55},
    { nome:'Leticia' , idade: 19},
    { nome:'Rosana' , idade: 32},
    { nome:'Wallace' , idade: 47}
];

const pessoasComNomeGrande = pessoas.filter((valor) => valor.nome.length > 5);
const pessoasComMaisDeCinquenta = pessoas.filter((valor) => valor.idade > 50);
const pessoasQueTerminamComA = pessoas.filter((valor) => valor.nome.toLowerCase().endsWith('a'))

// console.log(pessoasComNomeGrande)
// console.log(pessoasComMaisDeCinquenta)
// console.log(pessoasQueTerminamComA)