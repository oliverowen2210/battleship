import { Game } from "./game";

let button = document.querySelector("button");
let game = null;
button.addEventListener("click", () => {
  game = Game();
  console.log("Game started!");
});
