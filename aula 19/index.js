/**
 * tipos primitivos(imutaveis) string, number, boolean, null, undefined, bigint, symbol são valores copiados
 *
 * tipos de dados por refêrencia () mutável - array, object, function - passados por referência
 */


// let a = [1,2,3];
// // passando valor por referência
// let b = a;
// // copiando o valor de a para c
// let c = [...a];
//
// console.log(a,b);
//
// a.push(4);
// console.log(a, b);
//
// b.pop();
// console.log(a,b);
//
// c.pop();
// console.log(a, b, c);

const a = {
    nome: "Luiz",
    sobreNome: "Otávio"
};

const b = a;

const c = {...a}; // criando uma cópia de a em c
a.nome = "João";
console.log(a);
console.log(b);
console.log(c);
