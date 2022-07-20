function Conta(agencia, conta, saldo) {

    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;




}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)

        return
    };
    this.saldo -= valor
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c:${this.agencia}/${this.conta} | saldo: R$${this.saldo.toFixed(2)}`)
};


/*const conta = new Conta(11, 22, 10)



conta.depositar(11)
conta.depositar(10)
conta.sacar(30)
conta.sacar(0.01)
    //console.log(conta)*/

function CC(angecia, conta, saldo, limite) {
    Conta.call(this, angecia, conta, saldo);
    this.limite = limite;

}

CC.prototype = Object.create(Conta.prototype);
CC.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)

        return
    };
    this.saldo -= valor
    this.verSaldo();
};

const contaCorret = new CC(11, 22, 0, 100)


contaCorret.depositar(10)
contaCorret.sacar(110)
contaCorret.sacar(1)