const numeros = [1,2,3,5,6,7,8,9,0]
// continue, continua para a próxima iteração

//break sai do laço


let i = 0
do {

    let numero = numeros[i];
    if (numero === 2) {
        console.log('pulei o número 2')
        i++;
        continue;
    }

    if (numero === 7) {
        console.log(numero);
        i++;
        break
    }
    console.log(numero);
    i++;
} while ( i < numeros.length)