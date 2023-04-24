function meuEscopo() {
  const input = document.querySelector(".input");
  const uList = document.querySelector(".uList");
  const button = document.querySelector(".button");
  let value = "";

  button.addEventListener("click", inicia);

  function inicia() {
    pegaInputValue();
    criaLi();
  }

  function pegaInputValue() {
    value = input.value;
    input.value = "";
    return value;
  }

  function criaLi() {
    let li = document.createElement("li");
    li.classList.add("list");
    li.innerHTML = value;
    uList.appendChild(li);
    criaBtExcluir(li);
  }

  function criaBtExcluir(li) {
    let btExcluir = document.createElement("button");
    btExcluir.innerHTML = "X";
    btExcluir.classList.add("btExcluir");
    li.appendChild(btExcluir);
  }
}

meuEscopo();
