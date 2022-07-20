class DispositoEletronic {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }


    ligar() {
        if (this.ligado) {
            console.log(this.nome + " já ligado")
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + " já está desligado ")
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositoEletronic { //herdar prototype (precisa do super)
    constructor(nome, cor, modelo) {
        super(nome); //chamar o constructor
        this.cor = cor;
    }
};

const d1 = new DispositoEletronic("celulinho")
const s1 = new Smartphone("samsung", "preto", "galaxy  s10")

console.log(s1)