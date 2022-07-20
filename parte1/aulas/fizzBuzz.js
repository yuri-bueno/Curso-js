function fizzBuzz(numero) {

    let teste3 = (numero % 3);
    let teste5 = (numero % 5);


    if (isNaN(numero)) {
        return numero
    }
    if (teste3 === 0 && teste5 === 0) {
        return "FizzBuzz";

    }
    if (teste3 === 0) {
        return "Fizz";
    }
    if (teste5 === 0) {
        return "Buss";
    }
    if (teste3 !== 0 && teste5 !== 0) {
        return numero;
    }




}


for (let i = 0; i < 100; i++) {

    console.log(i, fizzBuzz(i));



}