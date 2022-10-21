import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { State } from "./state";

export const Game = function () {
  while (State.players[0]) State.players.pop();
  let p1 = new Player("p1");
  let p2 = new Player("p2", true);
  State.players.push(p1, p2);
  p1.setBoard(new Gameboard());
  p2.setBoard(new Gameboard());
  p1.setEnemyBoard(p2.board);
  p2.setEnemyBoard(p1.board);

  window.p1 = p1;
  window.p2 = p2;

  p1.placeShipsRandomly();
  p2.placeShipsRandomly();
};
