import ValidaCPF from "./validaCpf";


export default class GeraCPF {

    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf) {
        return (cpf.slice(0, 3) + "." +
            cpf.slice(3, 6) + "." +
            cpf.slice(6, 9) + "-" +
            cpf.slice(9, 11))

    }

    geraNovoCpf() {
        const cpfsemdigito = this.rand();
        const digito1 = ValidaCPF.criaDigito(cpfsemdigito)
        const digito2 = ValidaCPF.criaDigito(cpfsemdigito + digito1)
        const NovoCpf = cpfsemdigito + digito1 + digito2
        return this.formatado(NovoCpf)
    }
}