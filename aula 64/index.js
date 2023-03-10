const num1 = [1,2,3]
const num2 = [4,5,6];

const numeros = [...num1, ...num2, 'Luiz', ...[7,8,9]]; // concatenação de arrays por spread operator
// const numeros = num1.concat(num2,[7,8,9],'Luiz'); //concatenação padrão

console.log(numeros)