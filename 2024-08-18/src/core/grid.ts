export class Grid {
  cells: number[];
  width: number;
  height: number;

  constructor(input: string) {
    this.cells = [];
    this.width = 0;
    this.height = 0;

    const rows = input.split("\n");
    this.height = rows.length;

    this.cells = rows
      .map((row) => row.split(""))
      .flat()
      .map((x) => (x === " " || x === "." ? 0 : 1));
    this.width = this.cells.length / this.height;
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
