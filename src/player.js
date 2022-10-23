import { State } from "./state";
import { Ship } from "./ship";
import { Controller } from "./controller";

export class Player {
  constructor(name, cpu = false) {
    this.board = null;
    this.enemyBoard = null;
    this.name = name;
    this.cpu = cpu;
    this.idealMoves = [];
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
    this.shipAliases = {
      carrier: this.ships[0],
      battleship: this.ships[1],
      cruiser: this.ships[2],
      submarine: this.ships[3],
      destroyer: this.ships[4],
    };
    this.selectedShip = null;
  }

  setBoard(newBoard) {
    this.board = newBoard;
    return this.board;
  }

  setEnemyBoard(board) {
    return (this.enemyBoard = board);
  }

  placeSelectedShip({ x, y, direction }) {
    if (this.selectedShip && this.ships.indexOf(this.selectedShip) > -1) {
      try {
        this.board.placeShip({ x, y, direction, ship: this.selectedShip });
        this.ships.splice(this.ships.indexOf(this.selectedShip), 1);
      } catch (err) {
        throw new Error(err);
      }
    } else if (
      this.selectedShip &&
      this.ships.indexOf(this.selectedShip) === -1
    ) {
      this.selectedShip = null;
      throw new Error("You don't have that ship!");
    } else throw new Error("No ship selected.");
  }

  placeShipsRandomly() {
    while (this.ships.length) {
      this.selectedShip = this.ships[0];
      let direction = "horizontal";
      if (Math.random() > 0.5) direction = "vertical";
      while (true) {
        try {
          this.placeSelectedShip({
            x: this.randomCoordinate(),
            y: this.randomCoordinate(),
            direction,
          });
          break;
        } catch (err) {}
      }
    }
  }

  shoot(x, y) {
    if (State.gameOver) throw new Error("The game is over.");
    if (State.players[State.turn] != this) {
      if (State.players[Number(!State.turn)] != this) {
        //if this happens, this player isn't in the game anymore due to a restart
        return;
      }
      throw new Error("It's not your turn yet!");
    }
    let result = this.enemyBoard.receiveHit(x, y);
    if (result == "invalid") {
      throw new Error("Those coordinates are invalid!", { cause: "invalid" });
    }
    if (result == "repeat") {
      throw new Error("Those coordinates have already been shot at!", {
        cause: "repeat",
      });
    }
    console.log(`${this.name} shot the square at ${x}, ${y}.`);
    if (result == "hit") {
      console.log("It was a hit!");
      if (this.enemyBoard.allSunk()) {
        Controller.endGame();
        return;
      }
    } else if (result == "miss") console.log("It was a miss...");
    Controller.endTurn();
    return { result: result, x: x, y: y };
  }

  randomCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  async CPUshoot() {
    let shot = false;
    let shotData = null;
    setTimeout(() => {
      while (!shot) {
        if (State.gameOver || !State.playing || State.placingShips) return;
        try {
          if (this.idealMoves.length) {
            try {
              shotData = this.shoot(
                this.idealMoves[0][0],
                this.idealMoves[0][1]
              );
              this.idealMoves.shift();
            } catch (err) {
              if (err.cause == "invalid" || err.cause == "repeat") {
                this.idealMoves.shift();
              }
              continue;
            }
          } else {
            shotData = this.shoot(
              this.randomCoordinate(),
              this.randomCoordinate()
            );
          }

          shot = true;
          if (shotData.result == "hit") {
            this.idealMoves.push(
              [shotData.x + 1, shotData.y],
              [shotData.x - 1, shotData.y],
              [shotData.x, shotData.y + 1],
              [shotData.x, shotData.y - 1]
            );
            for (let move of this.idealMoves) {
              if (
                !this.board.squareExists(move[0], move[1]) ||
                !this.enemyBoard.squareNotHit(move[0], move[1])
              ) {
                this.idealMoves.splice(this.idealMoves.indexOf(move), 1);
              }
            }
          }
        } catch (err) {}
      }
    }, 2000);
  }
}
