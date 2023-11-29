import React from "react";
import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameLog from "./components/GameLog.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayerHandler = (rowIndex, colIndex) => {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === "X" ? "O" : "X";
    });
    setGameTurns((prevGameTurns) => {
      const updatedGameTurns = [
        {
          selectedCell: { row: rowIndex, col: colIndex },
          currentPlayer: { activePlayer },
        },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Asım" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Deniz" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onCellSelect={activePlayerHandler} turns={gameTurns} />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
