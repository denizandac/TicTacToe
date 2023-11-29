import { useState } from "react";

const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const GameBoard = ({ onCellSelect, turns }) => {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    gameBoard[turn.selectedCell.row][turn.selectedCell.col] =
      turn.currentPlayer.activePlayer;
  }
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const clickCellHandler = (rowIndex, columnIndex) => {
  //     //IMMUTABLE WAY
  //     setGameBoard((prevGameBoard) => {
  //       const newGameBoard = [...prevGameBoard.map((row) => [...row])];
  //       newGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
  //       return newGameBoard;
  //     });
  //     onCellSelect();
  //     // MUTABLE WAY
  //     // setGameBoard((prevGameBoard) => {
  //     //   prevGameBoard[rowIndex][columnIndex] = "X";
  //     //   return prevGameBoard;
  //     // });
  //   };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onCellSelect(rowIndex, cellIndex)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
