let compras = ['leite', 'vaca', 'peixe', 'arroz', 'doce'];



for (let item of compras) {


    if (item === "peixe") {
        console.log(`achou o ${item}`);
        continue;
    } else if (item === "arroz") {
        console.log(`parou no ${item}`);
        break;
    } else {
        console.log(item);
    }


}