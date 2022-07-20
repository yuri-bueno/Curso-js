function Pessoa(nome, sobrenome) {
    //atributos privados
    const ID = 123456;
    const metodoInterno = () => {

    };


    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ": sou um metodo")
    };
}



const p1 = new Pessoa("yuri", "martins;")

p1.metodo()