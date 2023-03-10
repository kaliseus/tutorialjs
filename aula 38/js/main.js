const paragrafos = document.querySelector('.paragrafos');
let ps = document.querySelectorAll('p');


let stilosBody = getComputedStyle(document.body);
let backgroudColorBody = stilosBody.backgroundColor;

paragrafos.backgroundColor = backgroudColorBody;


for (let p of ps) {
    p.style.backgroundColor = backgroudColorBody;
    p.style.color = 'white';
}
