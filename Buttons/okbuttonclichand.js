import { OPTIONS, enemyHpBar, myHpBar } from "../consty/consty";
import currentGame from "../game";
import gameStateUpdate from "../gameStateUpdate";

function okbuttonclichand(gameOutCome) {
  currentGame.playerChoice();
  gameStateUpdate(gameOutCome, document.querySelectorAll(".ok"));
  currentGame.gameWerdict = gameOutCome;
  switch (gameOutCome) {
    case OPTIONS.WIN:
      currentGame.winCounter++;
      enemyHpBar.style.backgroundColor = `hsl(${
        100 - 5 * currentGame.winCounter
      }, 100%, 50%)`;
      enemyHpBar.innerText = `${20 - 1 * currentGame.winCounter}/20`;
      break;
    case OPTIONS.LOSE:
      currentGame.looseCounter++;
      myHpBar.style.backgroundColor = `hsl(${
        100 - 5 * currentGame.looseCounter
      }, 100%, 50%)`;
      myHpBar.innerText = `${20 - 1 * currentGame.looseCounter}/20`;
      break;
  }
}
export default okbuttonclichand;
