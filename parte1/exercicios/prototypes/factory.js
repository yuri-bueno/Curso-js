const andar = {
    andar() {
        console.log(`${nome} está andando.`);
    },
};


//const pessoaPrototype = {...andar,..sla }
//const pessoaPrototype = Object.assign({},falar,sla)

function criaPessoa(nome, sobrenome) {


    const pessoaPrototype = {

        falar() {
            console.log(`${nome} está falando.`)
        },
        comer() {
            console.log(`${nome} está comendo.`)
        },
        beber() {
            console.log(`${nome} está bebendo.`)
        },
    }
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });

}

const p1 = criaPessoa("luiz", "otavio")
console.log(p1)