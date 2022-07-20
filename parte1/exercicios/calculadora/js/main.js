function criaCalculadora() {


    return {

        display: document.querySelector(".display"),




        iniciar() {
            this.cliqueBotoes();
            this.enterbutton()
        },
        cliqueBotoes() {
            document.addEventListener("click", e => { // administrar os clicks
                const el = e.target;

                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);

                }
                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();

                }
                if (el.classList.contains("btn-del")) {
                    this.deletarUltimo();

                }
                if (el.classList.contains("btn-eq")) {
                    this.realizarConta();

                }


            } /*.bind(this)*/ ); //trocar o this
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        },
        clearDisplay() {
            this.display.value = "";
        },
        deletarUltimo() {
            this.display.value = this.display.value.slice(0, -1);
        },
        enterbutton() {
            this.display.addEventListener("keyup", e => {
                if (e.keyCode === 13) { //apertar enter
                    this.realizarConta();
                }
            })
        },

        realizarConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if (!conta) {
                    alert("conta invalida");
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("conta invalida");
                return;
            }
        }
    };
};

const calculadora = criaCalculadora();
calculadora.iniciar();