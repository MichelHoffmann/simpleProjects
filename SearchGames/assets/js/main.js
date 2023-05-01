const input = document.querySelector("#input");
const cards = document.querySelectorAll(".card");

input.addEventListener("keypress", filterCards);

function filterCards() {
  for (const card of cards) {
    const h1 = card.querySelector(".titulo-game");
    if (input.innerText.includes(h1.innerText)) {
      console.log("finalmente");
    }
  }
}
