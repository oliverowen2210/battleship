import { State } from "./state";
import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { Renderer } from "./renderer";

export const Controller = {
  newGame(p1cpu, p2cpu) {
    State.playing = true;
    let p1 = new Player("Player 1", p1cpu);
    let p2 = new Player("Player 2", p2cpu);
    State.players.push(p1, p2);
    p1.setBoard(new Gameboard());
    p2.setBoard(new Gameboard());
    p1.setEnemyBoard(p2.board);
    p2.setEnemyBoard(p1.board);

    State.placingShips = true;
    this.refreshView();
    this.startShipPlacement(0);

    return { players: State.players };
  },

  restart() {
    this.resetState();
    this.refreshView();
    Renderer.setButton("new");
  },

  resetState() {
    State.playing = false;
    this.clearPlayers();
    State.turn = 0;
    State.gameOver = false;
    State.winningPlayer = null;
    State.placingShips = false;
  },

  startShipPlacement(playerIndex) {
    if (playerIndex == 0) {
      if (!State.players[0].cpu) {
        Renderer.toggleShipSelection({ side: "left", state: "off" });
        Renderer.toggleShipSelection({ side: "right", state: "on" });
        Renderer.populateShips("right");
        Renderer.setButton("continue");
      } else {
        State.players[0].placeShipsRandomly();
        this.startShipPlacement(1);
      }
    } else if (playerIndex == 1) {
      if (!State.players[1].cpu) {
        Renderer.toggleShipSelection({ side: "right", state: "off" });
        Renderer.toggleShipSelection({ side: "left", state: "on" });
        Renderer.populateShips("left");
        Renderer.setButton("continue");
      } else {
        State.players[1].placeShipsRandomly();
        this.startGame();
      }
    }
  },

  startGame() {
    State.placingShips = false;
    Renderer.toggleShipSelection({ side: "left", state: "off" });
    Renderer.toggleShipSelection({ side: "right", state: "off" });
    Renderer.setButton("restart");
    Renderer.toggleRotateButton("off");
    this.refreshView();
    if (State.players[0].cpu) State.players[0].CPUshoot();
  },

  endGame() {
    this.refreshView();
    State.gameOver = true;
    State.winningPlayer = State.players[State.turn];
    console.log(`The game is over. ${State.winningPlayer.name} wins!`);
  },

  /**  Tells the renderer what to display in the grids
   * based on who's playing and whether they're a CPU
   * then updates the "X player's turn" text. */
  refreshView() {
    // If a game hasn't been started, empty both grids
    if (!State.playing) {
      Renderer.populateGrid({ grid: "left", hitMap: null, shipMap: null });
      Renderer.populateGrid({ grid: "right", hitMap: null, shipMap: null });
    } else if (
      State.placingShips ||
      (State.players[State.turn].cpu && State.players[Number(!State.turn)].cpu)

      /** display a full view of both player's boards if both players are CPUs
     or if ships are being placed*/
    ) {
      Renderer.populateGrid({
        grid: "left",
        hitMap: State.players[0].board.hitMap,
        shipMap: State.players[0].board.shipMap,
      });
      Renderer.populateGrid({
        grid: "right",
        hitMap: State.players[1].board.hitMap,
        shipMap: State.players[1].board.shipMap,
      });
      // If it's p1's turn and p1 is a CPU, display p0's view
    } else if (State.turn == 1 && State.players[1].cpu) {
      Renderer.populateGrid({
        grid: "left",
        shipMap: State.players[0].board.shipMap,
        hitMap: State.players[0].board.hitMap,
      });

      Renderer.populateGrid({
        grid: "right",
        hitMap: State.players[1].board.hitMap,
        shipMap: null,
      });

      // If it's p0's turn and p0 is a CPU, display p1's view
    } else if (State.turn == 0 && State.players[0].cpu) {
      Renderer.populateGrid({
        grid: "left",
        hitMap: State.players[0].board.hitMap,
        shipMap: null,
      });
      Renderer.populateGrid({
        grid: "right",
        shipMap: State.players[1].board.shipMap,
        hitMap: State.players[1].board.hitMap,
      });

      // otherwise display the current player's view
    } else if (State.turn == 0) {
      Renderer.populateGrid({
        grid: "left",
        shipMap: State.players[0].board.shipMap,
        hitMap: State.players[0].board.hitMap,
      });

      Renderer.populateGrid({
        grid: "right",
        hitMap: State.players[1].board.hitMap,
        shipMap: null,
      });
    } else if (State.turn == 1) {
      Renderer.populateGrid({
        grid: "left",
        hitMap: State.players[0].board.hitMap,
        shipMap: null,
      });

      Renderer.populateGrid({
        grid: "right",
        shipMap: State.players[1].board.shipMap,
        hitMap: State.players[1].board.hitMap,
      });
    }
    Renderer.updateText();
  },

  blockScreen() {
    setTimeout(Renderer.toggleScreenBlock("on"), 2000);
  },

  async endTurn() {
    this.refreshView();
    if (!State.players[0].cpu && !State.players[1].cpu) {
      let nextTurn = Number(!State.turn);
      State.turn = -1;
      setTimeout(() => {
        Renderer.toggleScreenBlock("on");
        Renderer.updateScreenBlockText(nextTurn);
        State.turn = nextTurn;
        this.refreshView();
      }, 2000);
    } else {
      State.turn = Number(!State.turn);
      this.refreshView();
      if (State.players[State.turn].cpu) State.players[State.turn].CPUshoot();
    }
  },

  clearPlayers() {
    while (State.players[0]) State.players.pop();
  },

  canClick(playerIndex, x, y) {
    if (playerIndex !== 0 && playerIndex !== 1)
      throw new Error("Invalid player index!");
    let otherPlayerIndex = Number(!playerIndex);
    return (
      State.players[otherPlayerIndex].board.squareExists(x, y) &&
      State.players[otherPlayerIndex].board.squareNotHit(x, y) &&
      State.turn == playerIndex &&
      !State.players[playerIndex].cpu
    );
  },
};
