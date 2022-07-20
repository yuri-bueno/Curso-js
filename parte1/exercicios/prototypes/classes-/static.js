 class Controle {
     constructor(tv) {
         this.tv = tv;
         this.volume = 0;
     }

     aumentarVolume() { //  metodo de instancia
         this.volume += 2;
     }
     diminuirVolume() { //  metodo de instancia
         this.volume -= 2;
     }

     static trocaPilha() { //  metodo estático função q  só pode ser chamado pela classe 
         console.log(this) //não tem os dados do constructor
     }

 }




 const tv1 = new Controle("samsung")
 tv1.aumentarVolume()
 tv1.aumentarVolume()
 tv1.aumentarVolume()
 console.log(tv1)