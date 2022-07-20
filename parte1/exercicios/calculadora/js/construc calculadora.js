function CriaCalculadora() {




    const display = document.querySelector(".display")




    this.iniciar = () => {
        this.cliqueBotoes();
        this.enterbutton();
    };

    this.cliqueBotoes = () => {
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
    };

    this.btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus();
    };

    this.clearDisplay = () => {
        display.value = "";
    };

    this.deletarUltimo = () => {
        display.value = display.value.slice(0, -1);
    };

    this.enterbutton = () => {
        display.addEventListener("keyup", e => {
            if (e.keyCode === 13) { //apertar enter
                this.realizarConta();
            }
        });
    };

    this.realizarConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta)
            if (!conta) {
                alert("conta invalida");
                return;
            }
            display.value = String(conta);
        } catch (e) {
            alert("conta invalida");
            return;
        }
    }
};


const calculadora = new CriaCalculadora();
calculadora.iniciar();