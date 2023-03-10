// arguments sustenta todos os argumentos enviados para a função

const conta = (...numeros) => {
    console.log(numeros)
};

conta('+', 1, 20,30,40,50);