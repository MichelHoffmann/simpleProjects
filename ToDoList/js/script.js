function meuEscopo() {
  const input = document.querySelector(".input");
  const uList = document.querySelector(".uList");
  const button = document.querySelector(".button");
  let valorInput = "";

  button.addEventListener("click", inicia);
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      inicia();
    }
  });

  document.addEventListener("click", function (e) {
    const bt = e.target;
    if (bt.classList.contains("btExcluir")) {
      excluirItemLista(bt);
      salvarTarefas();
    }
  });

  function excluirItemLista(bt) {
    bt.parentElement.remove();
  }

  function inicia() {
    pegaInputValue();
    criaLi(valorInput);
    salvarTarefas();
  }

  function pegaInputValue() {
    valorInput = input.value;
    input.value = "";
    return valorInput;
  }

  function criaLi(valorQualquer) {
    let li = document.createElement("li");
    li.classList.add("list");
    li.innerHTML = valorQualquer;
    uList.appendChild(li);
    criaBtExcluir(li);
  }

  function criaBtExcluir(li) {
    let btExcluir = document.createElement("button");
    btExcluir.innerHTML = "X";
    btExcluir.classList.add("btExcluir");
    li.appendChild(btExcluir);
  }

  function salvarTarefas() {
    const liTarefas = uList.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace("X", "");
      listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
  }

  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listadeTarefas = JSON.parse(tarefas);

    for (let tarefa of listadeTarefas) {
      criaLi(tarefa)
    }
  }
  adicionaTarefasSalvas();
}

meuEscopo();
