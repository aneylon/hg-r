import { useState } from "react";

const TicTacToe = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O");
  }

  const click = (i) => {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} click={() => click(0)} />
        <Square value={squares[1]} click={() => click(1)} />
        <Square value={squares[2]} click={() => click(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} click={() => click(3)} />
        <Square value={squares[4]} click={() => click(4)} />
        <Square value={squares[5]} click={() => click(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} click={() => click(6)} />
        <Square value={squares[7]} click={() => click(7)} />
        <Square value={squares[8]} click={() => click(8)} />
      </div>
    </>
  );
};

const Square = ({ value, click }) => {
  // const Square = () => {
  // const [value, setValue] = useState(null);
  // const click = () => {
  //   console.log("clicked it");
  //   // setValue("X");
  // };
  return (
    <button className="square" onClick={click}>
      {value}
    </button>
  );
};

export default TicTacToe;
