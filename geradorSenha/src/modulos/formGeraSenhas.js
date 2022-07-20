import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada")

const quantidade = document.querySelector(".qtd-caracteres")

const chkMaiusculas = document.querySelector(".chk-maiusculas")
const chkMinusculas = document.querySelector(".chk-minusculas")
const chkNumeros = document.querySelector(".chk-numeros")
const chkSimbolos = document.querySelector(".chk-simbolos")

const input = document.querySelector(".gerar-senha")
export default () => {
    input.addEventListener("click", () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
        quantidade.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked

    );

    return senha || "nada selecionado.";
}