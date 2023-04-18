import Button from "./button";
import gameStateUpdate from "../gameStateUpdate";
import currentGame from "../game";
import { OPTIONS } from "../consty/consty";
import okbuttonclichand from "./okbuttonclichand";

export default class OkButton extends Button {
  ///button class with diffrent clickhandler
  clickHandler() {
    switch (
      currentGame._enemyPick ///depending on enemypick take switch with expected game werdicts
    ) {
      case OPTIONS.STONE:
        switch (currentGame._playerPick) {
          case OPTIONS.STONE: ///draw
            currentGame.playerChoice();
            gameStateUpdate(OPTIONS.DRAW, document.querySelectorAll(".ok"));
            currentGame.gameWerdict = OPTIONS.DRAW;
            break;
          case OPTIONS.PAPER: ///win
            okbuttonclichand(OPTIONS.WIN);
            break;
          case OPTIONS.SCISSORS: ///lose
            okbuttonclichand(OPTIONS.LOSE);
            break;
        }
        break;
      case OPTIONS.PAPER:
        switch (currentGame._playerPick) {
          case OPTIONS.STONE: ///lose
            okbuttonclichand(OPTIONS.LOSE);
            break;
          case OPTIONS.PAPER: ///draw
            currentGame.playerChoice();
            gameStateUpdate(OPTIONS.DRAW, document.querySelectorAll(".ok"));
            currentGame.gameWerdict = OPTIONS.DRAW;
            break;
          case OPTIONS.SCISSORS: ///win
            okbuttonclichand(OPTIONS.WIN);
            break;
        }
        break;
      case OPTIONS.SCISSORS:
        switch (currentGame._playerPick) {
          case OPTIONS.STONE: ///win
            okbuttonclichand(OPTIONS.WIN);
            break;
          case OPTIONS.PAPER: ///lose
            okbuttonclichand(OPTIONS.LOSE);
            break;
          case OPTIONS.SCISSORS: ///draw
            gameStateUpdate(OPTIONS.DRAW, document.querySelectorAll(".ok"));
            currentGame.playerChoice();
            currentGame.gameWerdict = OPTIONS.DRAW;
            break;
        }
        break;
    }
  }
}
