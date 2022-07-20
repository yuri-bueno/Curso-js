const form = document.querySelector("#form");



form.addEventListener("submit", function(e) {

    e.preventDefault();
    const pesoInput = e.target.querySelector("#peso");
    const alturaInput = e.target.querySelector("#altura");

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso || !altura) {
        setResultado("informação invalida", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivel(imc);

    const msg = `seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
})

function setResultado(msg, isvalid) {

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criarParagrafo();


    if (isvalid) {
        p.classList.add("paragrafo-resultado");

    } else {
        p.classList.add("bad");

    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criarParagrafo() {
    const p = document.createElement("p");
    return p;
}

function getNivel(imc) {
    const nivel = ["abaixo do peso", "peso normal", "sobrepeso", "obesidade1", "obesidade2", "obesidade3"]

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}