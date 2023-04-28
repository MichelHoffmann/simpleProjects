function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
    },

    cliqueBotoes() {
      document.addEventListener("click", function (e) {
        const el = e.target
      });

    },
    
  }


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
    //let resultado = display.value;

    resultado = eval(display.value);

    if (resultado === 0) {
      display.value = String(resultado);
    }

    if (!resultado) {
      alert("Conta invalida!");
      limpaDisplay();
      console.log(resultado);
      console.log(!resultado);
      return;
    }

    display.value = String(resultado);
  }
}

const calculadora = criaCalculadora();
calculadora.inicia()