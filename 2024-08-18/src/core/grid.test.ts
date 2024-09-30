import { expect, it, describe } from "bun:test";
import { Grid } from "./grid";

describe("Grid", () => {
  it("Gets constructed from input text", () => {
    const input = `........
....*...
...**...
........`;
    const grid = Grid.fromString(input);

    expect(grid.width).toBe(8);
    expect(grid.height).toBe(4);
    expect(grid.cells).toHaveLength(32);
    expect(grid.cells[12]).toBe(1);
    expect(grid.cells[0]).toBe(0);
  });

  it("Fetches a cell", () => {
    const input = "..x\n..x\n..x";
    const grid = Grid.fromString(input);

    expect(grid.cellAt(0, 0)).toBe(0);
    expect(grid.cellAt(2, 2)).toBe(1);
    expect(grid.cellAt(-1, -1)).toBe(0);
    expect(grid.cellAt(3, 3)).toBe(0);
  });

  it("Counts the neighbors", () => {
    const input = "..x\n..x\n..x";
    const grid = Grid.fromString(input);

    expect(grid.neighborsAt(0, 0)).toBe(0);
    expect(grid.neighborsAt(2, 0)).toBe(1);
    expect(grid.neighborsAt(2, 1)).toBe(2);
  });

  it("Iterates over the grid returning the cell and its neighbor count", () => {
    const input = ".xx\n.x.";
    const grid = Grid.fromString(input);

    const expected = [
      { cell: 0, neighbors: 2 },
      { cell: 1, neighbors: 2 },
      { cell: 1, neighbors: 2 },

      { cell: 0, neighbors: 2 },
      { cell: 1, neighbors: 2 },
      { cell: 0, neighbors: 3 },
    ];
    const res = Array.from(grid);

    expect(res).toEqual(expected);
  });
});
