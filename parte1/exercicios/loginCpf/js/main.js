class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario")

        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener("submit", e => {
            this.headleSubmit(e);
        })
    }

    headleSubmit(e) {
        e.preventDefault();
        const validado = this.checaCampos();
        const senhasValidas = this.validarSenhas();
        if (validado && senhasValidas) {
            alert("formulario enviado")
            this.formulario.submit();
        }
    }

    checaCampos() {
        let valid = true;

        for (let erroText of this.formulario.querySelectorAll(".error-text")) {
            erroText.remove();
        }

        for (const campo of this.formulario.querySelectorAll(".validar")) {
            const label = campo.previousElementSibling.innerText
            if (!campo.value) {
                console.log(campo.value)
                this.createError(campo, `${label} não pode está vazio.`)
            }
            if (campo.classList.contains("cpf")) {
                if (!this.validaCPF(campo)) valid = false
            }
            if (campo.classList.contains("usuario")) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }
        return valid

    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, "usuário precisa ter entre 3 e 12 caracteres")
            valid = false
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, "nome de usuário precisa ter só letras ou numero")
            valid = false
        }
        return valid
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.createError(campo, "cpf invalido.")
            return false

        }
        return true
    }
    createError(campo, msg) {
        const div = document.createElement("div")
        div.innerHTML = msg;
        div.classList.add("error-text")
        campo.insertAdjacentElement("afterend", div)

    }
    validarSenhas() {
        let valid = true;
        const senha1 = this.formulario.querySelector(".senha")
        const senha2 = this.formulario.querySelector(".repetir-senha")
        if (senha1.value !== senha2.value) {
            this.createError(senha1, "a senha devem ser iguais")
            this.createError(senha2, "a senha devem ser iguais")
            valid = false
        }
        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.createError(senha1, "senha precisa ter entre 6 e 12 caracteres")
            valid = false
        }
        return valid
    }
}

const valida = new ValidaFormulario();