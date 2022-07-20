const elementos = [
    { tag: "p", texto: "qualquer coisa" },
    { tag: "div", texto: "qualquer coisa2" },
    { tag: "section", texto: "qualquer coisa3" },
    { tag: "footer", texto: "qualquer coisa4" }
];

const container = document.querySelector(".container")
const div = document.createElement("div")

for (let i = 0; i < elementos.length; i++) {

    let { tag, texto } = elementos[i];
    let tagcriada = document.createElement(tag)

    tagcriada.innerHTML = texto;
    div.appendChild(tagcriada);


}
container.appendChild(div)