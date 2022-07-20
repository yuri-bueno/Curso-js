const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "text.json")
const escrever = require("./modulos/escrever")
const ler = require("./modulos/ler")

const pessoa = [
    { nome: "yuri", },
    { nome: "lucas", },
    { nome: "arroz", },
    { nome: "pix", }
]


const json = JSON.stringify(pessoa, "", 2)

//escrever(caminhoArquivo, json)


async function leArquivo(caminho) {

    const dados = await ler(caminho);
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);