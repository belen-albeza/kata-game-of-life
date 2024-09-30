import { describe, it, expect } from "bun:test";
import { Game } from "./game";

describe("Game", () => {
  it("Returns the cells", () => {
    const input = `...\nxxx`;
    const game = new Game(input);

    expect(game.cells()).toEqual([0, 0, 0, 1, 1, 1]);
  });

  it("Ticks to the next generation", () => {
    const input = `........
....*...
...**...
........`;
    const expectedInput = `........
...**...
...**...
........`;

    const game = new Game(input);
    game.tick();

    expect(game.cells()).toEqual(new Game(expectedInput).cells());
  });

  describe("Cell computation", () => {
    it("Returns alive if dead and neighbor count is 3", () => {
      const cell = { cell: 0, neighbors: 3 };
      expect(Game.computeCell(cell)).toBe(1);
    });

    it("Returns dead if neighbor count is more than 3", () => {
      const cell = { cell: 1, neighbors: 4 };
      expect(Game.computeCell(cell)).toBe(0);
    });

    it("Returns dead if neighbor count is less than 2", () => {
      const cell = { cell: 1, neighbors: 1 };
      expect(Game.computeCell(cell)).toBe(0);
    });

    it("Returns alive for live cells if neighbor count is 2 or 3", () => {
      const cell = { cell: 1, neighbors: 2 };
      expect(Game.computeCell(cell)).toBe(1);
    });
  });
});
