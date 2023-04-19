function meuEscopo() {
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  const data = new Date(0, 0, 0, 0, 0, 0, 0);
  //let dataFormatada = data.toLocaleTimeString();
  const relogio = document.querySelector(".relogio");
  relogio.innerHTML = data.toLocaleTimeString();

  iniciar.addEventListener("click", atualizaRelogio);
  pausar.addEventListener("click", pausarCronometro);

  //const iniciarRelogio = setInterval(atualizaRelogio, 1000);

  function atualizaRelogio() {
    data.setSeconds(data.getSeconds() + 1);
    const dataFormatada = data.toLocaleTimeString();
    relogio.innerHTML = dataFormatada;
  }

  function pausarCronometro() {
    clearInterval(iniciarRelogio);
  }
}

meuEscopo();
