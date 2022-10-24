import { Controller } from "./controller";

export class Gameboard {
  constructor() {
    this.shipMap = this.createBoard();
    this.hitMap = this.createBoard();
    this.ships = [];
  }

  createBoard() {
    let board = [];
    for (let i = 1; i <= 10; i++) {
      let row = [];
      for (let j = 1; j <= 10; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  squareExists(x, y) {
    if (
      x < this.shipMap.length &&
      x >= 0 &&
      y < this.shipMap[0].length &&
      y >= 0
    )
      return true;
    return false;
  }

  squareNotHit(x, y) {
    if (this.hitMap[x][y] !== null) {
      return false;
    }
    return true;
  }

  squareHasShip(x, y) {
    if (this.shipMap[x][y] !== null) {
      return true;
    }
    return false;
  }

  validPlacement({ x, y, length, direction }) {
    for (let i = 0; i < length; i++) {
      if (direction == "horizontal") {
        if (!this.squareExists(x + i, y) || this.squareHasShip(x + i, y))
          return false;
      } else if (direction == "vertical") {
        if (!this.squareExists(x, y - i) || this.squareHasShip(x, y - i))
          return false;
      }
    }
    return true;
  }

  placeShip({ ship, x, y, direction = "horizontal" }) {
    if (!this.validPlacement({ x, y, direction, length: ship.length })) {
      throw new Error("Invalid placement!");
    }
    for (let i = 0; i < ship.length; i++) {
      if (direction == "horizontal") {
        this.shipMap[x + i][y] = ship;
      } else if (direction == "vertical") {
        this.shipMap[x][y - i] = ship;
      }
    }
    this.ships.push(ship);
    Controller.refreshView();
  }

  removeShip(ship) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.shipMap[i][j] == ship) {
          this.shipMap[i][j] = null;
        }
      }
    }
    this.ships.splice(this.ships.indexOf(ship), 1);
    Controller.refreshView();
  }

  receiveHit(x, y) {
    if (!this.squareExists(x, y)) {
      return "invalid";
    }

    if (!this.squareNotHit(x, y)) {
      return "repeat";
    }

    if (this.shipMap[x][y]) {
      this.shipMap[x][y].hit();
      this.hitMap[x][y] = "hit";
      return "hit";
    } else {
      this.hitMap[x][y] = "miss";
      return "miss";
    }
  }

  allSunk() {
    return this.ships.every((ship) => {
      return ship.isSunk();
    });
  }
}
