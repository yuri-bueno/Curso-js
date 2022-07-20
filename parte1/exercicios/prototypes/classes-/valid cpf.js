class ValidaCPF {
    constructor(cpf) {
        this.cpf = cpf;
        Object.defineProperty(this, "cpfLimpo", {
            get: function() {
                return cpf.replace(/\D+/g, "")
            }
        });
    }



    valida() {
        if (typeof this.cpfLimpo === "undefined") return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.criaDigito(cpfParcial)
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1)
        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    }
    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regrssivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {


            ac += (Number(val) * regrssivo)
            regrssivo--;

            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        console.log(digito)
        return digito > 9 ? "0" : String(digito);

    }
    isSequencia = function() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo;

    };
}
const cpf = new ValidaCPF("705.484.450-52")
console.log(cpf.valida())