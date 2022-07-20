 const data = new Date();
 const data2 = new Date(2002, 3, 2, 19, 54, 32);
 const data3 = new Date("2002-04-02 20:17:52.100");
 //console.log(data3.toString());
 /*
 console.log("dia", data.getDate());
 console.log("mes", data.getMonth()); //mes começa no 0
 console.log("ano", data.getFullYear());
 console.log("hora", data.getHours());
 console.log("minuto", data.getMinutes());
 console.log("segundo", data.getSeconds());
 console.log("dia da semana", data.getDay()); // domingo = 0 e sabado = 6
 */
 let diaDasSemana = data.getDay();
 let diaDasSemanaTXT;

 switch (diaDasSemana) {
     case 0:
         diaDasSemanaTXT = "domingo"
         break;
     case 1:
         diaDasSemanaTXT = "segunda"
         break;
     case 2:
         diaDasSemanaTXT = "terça"
         break;
     case 3:
         diaDasSemanaTXT = "quarta"
         break;
     case 4:
         diaDasSemanaTXT = "quinta"
         break;
     case 5:
         diaDasSemanaTXT = "sexta"
         break;
     case 6:
         diaDasSemanaTXT = "sabado"
         break;
     default:
         diaDasSemanaTXT = ""
         break;
 }


 //console.log(diaDasSemana, diaDasSemanaTXT)
 let data5 = new Intl.DateTimeFormat('pt-BR', { dateStyle: "short", timeStyle: "short" }).format(new Date())
     //data.toLocaleDateString("pt-BR", { dateStyle: "full", timeStyle: 'short' })
 console.log(data5)