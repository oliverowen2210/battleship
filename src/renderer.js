import { Controller } from "./controller";
import { State } from "./state";
import { Page } from "./page";

//so that the continue button knows what to tell the controller
let p1PlacedShips = false;

/**if you're already hovering over a square, you have to hover over a different one
to see the rotation. sorry :( */
let selectedDirection = "horizontal";
Page.rotateButton.addEventListener("click", () => {
  selectedDirection =
    selectedDirection == "horizontal" ? "vertical" : "horizontal";
});
Page.exitScreenBlockButton.addEventListener("click", () => {
  Renderer.toggleScreenBlock("off");
});

let buttonCallbacks = {
  newGameCB() {
    Renderer.toggleTypes("off");
    Renderer.toggleRotateButton("on");
    p1PlacedShips = false;
    let isP1CPU = false;
    let isP2CPU = false;
    for (let radio of Page.p1Type) {
      if (radio.checked && radio.value == "CPU") isP1CPU = true;
    }
    for (let radio of Page.p2Type) {
      if (radio.checked && radio.value == "CPU") isP2CPU = true;
    }
    Controller.newGame(isP1CPU, isP2CPU);
    console.log("Game started!");
  },

  continueCB() {
    selectedDirection = "horizontal";
    if (!p1PlacedShips && !State.players[0].cpu) {
      if (State.players[0].ships.length) {
        throw new Error("You still have ships left to place!");
      }
      Controller.startShipPlacement(1);
      p1PlacedShips = true;
    } else {
      if (State.players[1].ships.length) {
        throw new Error("You still have ships left to place!");
      }
      p1PlacedShips = false;
      Controller.startGame();
    }
  },

  restartCB() {
    Renderer.toggleTypes("on");
    Controller.restart();
  },
};

export const Renderer = {
  updateText() {
    if (!State.playing) {
      Page.gameText.textContent = "";
    } else if (State.gameOver) {
      Page.gameText.textContent = `${State.winningPlayer.name} wins!!!!!!!`;
    } else if (State.placingShips) {
      Page.gameText.textContent = "Place your ships";
    } else {
      Page.gameText.textContent = `${State.players[State.turn].name}'s turn`;
    }
  },

  updateScreenBlockText(playerIndex) {
    Page.screenBlockText.textContent = `Player ${playerIndex + 1}'s turn`;
  },

  toggleScreenBlock(state) {
    if (state == "on") {
      this.updateScreenBlockText();
      Page.screenBlock.classList.remove("hidden");
    } else if (state == "off") Page.screenBlock.classList.add("hidden");
  },

  toggleTypes: function togglePlayerTypesSelection(state) {
    if (state == "on") {
      Page.playerOneType.classList.remove("hidden");
      Page.playerTwoType.classList.remove("hidden");
    } else if (state == "off") {
      Page.playerOneType.classList.add("hidden");
      Page.playerTwoType.classList.add("hidden");
    }
  },

  toggleRotateButton(state) {
    if (state == "on") {
      Page.rotateButton.classList.remove("hidden");
    } else if (state == "off") {
      Page.rotateButton.classList.add("hidden");
    }
  },

  removeButtonListeners() {
    for (let listener in buttonCallbacks) {
      Page.gameButton.removeEventListener("click", buttonCallbacks[listener]);
    }
  },

  setButton(type) {
    this.removeButtonListeners();

    Page.gameButton.addEventListener("click", this.updateText);
    if (type == "new") {
      Page.gameButton.textContent = "New game";
      Page.gameButton.addEventListener("click", buttonCallbacks.newGameCB);
    } else if (type == "continue") {
      Page.gameButton.textContent = "Continue";
      Page.gameButton.addEventListener("click", buttonCallbacks.continueCB);
    } else if (type == "restart") {
      Page.gameButton.textContent = "Restart";
      Page.gameButton.addEventListener("click", buttonCallbacks.restartCB);
    }
  },

  clearShips() {
    for (let ship of document.querySelectorAll(".ship-wrapper")) {
      ship.remove();
    }
  },

  toggleShipSelection({ side, state }) {
    if (side == "left") {
      if (state == "on") {
        Page.leftShips.classList.remove("hidden");
        Page.leftGrid.classList.add("hidden");
      } else if (state == "off") {
        Page.leftShips.classList.add("hidden");
        Page.leftGrid.classList.remove("hidden");
      }
    } else if (side == "right") {
      if (state == "on") {
        Page.rightShips.classList.remove("hidden");
        Page.rightGrid.classList.add("hidden");
      } else if (state == "off") {
        Page.rightShips.classList.add("hidden");
        Page.rightGrid.classList.remove("hidden");
      }
    }
  },

  populateShips(side) {
    this.clearShips();
    let player = side == "right" ? 0 : 1;
    for (let ship of State.players[player].ships) {
      const shipHTML = document.createElement("div");
      shipHTML.classList.add("ship-wrapper");
      const shipName = document.createElement("h2");
      shipName.classList.add("ship-name");
      shipName.textContent = ship.name;
      const shipCells = document.createElement("div");
      shipCells.classList.add("ship-cells-wrapper");
      shipHTML.appendChild(shipName);
      for (let i = 0; i < ship.length; i++) {
        const shipCell = document.createElement("div");
        shipCell.classList.add("ship-cell");
        shipCells.appendChild(shipCell);
      }
      shipHTML.appendChild(shipCells);
      shipHTML.addEventListener("click", () => {
        State.players[player].selectedShip = ship;
        for (let selectedShip of document.querySelectorAll(".selected")) {
          selectedShip.classList.remove("selected");
        }
        shipHTML.classList.add("selected");
      });
      if (side == "left") Page.leftShips.appendChild(shipHTML);
      else if (side == "right") Page.rightShips.appendChild(shipHTML);
    }
  },

  clearGrid(grid) {
    if (grid == "left") {
      while (Page.leftGrid.firstChild) {
        Page.leftGrid.removeChild(Page.leftGrid.lastChild);
      }
    } else if (grid == "right") {
      while (Page.rightGrid.firstChild) {
        Page.rightGrid.removeChild(Page.rightGrid.lastChild);
      }
    } else throw new Error("Invalid grid! Must be 'left' or 'right'.");
  },

  clearHovers() {
    for (let hoverCell of document.querySelectorAll(".hover")) {
      hoverCell.classList.remove("hover");
    }
    for (let shipHover of document.querySelectorAll(".ship-hover")) {
      shipHover.classList.remove("ship-hover");
    }
    for (let badPlacement of document.querySelectorAll(".bad-placement")) {
      badPlacement.classList.remove("bad-placement");
    }
  },

  removeClickedShip(shipMap, board, x, y) {
    State.players[board].selectedShip = shipMap[x][y];
    State.players[board].board.removeShip(State.players[board].selectedShip);
    State.players[board].ships.push(State.players[board].selectedShip);
  },

  populateGrid({ grid = left, hitMap = null, shipMap = null }) {
    if (grid != "left" && grid != "right")
      throw new Error("Invalid grid! Must be 'left' or 'right'.");
    this.clearGrid(grid);
    if (hitMap == null && shipMap == null) return;
    for (let yCoord = 9; yCoord >= 0; yCoord--) {
      for (let xCoord = 0; xCoord < 10; xCoord++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        if (shipMap && shipMap[xCoord][yCoord] !== null) {
          cell.classList.add("ship");
        }

        if (hitMap && hitMap[xCoord][yCoord] == "miss") {
          cell.classList.add("miss");
        } else if (hitMap && hitMap[xCoord][yCoord] == "hit") {
          cell.classList.add("hit");
        }

        cell.dataset.x = xCoord;
        cell.dataset.y = yCoord;
        cell.dataset.grid = grid;

        cell.addEventListener("mouseout", () => {
          this.clearHovers();
        });
        let player = grid == "left" ? 1 : 2;
        let playerIndex = player - 1;
        let otherPlayerIndex = Number(!playerIndex);
        if (
          State.gameOver &&
          State.winningPlayer == State.players[playerIndex]
        ) {
          cell.classList.add("win");
        } else if (State.gameOver) {
          cell.classList.add("lose");
        }

        cell.addEventListener("click", () => {
          if (State.placingShips) {
            if (!State.players[playerIndex].selectedShip) {
              if (cell.classList.contains("ship")) {
                this.removeClickedShip(shipMap, playerIndex, xCoord, yCoord);
              } else return;
            } else {
              if (cell.classList.contains("ship")) {
                this.removeClickedShip(shipMap, playerIndex, xCoord, yCoord);
              } else {
                State.players[playerIndex].placeSelectedShip({
                  x: xCoord,
                  y: yCoord,
                  direction: selectedDirection,
                });
                State.players[playerIndex].selectedShip = null;
              }

              for (let selectedShip of document.querySelectorAll("selected")) {
                selectedShip.classList.remove("selected");
              }
            }

            if (grid == "left") this.populateShips("right");
            else this.populateShips("left");
          } else if (Controller.canClick(otherPlayerIndex, xCoord, yCoord)) {
            State.players[otherPlayerIndex].shoot(xCoord, yCoord);
          }
        });

        cell.addEventListener("mouseover", () => {
          if (State.placingShips) {
            if (!State.players[playerIndex].selectedShip) return;
            let validPlacement = State.players[
              playerIndex
            ].board.validPlacement({
              x: xCoord,
              y: yCoord,
              direction: selectedDirection,
              length: State.players[playerIndex].selectedShip.length,
            });
            for (
              let i = 0;
              i < State.players[playerIndex].selectedShip.length;
              i++
            ) {
              let selectedCell = null;
              if (selectedDirection == "horizontal") {
                selectedCell = document.querySelector(
                  `.cell[data-x="${
                    xCoord + i
                  }"][data-y="${yCoord}"][data-grid="${grid}"]`
                );
              } else if (selectedDirection == "vertical") {
                selectedCell = document.querySelector(
                  `.cell[data-x="${xCoord}"][data-y="${
                    yCoord - i
                  }"][data-grid="${grid}"]`
                );
              }
              if (selectedCell == undefined) return;
              if (validPlacement) {
                selectedCell.classList.add("ship-hover");
              } else {
                selectedCell.classList.add("bad-placement");
              }
            }
          } else if (Controller.canClick(otherPlayerIndex, xCoord, yCoord)) {
            cell.classList.add("hover");
          }
        });
        grid == "left"
          ? Page.leftGrid.appendChild(cell)
          : Page.rightGrid.appendChild(cell);
      }
    }
  },
};
