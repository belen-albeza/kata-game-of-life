import styles from "./App.module.css";
import Display from "./Display";
import { Game } from "../core";
import { useState, useRef } from "react";

function App() {
  const ref = useRef(
    new Game(`................
.*..............
..**............
.**.............
................
................
................
................
................
................
................
................
................
................
................
................`)
  );

  const [cells, setCells] = useState(ref.current.cells().map((x) => x > 0));
  const [gen, setGen] = useState(ref.current.generation);

  const tick = () => {
    ref.current.tick();
    setCells(ref.current.cells().map((x) => x > 0));
    setGen(ref.current.generation);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Game of Life</h1>
      </header>
      <main className={styles.content}>
        <Display
          cells={cells}
          cols={ref.current.width()}
          rows={ref.current.height()}
        />
        <section>
          <p>
            Generation: <b>{gen}</b>
          </p>
          <p>
            <button onClick={() => tick()}>Tick ⏩</button>
          </p>
        </section>
      </main>
      <footer>
        <p>
          <i>Game of Life</i> kata by{" "}
          <a href="https://ladybenko.net">ladybenko</a>.
        </p>
        <p>
          <a href="https://github.com/belen-albeza/kata-game-of-like/">
            Source Code
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
