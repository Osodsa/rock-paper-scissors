import currentGame from "./game";

const start = document.querySelector("#start");

function haloGigaKoxFunkcja(e) {
  e.target.remove();
  currentGame.playerChoice();
}

start.addEventListener("click", haloGigaKoxFunkcja);
