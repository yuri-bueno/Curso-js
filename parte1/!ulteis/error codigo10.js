let cu = 10;
let zinho = 11;
try {

    if (cu > zinho) {
        console.log("cuzinho");
    } else {
        throw new Error("n é cuzinho :C")
    }
} catch (error2) {
    console.log(error2)
}


try {
    //quando n tem erros;-
} catch (e) {
    //é executado quando há erros
} finally {
    //sempre
}