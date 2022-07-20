/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]





const numerosPares = numeros
    .filter(valor => valor % 2 === 0) //filter checa se é positivo a condição e cria uma array com o cada resultado
    .map(valor => valor * 2) //map faz uma operação com cada resultado cria uma array com todos
    .reduce((ac, valor) => ac + valor) //msm coisa q o map mas a primeira variavel é a soma de tudo ps:zerar o acumulo
console.log(numerosPares);


numeros.forEach((valor, indice, array) => console.log(valor, indice))

*/


const arr = [1, 5, 6, 7, 8, 6, 4, 6, 5, 1000]


let arroz = arr.filter((valor, index) => {
    // console.log(arr.indexOf(valor), index, arr.indexOf(valor) == index)
    return arr.indexOf(valor) == index
})

//console.log(arroz)


for (let index = 0; index < arr.length; index++) {

    if (arr.indexOf(arr[index]) == index) {
        console.log(arr[index])
    }


}