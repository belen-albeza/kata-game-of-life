import { Grid } from "./grid";

export class Game {
  grid: Grid;
  generation: number;

  constructor(input: string) {
    this.grid = Grid.fromString(input);
    this.generation = 1;
  }

  tick() {
    const cells = Array.from(this.grid).map(Game.computeCell);
    this.grid = new Grid(cells, this.grid.width, this.grid.height);
    this.generation += 1;
    console.log("generation is now", this.generation);
  }

  cells(): number[] {
    return Array.from(this.grid).map(({ cell }) => cell);
  }

  width(): number {
    return this.grid.width;
  }

  height(): number {
    return this.grid.height;
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
