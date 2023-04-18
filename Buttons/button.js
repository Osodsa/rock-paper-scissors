import { OPTIONS, optionsArray } from "../consty/consty";
import currentGame from "../game";
import gameStateUpdate from "../gameStateUpdate";

export default class Button {
  ///class to make new buttons
  constructor({ txt, lectureHallName, where }) {
    this.txt = txt;
    this.lectureHallName = lectureHallName;
    this.where = where;
  }

  clickHandler() {
    ///buttons default change enemypick and set playerpick
    if (currentGame.looseCounter < 20 && currentGame.winCounter < 20) {
      currentGame.enemyPick =
        optionsArray[Math.floor(Math.random() * optionsArray.length)];
      gameStateUpdate(
        `A ja wybieram ${currentGame.enemyPick}.`,
        document.querySelectorAll(".player")
      );
      currentGame.playerPick = this.txt;
      currentGame.okButton.render();
    } else if (currentGame.looseCounter >= 20) {
      gameStateUpdate(
        "Udowodniłam ci kto tutaj rządzi 😎",
        document.querySelectorAll(".player")
      );
    } else {
      gameStateUpdate("Żądam rewanżu 😡", document.querySelectorAll(".player"));
    }
  }

  render() {
    ///class metod to render buttons
    const a = document.createElement("button");
    const base = document.querySelector(".here");
    switch (this.where) {
      case OPTIONS.APPEND:
        base.after(a);
        break;
      case OPTIONS.PREPEND:
        base.prepend(a);
        break;
      case OPTIONS.BEFORE:
        base.before(a);
        break;
      case OPTIONS.AFTER:
        base.after(a);
        break;
    }
    a.innerText = this.txt;
    a.classList.add(this.lectureHallName);
    a.addEventListener("click", this.clickHandler.bind(this));
  }
}
