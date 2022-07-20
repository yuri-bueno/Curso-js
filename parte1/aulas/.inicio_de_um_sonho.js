let resultado1 = prompt(`o numero :`);
let resultado2 = prompt(`é maior q:`);
resultado1 = Number(resultado1);
resultado2 = Number(resultado2);
Emaior(resultado1, resultado2);

var nome = "arroz"

nome.indexOf(nome[0])



function Emaior(resultado, numero) {



    if (!isNaN(resultado)) {
        if (resultado > numero) {

            alert(`sim, é maior q ${numero}`);
        } else {
            alert(`não, não é maior q ${numero}`);
        }
    } else {
        alert('isso não é um numero');

        let resultado3 = prompt(`é maior ${numero}`);
        emaior(resultado3, numero);
        resultado3 = Number(resultado3);
    }
}