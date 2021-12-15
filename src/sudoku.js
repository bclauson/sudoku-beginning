import { ContextReplacementPlugin } from "webpack";

export default function Sudoku() {
  this.board = (
    [[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
  );
}

Sudoku.prototype.checkRow = (row, number) => {
  row.forEach((element) => {
    if (element === number) {
      return false;
    };
  });
  return true;
};










