let numeros = []
function FizzBuzz (numero) {
    if (typeof numero !== 'number') {
        return numero
    }
    if(numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz'
    }
    if( numero % 3 === 0 ) {
        return 'Fizz'
    }
    if ( numero % 5 === 0 ) {
        return 'Buzz'
    }
    else {
        return numero
    }
}

for (let i = 0; i <= 100; i++){
    numeros.push(i);
    console.log(i, FizzBuzz(numeros[i]));

}

console.log(FizzBuzz('a'));