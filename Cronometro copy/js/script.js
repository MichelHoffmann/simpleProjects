function meuEscopo() {
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  const data = new Date(0, 0, 0, 0, 0, 0, 0);
  //let dataFormatada = data.toLocaleTimeString();
  const relogio = document.querySelector(".relogio");
  let timer;
  relogio.innerHTML = data.toLocaleTimeString();

  iniciar.addEventListener("click", atualizaRelogio);
  pausar.addEventListener("click", pausarCronometro);
  zerar.addEventListener("click", zerarCronometro);

  function atualizaRelogio() {
    timer = setInterval(function () {
      data.setSeconds(data.getSeconds() + 1);
      const dataFormatada = data.toLocaleTimeString();
      relogio.innerHTML = dataFormatada;
    }, 1000);
    tiraClasse();
  }

  function pausarCronometro() {
    clearInterval(timer);
    adicionaClasse();
  }

  function zerarCronometro() {
    clearInterval(timer);
    data.setSeconds(0);
    const dataFormatada = data.toLocaleTimeString();
    relogio.innerHTML = dataFormatada;
  }

  function adicionaClasse() {
    document.body.classList.add("pausado");
    relogio.classList.add("pausado");
  }

  function tiraClasse() {
    document.body.classList.remove("pausado");
    relogio.classList.remove("pausado");
  }
}

meuEscopo();
