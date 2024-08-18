import React from "react";
import styles from "./Display.module.css";

interface DisplayProps {
  cells: boolean[];
  cols: number;
  rows: number;
}

interface DisplayCSSProperties extends React.CSSProperties {
  "--cols"?: number;
  "--rows"?: number;
}

const Display = ({ cells, cols, rows }: DisplayProps) => {
  const style: DisplayCSSProperties = {
    "--cols": cols,
    "--rows": rows,
  };

  return (
    <article style={style} className={styles.board}>
      {cells.map((isBusy) => (
        <div className={styles.cell}>{isBusy ? "🐸" : " "}</div>
      ))}
    </article>
  );
};

export default Display;
