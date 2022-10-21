import { State } from "./state";
import { Controller } from "./controller";

export class Player {
  constructor(name, cpu = false) {
    this.board = null;
    this.enemyBoard = null;
    this.name = name;
    this.cpu = cpu;
  }

  setBoard(newBoard) {
    this.board = newBoard;
    return this.board;
  }

  setEnemyBoard(board) {
    return (this.enemyBoard = board);
  }

  placeShipsRandomly() {
    let lengths = [2, 3, 3, 4, 5];
    for (let len of lengths) {
      let direction = "horizontal";
      if (Math.random() > 0.5) direction = "vertical";
      while (true) {
        try {
          this.board.placeShip({
            direction: direction,
            length: len,
            x: this.randomCoordinate(),
            y: this.randomCoordinate(),
          });
          break;
        } catch (err) {}
      }
    }
  }

  win() {
    console.log(`${this.name}} wins!!!`);
    Controller.endGame();
  }

  endTurn() {}

  shoot(x, y) {
    if (State.gameOver) throw new Error("The game is over.");
    if (State.players[State.turn] != this)
      throw new Error("It's not your turn yet!");
    let result = this.enemyBoard.receiveHit(x, y);
    if (result == "repeat") {
      throw new Error("Those coordinates have already been shot at!", "repeat");
    }
    console.log(`${this.name} shot the square at ${x}, ${y}.`);
    if (result == "hit") {
      console.log("It was a hit!");
      if (this.enemyBoard.allSunk()) {
        Game.win();
      }
    } else if (result == "miss") console.log("It was a miss...");
    Controller.endTurn();
  }

  randomCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  async CPUshoot() {
    if (State.gameOver) return;
    let shot = false;
    setTimeout(() => {
      while (!shot) {
        try {
          this.shoot(this.randomCoordinate(), this.randomCoordinate());
          shot = true;
        } catch (err) {}
      }
    }, 2000);
  }
}
