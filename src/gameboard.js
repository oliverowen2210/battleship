import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.ships = [];
    this.misses = [];
    this.hits = [];
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

  checkAlreadyShot(x, y) {
    return (
      this.misses.some((miss) => {
        return miss[0] == x && miss[1] == y;
      }) ||
      this.hits.some((hit) => {
        return hit[0] == x && hit[1] == y;
      })
    );
  }

  placeShip({ length, x, y, direction = "horizontal" }) {
    for (let i = 0; i < length; i++) {
      if (direction == "horizontal") {
        if (this.board[x + i][y] !== null) {
          throw new Error("Invalid placement!");
        }
      } else if (direction == "vertical") {
        if (this.board[x][y + i] !== null) {
          throw new Error("Invalid placement!");
        }
      }
    }

    let newShip = new Ship(length);
    for (let i = 0; i < length; i++) {
      if (direction == "horizontal") {
        this.board[x + i][y] = newShip;
      } else if (direction == "vertical") {
        this.board[x][y + i] = newShip;
      }
    }
    this.ships.push(newShip);
    return newShip;
  }

  receiveHit(x, y) {
    if (this.checkAlreadyShot(x, y)) {
      return "repeat";
    }

    if (this.board[x][y]) {
      this.board[x][y].hit();
      this.hits.push([x, y]);
      return "hit";
    } else {
      this.misses.push([x, y]);
      return "miss";
    }
  }

  allSunk() {
    return this.ships.every((ship) => {
      return ship.isSunk();
    });
  }
}
