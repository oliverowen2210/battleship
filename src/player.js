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
    this.lastHits = [];
    this.currentDirection = null;
    this.ships = [
      new Ship(5, "carrier"),
      new Ship(4, "battleship"),
      new Ship(3, "cruiser"),
      new Ship(3, "submarine"),
      new Ship(2, "destroyer"),
    ];
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

  deleteBadMoves(movesObj) {
    for (let i = movesObj.length - 1; i >= 0; i--) {
      if (
        !this.board.squareExists(movesObj[i].x, movesObj[i].y) ||
        !this.enemyBoard.squareNotHit(movesObj[i].x, movesObj[i].y)
      ) {
        movesObj.splice(i, 1);
      }
    }
  }

  async CPUshoot() {
    let shot = false;
    let shotData = null;
    setTimeout(() => {
      while (!shot) {
        if (State.gameOver || !State.playing || State.placingShips) return;
        if (this.idealMoves.length) {
          shotData = this.shoot(this.idealMoves[0].x, this.idealMoves[0].y);
          if (shotData.result == "hit") {
            let direction = this.idealMoves[0].direction;
            if (direction == "horizontal") {
              for (let i = this.idealMoves.length - 1; i >= 0; i--) {
                if (this.idealMoves[i].direction == "vertical") {
                  this.idealMoves.splice(i, 1);
                }
              }
            } else if (direction == "vertical") {
              for (let i = this.idealMoves.length - 1; i >= 0; i--) {
                if (this.idealMoves[i].direction == "horizontal") {
                  this.idealMoves.splice(i, 1);
                }
              }
            }
          }
          this.idealMoves.splice(this.idealMoves[0], 1);
        } else {
          try {
            shotData = this.shoot(
              this.randomCoordinate(),
              this.randomCoordinate()
            );
          } catch (err) {
            continue;
          }
        }

        shot = true;
        if (!shotData.result) return;
        if (shotData.result == "hit") {
          if (this.lastHits.length) {
            if (this.lastHits.length > 4) {
              this.lastHits.splice(3);
            }
            for (let i = 0; i < this.lastHits.length; i++) {
              if (
                shotData.x == this.lastHits[i].x + 1 ||
                shotData.x == this.lastHits[i].x - 1
              ) {
                this.currentDirection = "horizontal";
              } else if (
                shotData.y == this.lastHits[i].y + 1 ||
                shotData.y == this.lastHits[i].y - 1
              ) {
                this.currentDirection = "vertical";
              }
            }
          }
          let nextMoves = null;
          if (this.currentDirection == "horizontal") {
            nextMoves = [
              {
                x: shotData.x - 1,
                y: shotData.y,
                direction: "horizontal",
              },
              {
                x: shotData.x + 1,
                y: shotData.y,
                direction: "horizontal",
              },
            ];
          } else if (this.currentDirection == "vertical") {
            nextMoves = [
              {
                x: shotData.x,
                y: shotData.y + 1,
                direction: "vertical",
              },
              {
                x: shotData.x,
                y: shotData.y - 1,
                direction: "vertical",
              },
            ];
          } else {
            nextMoves = [
              {
                x: shotData.x - 1,
                y: shotData.y,
                direction: "horizontal",
              },
              {
                x: shotData.x + 1,
                y: shotData.y,
                direction: "horizontal",
              },
              {
                x: shotData.x,
                y: shotData.y + 1,
                direction: "vertical",
              },
              {
                x: shotData.x,
                y: shotData.y - 1,
                direction: "vertical",
              },
            ];
          }

          this.deleteBadMoves(nextMoves);
          this.idealMoves.push(...nextMoves);
          this.lastHits.unshift({ x: shotData.x, y: shotData.y });
        } else if (shotData.result == "miss") {
          this.currentDirection = null;
        }
      }
    }, 2000);
  }
}
