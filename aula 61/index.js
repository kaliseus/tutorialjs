function* geradora1 () {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();

function*  geradora2 () {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

const g2 = geradora2();

function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield*  geradora3();
    // yield*  geradora2();
    yield*  geradora1();
    yield 4;
}

const g4 = geradora4();
function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };

    // return function () {
    //     console.log('vim do return') // return não deixara que a yoel abaixo seja executado
    // }

    yield function () {
        console.log('Vim do yild 2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
