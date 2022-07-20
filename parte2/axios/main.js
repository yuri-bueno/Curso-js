const resultado = document.querySelector(".resultado")
let pessoaDaVez = 0

document.addEventListener("click", e => {
    const el = e.target
        //let pessoaDaVez = 0
        //const tag = el.tagName.toLowerCase();

    if (el.classList.contains("voltar")) {
        e.preventDefault();
        if (pessoaDaVez > 0) pessoaDaVez--;
        mudarPessoa(pessoaDaVez);
    }
    if (el.classList.contains("avancar")) {
        e.preventDefault();
        pessoaDaVez++;
        mudarPessoa(pessoaDaVez);
    }
    console.log(pessoaDaVez)
})

async function mudarPessoa(index) {

    json = await axios("pessoas.json").then(resposta => resposta.data)

    const obj = json[index]
    resultado.innerHTML = ""

    for (const coisa in obj) {


        resultado.innerHTML += `${ obj[coisa]} </br>`


    }
}

// <script src="https://unpkg.com/axios/dist/axios.min.js"></script> // como chama o axios  
axios("pessoas.json").then(resposta => { // to usando pra nada
    resposta.data
})