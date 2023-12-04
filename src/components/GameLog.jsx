const GameLog = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.selectedCell.row}${turn.selectedCell.col}`}>
          {turn.currentPlayer} played {turn.currentSymbol} at (
          {turn.selectedCell.row}, {turn.selectedCell.col})
        </li>
      ))}
    </ol>
  );
};

export default GameLog;
