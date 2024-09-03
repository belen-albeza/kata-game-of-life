import { Grid } from "./grid";

export class Game {
  grid: Grid;
  generation: number;

  constructor(input: string) {
    this.grid = new Grid(input);
    this.generation = 0;
  }

  tick() {
    this.grid.cells = Array.from(this.grid).map(Game.computeCell);
    this.generation += 1;
  }

  cells(): number[] {
    return Array.from(this.grid).map(({ cell }) => cell);
  }

  static computeCell({
    cell,
    neighbors,
  }: {
    cell: number;
    neighbors: number;
  }): number {
    const isAlive = cell > 0;

    if (!isAlive && neighbors === 3) {
      return 1;
    } else if (neighbors < 2) {
      return 0;
    } else if (neighbors > 3) {
      return 0;
    }

    return cell;
  }
}
