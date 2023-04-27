function calculadora() {
  const display = document.querySelector(".display");

  document.addEventListener("click", capturaBotoes);

  function capturaBotoes(e) {
    const evento = e.target;
    if (evento.classList.contains("btn-num")) {
      const valor = evento.innerText;
      adicionaDisplay(valor);
    }

    if (evento.classList.contains("btn-clear")) {
      limpaDisplay();
    }

    if (evento.classList.contains("btn-del")) {
      delDisplay();
    }

    if (evento.classList.contains("btn-eq")) {
      realizaConta();
    }
  }

  function adicionaDisplay(e) {
    display.value += e;
  }

  function limpaDisplay() {
    display.value = "";
  }

  function delDisplay() {
    let ar = display.value.split("");
    ar.pop();
    ar = ar.join("");
    limpaDisplay();
    adicionaDisplay(ar);
  }

  function realizaConta() {
    const resultado = eval(display.value);
    limpaDisplay();
    adicionaDisplay(resultado);
  }
}

calculadora();
