let input = document.querySelector("#input");
const cards = document.querySelectorAll(".card");

input.addEventListener("input", filterCards);

function filterCards() {
  if (input.value != '') {
    for (let card of cards) {
      let titulo = card.querySelector('.titulo-game')
      titulo = titulo.innerText.toLowerCase()
      let inputText = input.value.toLowerCase()
      if (!titulo.includes(inputText)) {
        card.style.display = 'none'
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = 'block'
    }
  }
}
