import { Gameboard } from "./gameboard";

test("Gameboard stores missed attacks", () => {
  let testBoard = Gameboard();
  expect(testBoard.receiveHit(3, 5)).toBe("miss");
  expect(testBoard.getMisses().length).toBe(1);
  expect(testBoard.getMisses()[0][0]).toBe(3);
  expect(testBoard.getMisses()[0][1]).toBe(5);
});

test("Can't shoot out of turn or shoot the same square twice", () => {
  let testPlayer1 = Controller.addPlayer();
  let testPlayer2 = Controller.addPlayer();
  Controller.start();

  expect(testPlayer1.shoot(2, 2)).toBe("miss");
  expect(() => {
    testPlayer1.shoot(4, 5);
  }).toThrow();
  testPlayer2.shoot(3, 5);
  expect(() => {
    testPlayer1.shoot(2, 2);
  }).toThrow();
});

test("Players can attack each other's boards", () => {
  let testPlayer = Controller.addPlayer();
  let testPlayer2 = Controller.addPlayer();
  Controller.start();
  testPlayer.getBoard().placeShip({ x: 4, y: 7, length: 2 });
  expect(testPlayer2.shoot(4, 7)).toEqual("hit");
});

test("Checking if game can be won", () => {
  let testPlayer = Player();
  let testPlayer2 = Player();
  Controller.start();
  testPlayer.getBoard().placeShip({ length: 1, x: 0, y: 0 });
  testPlayer2.shoot(0, 0);
});
