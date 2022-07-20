 function Produtos(nome, preco, estoque) {
     this.nome = nome;
     this.preco = preco;


     Object.defineProperties(this, { //varios objetos
         nome: {
             enumerable: true, //não mostrar nas chaves 
             value: nome, // valor
             writable: true, //pode ser alterado por fora
             configurable: true // pode ou n ser reconfigurado o defineProperty
         },
         preco: {
             enumerable: true, //não mostrar nas chaves 
             value: preco, // valor
             writable: true, //pode ser alterado por fora
             configurable: true // pode ou n ser reconfigurado o defineProperty
         },
     })
     Object.defineProperty(this, "estoque", { //um objeto só

         enumerable: false, //não mostrar nas chaves 

         configurable: false, // pode ou n ser reconfigurado o defineProperty

         get: function() {
             return estoque;
         },
         set: function(valor) {
             console.log(valor)
         }

     })



 }

 const p1 = new Produtos("camisa", 20, 3);

 //console.log(Object.keys(p1))

 // p1.estoque = "cu"

 //Object.freeze(p1.estoque) //trancar objeto

 //Object.entries(p1) // retorna um array de cada coisa do objeto e seu valor

 //Object.values(p1) //retorna o valor
 //Object.getOwnPropertyDescriptor(p1, "estoque")//retorna as propiedades de algo do objeto


 //Object.assign(destino,(objeto q vc quer copiar)) // é a msm coisa q criar um {...p1



 const arroz = {
     arroz: "doce"
 }