// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// const data = new Date('2019-04-20 20:20:59:100');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());// mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('ms', data.getMilliseconds());
//
// console.log('Dia Semana', data.getDay()); // começa em 0
// console.log(data.toString())
//
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num < 10 ? num : `0${num}`;
}

function formatDate (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formatDate(data);

formatDate(dataBrasil);