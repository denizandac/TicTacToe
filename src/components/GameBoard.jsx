const GameBoard = ({ onCellSelect, board }) => {
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onCellSelect(rowIndex, cellIndex)}
                  disabled={cell !== ""}
                >
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
