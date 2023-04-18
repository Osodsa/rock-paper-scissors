import Button from "./Buttons/button";
import OkButton from "./Buttons/okButton";
import { OPTIONS } from "./consty/consty";

class Game {
  constructor() {
    this._enemyPick = "";
    this._playerPick = "";
    this._gameWerdict = "";
    this._looseCounter = 0;
    this._winCounter = 0;
    this.stoneButton = new Button({
      txt: OPTIONS.STONE,
      lectureHallName: OPTIONS.PLAYER,
      where: OPTIONS.PREPEND,
    });
    this.paperButton = new Button({
      txt: OPTIONS.PAPER,
      lectureHallName: OPTIONS.PLAYER,
      where: OPTIONS.PREPEND,
    });
    this.scissorsButton = new Button({
      txt: OPTIONS.SCISSORS,
      lectureHallName: OPTIONS.PLAYER,
      where: OPTIONS.PREPEND,
    });
    this.okButton = new OkButton({
      txt: "ok",
      lectureHallName: "ok",
      where: OPTIONS.PREPEND,
    });
  }
  set playerPick(y) {
    this._playerPick = y;
  }
  set enemyPick(x) {
    this._enemyPick = x;
  }
  set gameWerdict(z) {
    this._gameWerdict = z;
  }
  set looseCounter(numOfLooses) {
    this._looseCounter = numOfLooses;
  }
  set winCounter(numOfWins) {
    this._winCounter = numOfWins;
  }
  get enemyPick() {
    return this._enemyPick;
  }
  get playerPick() {
    return this._playerPick;
  }
  get gameWerdict() {
    return this._gameWerdict;
  }
  get looseCounter() {
    return this._looseCounter;
  }
  get winCounter() {
    return this._winCounter;
  }

  playerChoice() {
    this.scissorsButton.render();
    this.paperButton.render();
    this.stoneButton.render();
  }
}

const currentGame = new Game();

export default currentGame;
