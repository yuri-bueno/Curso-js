const pessoas = [
    { id: 3, nome: "yuri" },
    { id: 1, nome: "lucas" },
    { id: 2, nome: "caio" }

]

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa }) //faz um mapeamento de objeto e chave    chave e objeto dupla  

}
console.log(novasPessoas)
console.log(novasPessoas.get(2))