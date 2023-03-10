
//
// function getDiaSemanaTexto (diaSemana) {
//     let diaSemanaTexto;
//
//     switch (diaSemana.getDay()) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabádo';
//             return diaSemanaTexto;
//         default :
//             diaSemanaTexto = undefined;
//     }
// }
//
// function getMes (data) {
//     let dataMes;
//     switch (data.getMonth()) {
//         case 0:
//             dataMes = 'Janeiro';
//             return dataMes;
//         case 1:
//             dataMes = 'Fevereiro';
//             return dataMes;
//         case 2:
//             dataMes = 'Março';
//             return dataMes;
//         case 3:
//             dataMes = 'Maio';
//             return dataMes;
//         case 4:
//             dataMes = 'Abril';
//             return dataMes;
//         case 5:
//             dataMes = 'Junho';
//             return dataMes;
//         case 6:
//             dataMes = 'Julho';
//             return dataMes;
//         case 7:
//             dataMes = 'Agosto';
//             return dataMes;
//         case 8:
//             dataMes = 'Setembro';
//             return dataMes;
//         case 9:
//             dataMes = 'Outubro';
//             return dataMes;
//         case 10:
//             dataMes = 'Novembro'
//             return dataMes;
//         case 11:
//             dataMes = 'Dezembro'
//             return dataMes;
//         default :
//             dataMes = undefined;
//     }
// }
// const dataFormatada =  (data) => {
//     const getMinute = (data) => {
//         if(data.getMinutes() < 10) {
//             return ` 0${data.getMinutes()}`;
//         }else {
//             return data.getMinutes();
//         }
//     }
//
//     return `${getDiaSemanaTexto(data)}, ${data.getDay()} de ${getMes(data)} de ${data.getFullYear()} <br> <br>
//     ${data.getHours()}:${getMinute(data)}`
//
// }

const h1 = document.querySelector('.container h1')
const data = new Date();


h1.innerHTML = `${data.toLocaleDateString('pt-BR', {dateStyle: 'full'})}` // com a documentação do mdn



