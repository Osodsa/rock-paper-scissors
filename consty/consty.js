const OPTIONS = {
  STONE: "Kamień",
  PAPER: "Papier",
  SCISSORS: "Nożyce",
  PLAYER: "player",
  WIN: "Wygrałeś",
  LOSE: "Przegrałeś",
  DRAW: "Remis",
  PREPEND: "prepend",
  APPEND: "append",
  BEFORE: "before",
  AFTER: "after",
};

const optionsArray = [OPTIONS.STONE, OPTIONS.PAPER, OPTIONS.SCISSORS];

const myHpBar = document.querySelector(".myhp");
const enemyHpBar = document.querySelector(".hp");

export { OPTIONS, optionsArray, myHpBar, enemyHpBar };
