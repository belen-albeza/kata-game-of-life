import styles from "./App.module.css";
import Display from "./Display";

function App() {
  const board = {
    cells: [
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
    ],
    cols: 4,
    rows: 3,
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Game of Life</h1>
      </header>
      <main>
        <Display {...board} />
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
