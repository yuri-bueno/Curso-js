const _velocidade = Symbol("velocidade"); //descrição muda nada



class Carro {
    constructor(nome, qualquer) {
        this.nome = nome;
        this[_velocidade] = 0;

    }

    set velocidade(valor) {
        if (typeof valor !== "number") return;
        if (valor >= 100 || valor <= 0) return;

        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {

        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

    parar() {
        this[_velocidade] = 0
    }
}

const c1 = new Carro("Fusca")

for (let i = 0; i < 200; i++) {
    c1.acelerar()

}
c1.velocidade = 23; //setter
console.log(c1.velocidade) //getter
c1.parar()

console.log(c1)