function soma (x, y) {
    if (isNaN(x) || isNaN(y)){
        throw ('x e y precisam ser numeros');
    }
    return x + y;
}

try {
    console.log(soma(1,2))
    console.log(soma(1,'a'))
}catch (error) {
    console.log(error)
}
