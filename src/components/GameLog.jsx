const GameLog = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.selectedCell.row}${turn.selectedCell.col}`}>
          {turn.currentPlayer.activePlayer} played at row (
          {turn.selectedCell.row}, {turn.selectedCell.col})
        </li>
      ))}
    </ol>
  );
};

export default GameLog;
