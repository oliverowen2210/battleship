/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


const Controller = {
  endGame() {
    _state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver = true;
  },

  endTurn() {
    _state__WEBPACK_IMPORTED_MODULE_0__.State.turn = Number(!_state__WEBPACK_IMPORTED_MODULE_0__.State.turn);
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn].cpu) _state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn].CPUshoot();
  },
};


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");




const Game = function () {
  while (_state__WEBPACK_IMPORTED_MODULE_2__.State.players[0]) _state__WEBPACK_IMPORTED_MODULE_2__.State.players.pop();
  let p1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player("p1");
  let p2 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player("p2", true);
  _state__WEBPACK_IMPORTED_MODULE_2__.State.players.push(p1, p2);
  p1.setBoard(new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());
  p2.setBoard(new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());
  p1.setEnemyBoard(p2.board);
  p2.setEnemyBoard(p1.board);

  window.p1 = p1;
  window.p2 = p2;

  p1.placeShipsRandomly();
  p2.placeShipsRandomly();
};


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


class Gameboard {
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

    let newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);
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


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



class Player {
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
    _controller__WEBPACK_IMPORTED_MODULE_1__.Controller.endGame();
  }

  endTurn() {}

  shoot(x, y) {
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver) throw new Error("The game is over.");
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn] != this)
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
    _controller__WEBPACK_IMPORTED_MODULE_1__.Controller.endTurn();
  }

  randomCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  async CPUshoot() {
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver) return;
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


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(len) {
    this.length = len;
    this.hits = 0;
  }

  hit() {
    this.hits = this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}


/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
const State = {
  players: [],
  turn: 0,
  gameOver: false,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


let button = document.querySelector("button");
let game = null;
button.addEventListener("click", () => {
  game = (0,_game__WEBPACK_IMPORTED_MODULE_0__.Game)();
  console.log("Game started!");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQ0FBSTtBQUNiO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sbGVyID0ge1xyXG4gIGVuZEdhbWUoKSB7XHJcbiAgICBTdGF0ZS5nYW1lT3ZlciA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgZW5kVHVybigpIHtcclxuICAgIFN0YXRlLnR1cm4gPSBOdW1iZXIoIVN0YXRlLnR1cm4pO1xyXG4gICAgaWYgKFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl0uY3B1KSBTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLkNQVXNob290KCk7XHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICB3aGlsZSAoU3RhdGUucGxheWVyc1swXSkgU3RhdGUucGxheWVycy5wb3AoKTtcclxuICBsZXQgcDEgPSBuZXcgUGxheWVyKFwicDFcIik7XHJcbiAgbGV0IHAyID0gbmV3IFBsYXllcihcInAyXCIsIHRydWUpO1xyXG4gIFN0YXRlLnBsYXllcnMucHVzaChwMSwgcDIpO1xyXG4gIHAxLnNldEJvYXJkKG5ldyBHYW1lYm9hcmQoKSk7XHJcbiAgcDIuc2V0Qm9hcmQobmV3IEdhbWVib2FyZCgpKTtcclxuICBwMS5zZXRFbmVteUJvYXJkKHAyLmJvYXJkKTtcclxuICBwMi5zZXRFbmVteUJvYXJkKHAxLmJvYXJkKTtcclxuXHJcbiAgd2luZG93LnAxID0gcDE7XHJcbiAgd2luZG93LnAyID0gcDI7XHJcblxyXG4gIHAxLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gIHAyLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG4gICAgdGhpcy5taXNzZXMgPSBbXTtcclxuICAgIHRoaXMuaGl0cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgbGV0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2gobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBbHJlYWR5U2hvdCh4LCB5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm1pc3Nlcy5zb21lKChtaXNzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pc3NbMF0gPT0geCAmJiBtaXNzWzFdID09IHk7XHJcbiAgICAgIH0pIHx8XHJcbiAgICAgIHRoaXMuaGl0cy5zb21lKChoaXQpID0+IHtcclxuICAgICAgICByZXR1cm4gaGl0WzBdID09IHggJiYgaGl0WzFdID09IHk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwKHsgbGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIiB9KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0gIT09IG51bGwpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGxhY2VtZW50IVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3kgKyBpXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gbmV3U2hpcDtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0gPSBuZXdTaGlwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XHJcbiAgICByZXR1cm4gbmV3U2hpcDtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVIaXQoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tBbHJlYWR5U2hvdCh4LCB5KSkge1xyXG4gICAgICByZXR1cm4gXCJyZXBlYXRcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSkge1xyXG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xyXG4gICAgICB0aGlzLmhpdHMucHVzaChbeCwgeV0pO1xyXG4gICAgICByZXR1cm4gXCJoaXRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWlzc2VzLnB1c2goW3gsIHldKTtcclxuICAgICAgcmV0dXJuIFwibWlzc1wiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxsU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNwdSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gbnVsbDtcclxuICAgIHRoaXMuZW5lbXlCb2FyZCA9IG51bGw7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jcHUgPSBjcHU7XHJcbiAgfVxyXG5cclxuICBzZXRCb2FyZChuZXdCb2FyZCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ld0JvYXJkO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBzZXRFbmVteUJvYXJkKGJvYXJkKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZW5lbXlCb2FyZCA9IGJvYXJkKTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIGxldCBsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xyXG4gICAgZm9yIChsZXQgbGVuIG9mIGxlbmd0aHMpIHtcclxuICAgICAgbGV0IGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkgZGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcCh7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBsZW5ndGg6IGxlbixcclxuICAgICAgICAgICAgeDogdGhpcy5yYW5kb21Db29yZGluYXRlKCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbigpIHtcclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX19IHdpbnMhISFgKTtcclxuICAgIENvbnRyb2xsZXIuZW5kR2FtZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5kVHVybigpIHt9XHJcblxyXG4gIHNob290KHgsIHkpIHtcclxuICAgIGlmIChTdGF0ZS5nYW1lT3ZlcikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdhbWUgaXMgb3Zlci5cIik7XHJcbiAgICBpZiAoU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXSAhPSB0aGlzKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJdCdzIG5vdCB5b3VyIHR1cm4geWV0IVwiKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLmVuZW15Qm9hcmQucmVjZWl2ZUhpdCh4LCB5KTtcclxuICAgIGlmIChyZXN1bHQgPT0gXCJyZXBlYXRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaG9zZSBjb29yZGluYXRlcyBoYXZlIGFscmVhZHkgYmVlbiBzaG90IGF0IVwiLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gc2hvdCB0aGUgc3F1YXJlIGF0ICR7eH0sICR7eX0uYCk7XHJcbiAgICBpZiAocmVzdWx0ID09IFwiaGl0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJdCB3YXMgYSBoaXQhXCIpO1xyXG4gICAgICBpZiAodGhpcy5lbmVteUJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgICAgIEdhbWUud2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwibWlzc1wiKSBjb25zb2xlLmxvZyhcIkl0IHdhcyBhIG1pc3MuLi5cIik7XHJcbiAgICBDb250cm9sbGVyLmVuZFR1cm4oKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbUNvb3JkaW5hdGUoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgQ1BVc2hvb3QoKSB7XHJcbiAgICBpZiAoU3RhdGUuZ2FtZU92ZXIpIHJldHVybjtcclxuICAgIGxldCBzaG90ID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2hpbGUgKCFzaG90KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHRoaXMuc2hvb3QodGhpcy5yYW5kb21Db29yZGluYXRlKCksIHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpKTtcclxuICAgICAgICAgIHNob3QgPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgfVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW4pIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuO1xyXG4gICAgdGhpcy5oaXRzID0gMDtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMuaGl0cyA9IHRoaXMuaGl0cyArPSAxO1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU3RhdGUgPSB7XHJcbiAgcGxheWVyczogW10sXHJcbiAgdHVybjogMCxcclxuICBnYW1lT3ZlcjogZmFsc2UsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbmxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG5sZXQgZ2FtZSA9IG51bGw7XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGdhbWUgPSBHYW1lKCk7XHJcbiAgY29uc29sZS5sb2coXCJHYW1lIHN0YXJ0ZWQhXCIpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9