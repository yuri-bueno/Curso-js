const inputTarefa = document.querySelector(".input-tarefa");
const botaoTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


document.addEventListener("click", function(e) {
    const el = e.target;

    if (el.classList.contains("btn-tarefa")) {
        if (!inputTarefa.value) return;
        criartarefa(inputTarefa.value);
    }

    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefa();
    }

})

inputTarefa.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) { //apertar enter
        if (!inputTarefa.value) return;
        criartarefa(inputTarefa.value);
    }
})

function criartarefa(textoInput) {
    const li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    criarbotao(li);
    inputTarefa.value = "";
    inputTarefa.focus();
    salvarTarefa();
}

function criarLi() {
    const li = document.createElement("li");
    return li;
}

function criarbotao(li) {
    li.innerHTML += "  ";
    const btmApagar = document.createElement("button");
    btmApagar.innerHTML = "apagar";
    btmApagar.setAttribute("class", "apagar");
    btmApagar.setAttribute("title", "apagar essa tarefa");
    li.appendChild(btmApagar);
}

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerHTML;

        tarefaTexto = tarefaTexto.replace('<button class="apagar" title="apagar essa tarefa">apagar</button>', "").trim();

        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);

}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas)
    for (let tarefa of listaDeTarefas) {
        criartarefa(tarefa);

    }
}
addTarefasSalvas();