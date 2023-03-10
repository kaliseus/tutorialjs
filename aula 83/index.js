function teste () {
    console.log(this)
}

class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
        teste ();

    }

    //método de instancia referente a instancia do objeto
    aumentarVolume() {
        this.volume += 2;
    }
    //método de instancia referente a instancia do objeto
    diminuirVolume() {
        this.volume -= 2;
    }

    //método estático referente a classe
    static trocaPilha() {
        // console.log('ok Vou trocar')
        console.log(this.volume);
    }
    static soma(x,y) {
        console.log(this)
    }
}

const controle1 = new ControleRemoto('lg');

ControleRemoto.soma(1,2);
