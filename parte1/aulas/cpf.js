let cpf = "070.987.720-03";

const numerosVs = [7, 0, 5, 4, 8, 4, 4, 5, 0, 5]

//let cpfLimpo = cpf.replace(/\D+/g, "");



/*let cpfparte = cpfArray.reduce((montante, valor, index, Array) => {



    let numeroTemp = Number(valor) * numerosVs[index]

    if (numeroTemp > 0) { montante += numeroTemp };



    console.log(valor, numerosVs[index], valor * numerosVs[index], montante)

    // console.log(montante)

    return montante
}, 0);*/


function calcular(cpf) {


    let cpfPronto = Array.from(cpf.replace(/\D+/g, "")) //só numero
    cpf = cpfPronto
    let cpfArray = cpfPronto.slice(0, -2) //menos 2 digitos 

    cpfPronto = reduzir(cpfArray)

    let resultado = Number((11 - (cpfPronto % 11)) > 9) ? 0 : 11 - (cpfPronto % 11)


    cpfArray.push(resultado)

    cpfPronto = reduzir(cpfArray)
    resultado = ((11 - (cpfPronto % 11)) > 9) ? 0 : 11 - (cpfPronto % 11)

    cpfArray.push(resultado.toString())


    console.log(cpfArray.toString(), cpf.toString())
    console.log(cpfArray.toString() == cpf.toString())
    if (cpfArray.toString() == cpf.toString()) {
        return "cpf valido"
    } else {
        return "cpf invalido"
    }


}

function reduzir(Array) {
    return Array.reduce((montante, valor, index) => {
        let numeroTemp = valor * ((Array.length + 1) - index)
        if (numeroTemp > 0) { montante += numeroTemp };
        // console.log(valor, value - index, valor * (value - index), montante)
        //console.log(montante
        return montante
    }, 0);
}


//calcular(cpf)
console.log(calcular(cpf))