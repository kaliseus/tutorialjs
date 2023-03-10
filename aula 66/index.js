// const numeros = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];
//
// const numerosEmDobro = [numeros.map((valor) => valor * 2)];
//
// console.log(numerosEmDobro);

const pessoas = [
    { nome:'Luiz' , idade: 62},
    { nome:'Maria' , idade: 23},
    { nome:'Eduardo' , idade: 55},
    { nome:'Leticia' , idade: 19},
    { nome:'Rosana' , idade: 32},
    { nome:'Wallace' , idade: 47}
];
// console.log(pessoas);

const nome  = pessoas.map((obj) => obj.nome);

const removeNome = pessoas.map((obj) =>
    // delete obj.nome;
    ({ idade : obj.idade }));

const addID = pessoas.map(function (obj,indice) {
    const newOBJ =  {...obj};
    newOBJ.id = indice + 1
    console.log(newOBJ);
});

console.log(pessoas);