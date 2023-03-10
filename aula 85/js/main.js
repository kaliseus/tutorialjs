class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos()
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);

        } )
    }
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas) {
            alert('Formulário enviado')
            this.formulario.submit();
        }
    }
    senhasSaoValidas () {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.createError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'senha precisa estar entre 6 e 12 caracters')
        }
        return valid
    }
    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-message')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.valid')) {
            let label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.createError(campo,`Campo ${label} não pode estar vazio`)
                valid = false;
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length > 12 || usuario.length < 3 ) {
            this.createError(campo, 'O usuário deve conter entre 3 a 12 carcteres')
            valid = false
        }
        if(!usuario.match(/[a-zA-Z0-9]+$/g)) {
            this.createError(campo, 'nome de usuário precisa conter apenas letras ou números')
            valid = false
        }
        return true;
    }
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.createError(campo, 'CPF inválido');
            return false
        }
        return true
    }
    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerText = msg
        div.classList.add('error-message');
        campo.insertAdjacentElement('afterend',div);
    }
}

const valida = new ValidaFormulario;