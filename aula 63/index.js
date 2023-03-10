const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nome = nomes.splice(3,0, 'Luiz', 'Pedro'); // adiciona passando indice
// nome = nomes.splice(-1,1); // remove do final igualmente o pop
// nome = nomes.splice(0,1); // remove do inicio igualmente o shift
// nome = nomes.splice(nomes.length,0, 'Tadeo'); // adiciona ao final simulando o push
nome = nomes.splice(0,0, 'Tadeo'); // adiciona ao inicio simulando o unshift
console.log(nomes);
console.log(nome);
console.log(Number.MAX_VALUE);