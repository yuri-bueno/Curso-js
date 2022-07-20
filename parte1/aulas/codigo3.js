/*const numeroTitulo = document.getElementById("numero");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Seu numero + 2 é ${numero+2}</p>`

*/

const pessoas = [];




function CriarClasse() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")
    form.addEventListener("submit", eventoForm);

    function eventoForm(evento) {

        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    };



    /* form.onsubmit = function(evento) {
         evento.preventDefault();

     };*/
}
CriarClasse();