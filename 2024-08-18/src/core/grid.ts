export class Grid {
  cells: number[];
  width: number;
  height: number;

  static fromString(input: string) {
    const rows = input.split("\n");
    const height = rows.length;

    const cells = rows
      .map((row) => row.split(""))
      .flat()
      .map((x) => (x === " " || x === "." ? 0 : 1));
    const width = cells.length / height;

    return new Grid(cells, width, height);
  }

  constructor(cells: number[], width: number, height: number) {
    this.cells = cells;
    this.width = width;
    this.height = height;
  }

  cellAt(x: number, y: number): number {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return 0;
    }

    const i = y * this.width + x;
    return this.cells[i];
  }

  neighborsAt(x: number, y: number): number {
    return [
      this.cellAt(x, y - 1),
      this.cellAt(x + 1, y - 1),
      this.cellAt(x + 1, y),
      this.cellAt(x + 1, y + 1),
      this.cellAt(x, y + 1),
      this.cellAt(x - 1, y + 1),
      this.cellAt(x - 1, y),
      this.cellAt(x - 1, y - 1),
    ].reduce((acc, x) => x + acc, 0);
  }

  *[Symbol.iterator]() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        yield {
          cell: this.cellAt(x, y),
          neighbors: this.neighborsAt(x, y),
        };
      }
    }
  }
}
