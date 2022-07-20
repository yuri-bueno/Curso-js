function criarMultiplicador(x) {

    return function(n = 1) {
        return n * x;
    };
}
const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadriplicar = criarMultiplicador(4);
console.log(duplicar());
console.log(triplicar(2))
console.log(quadriplicar(2));


(function(x) {

})(x);