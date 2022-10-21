import { State } from "./state";

export const Controller = {
  endGame() {
    State.gameOver = true;
  },

  endTurn() {
    State.turn = Number(!State.turn);
    if (State.players[State.turn].cpu) State.players[State.turn].CPUshoot();
  },
};
