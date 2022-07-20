const numeros = [5, 65, 54, 2, 6, 7, 65, 4, 7, 57]

let numerosFiltro = [];

function callbackFilter(valor, /*indice, array*/ ) {

    return valor < 10 //? true : false;



    /*for (let i = indice; i < array.length; i++) {

        if (valor < array[i]) numerosFiltro.push(array[i]);

    }*/

}


const numerosMenorQ10 = numeros.filter(valor => valor < 10)



const pessoas = [
    { nome: "luiz", idade: 62, },
    { nome: "maria", idade: 23 },
    { nome: "eduardo", idade: 55 },
    { nome: "leiticia", idade: 19 },
    { nome: "rosana", idade: 32 },
    { nome: "wallace", idade: 47 },
]

const pessoasmenos = pessoas.filter((valor) => valor.nome.length >= 5)
const pessoasmenos2 = pessoas.filter((valor) => valor.idade > 50)
const pessoasmenos3 = pessoas.filter((valor) => valor.nome[valor.nome.length - 1] === "a")




console.log(pessoasmenos)
console.log(pessoasmenos2)
console.log(pessoasmenos3)