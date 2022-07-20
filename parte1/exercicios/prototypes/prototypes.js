function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * percentual / 100)
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); //herdar o prototype da função produto
Camiseta.prototype.constructor = Camiseta; //mostrar quem foi o constructor



function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== "number") return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype); //herdar o prototype da função produto
Caneca.prototype.constructor = Caneca; //mostrar quem foi o constructor
//Object.setPrototypeOf(p3, Produto.prototype) //setar o Prototype
const produto = new Produto("gen", 150);
const camisa = new Camiseta("regata", 78, "azul");
const caneca = new Caneca("disney", 32, "plastico", 20);





const p3 = Object.create(Produto.prototype, {});
//Object.setPrototypeOf(p3, Produto.prototype) //setar o Prototype
p3.desconto(50)
    //console.log(p3)


//console.log(caneca)
//console.log(camisa)
//console.log(produto)