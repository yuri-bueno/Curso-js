function* geradora13() {

    yield "valor1";

    yield "valor2";

    yield null;

    yield* geradora14();
}

function* geradora14() {

    yield "valor4";
}
const gerador = geradora13();

for (let x of gerador) {

    if (!x) continue;

    console.log(x)


}



console.log(gerador.next().value)
console.log(gerador.next())
console.log(gerador.next())
console.log(gerador.next())
console.log(gerador.next().done)