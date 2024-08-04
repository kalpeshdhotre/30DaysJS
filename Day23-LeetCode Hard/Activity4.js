/* Activity 4: N-Queens
• Task 4: Solve the "N-Queens" problem on LeetCode.
o Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
o Log the distinct solutions for a few test cases. */

function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q") return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q") return false;
    }
    return true;
  }

  function placeQueens(row) {
    if (row === n) {
      const solution = board.map((row) => row.join(""));
      results.push(solution);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        placeQueens(row + 1);
        board[row][col] = ".";
      }
    }
  }

  placeQueens(0);
  return results;
}

const n1 = 4;
const n2 = 8;

console.log(solveNQueens(n1));
console.log(solveNQueens(n2));
