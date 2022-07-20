function esperaAi(msg, tempo = 1) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") {
            reject(false);
            return;
        }
        setTimeout(() => {

            resolve(msg + "- passei na promise");
            return;
        }, tempo * 1000);
    })
}


/*esperaAi("fase 1", 1)
    .then(msg => {
        console.log(msg)
        return esperaAi("frase 2")

    })
    .then(msg => {
        console.log(msg)
        return esperaAi("frase 3")
    }).then(msg => {
        console.log(msg)
    })
    .catch(e => {
        console.log(e)
    })*/
let arroz = 2
async function executa() {



    try {
        const fase1 = await esperaAi("fase 1", 1)
        console.log(fase1)
        const fase2 = await esperaAi(arroz, 1)
        console.log(fase2)
        const fase3 = await esperaAi("fase 3", 1)
        console.log(fase3)

        console.log("acabou")
    } catch (e) {
        arroz = "arroz"
        executa()
    } finally {
        console.log("mt quente")
    }

}
executa()