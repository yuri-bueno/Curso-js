let image = {
    altura: 50,
    largura: 200
}


//medirIMG(image.altura, image.largura);




let medir = (altura, largura) => altura > largura ? console.log("vertical") : console.log("paisagem");
medir(image.largura, image.largura)




function medirIMG(largura, altura) {


    if (largura > altura) {
        console.log("paisagem");

    } else if (largura < altura) {
        console.log("vertical");
    }

}