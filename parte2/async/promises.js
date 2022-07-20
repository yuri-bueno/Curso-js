 function esperaAi(msg, tempo) {
     return new Promise((resolve, reject) => {

         setTimeout(() => {
             if (typeof msg !== "string") {
                 reject(false);
                 return;
             }
             resolve(msg + "- passei na promise");
             return;
         }, tempo * 1000);
     })
 }





 /* esperaAi("pegando BD", 4)
      .then(resposta => {

          return esperaAi("fazendo calculo", 2)
      })
      .then(resposta => {

          return esperaAi("42", 1)
      })
      .catch(e => {()
          console.log(e)
      })*/

 const promises = [
     "primeira valor",
     esperaAi("promise 1", 0),
     esperaAi("promise 2", 0),
     esperaAi("promise 3", 0),
     esperaAi(11, 0),
     "outro valor"
 ]

 Promise.all(promises).then(e => { //se todas forem aceitas faça o then
     console.log(e)
 }).catch(erro => {
     console.log(erro) // se uma for recusada faça o cath
 })


 const promises2 = [
     esperaAi("promise 1", 0),
     esperaAi("promise 2", 0),
     esperaAi("promise 3", 0),
     esperaAi(11, 0)
 ]

 Promise.race(promises).then(e => { //se a primeira for aceita faça o then
     console.log(e)
 }).catch(erro => {
     console.log(erro) // se a primeira for recusada faça o cath
 })