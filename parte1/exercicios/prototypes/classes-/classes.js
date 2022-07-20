class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

    }
    fala() {
        console.log(`${this.nome} está falando.`)
    }
    comer() {
        console.log(`${this.nome} está falando.`)
    }
    bebe() {
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa("yuri", "bueno")