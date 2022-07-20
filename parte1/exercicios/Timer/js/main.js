const relogio = document.querySelector(".relogio")


let start = false;
let numeroContador = "00:00:00";
let intervalo;
let contador = 0

document.addEventListener("click", function(e) {

    const el = e.target;
    console.log(el)
    if (el.classList.contains("iniciar")) {

        iniciarp();
    } else if (el.classList.contains("pausar")) {
        pausarp();

    } else if (el.classList.contains("zerar")) {
        zerarp();
    }


})

function iniciarp() {
    clearInterval(intervalo)
    intervalo = setInterval(function() {
        contador++
        let data = new Date(contador * 1000);
        relogio.innerHTML = data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        })
    }, 1000)
    relogio.classList.remove("bad");
}

function pausarp() {
    clearInterval(intervalo)
    relogio.classList.add("bad");
}

function zerarp() {
    relogio.classList.remove("bad");
    contador = 0;
    relogio.innerHTML = "00:00:00";
}


function colocarzero(num) {

    if (num < 10) {
        return `0${num}`
    }

    return num;
}