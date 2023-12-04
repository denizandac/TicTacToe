import React from "react";
import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameLog from "./components/GameLog.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const INITIAL_GAME_BOARD = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function deriveActivePlayer(turns) {
  const lastTurn = turns[0];
  if (lastTurn === undefined) {
    return "X";
  }
  return lastTurn.currentSymbol === "X" ? "O" : "X";
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol !== "" &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD].map((row) => [...row]);
  for (const turn of gameTurns) {
    gameBoard[turn.selectedCell.row][turn.selectedCell.col] =
      turn.currentSymbol;
  }
  return gameBoard;
}

function App() {
  const [playerNames, setPlayerNames] = useState({ X: "P1", O: "P2" });
  const [gameTurns, setGameTurns] = useState([]);
  const activeSymbol = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerNames);
  const isDraw = !winner && gameTurns.length === 9;

  const activeSymbolHandler = (rowIndex, colIndex) => {
    setGameTurns((prevGameTurns) => {
      const updatedGameTurns = [
        {
          selectedCell: { row: rowIndex, col: colIndex },
          currentPlayer: activeSymbol === "X" ? playerNames.X : playerNames.O,
          currentSymbol: activeSymbol,
        },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  };

  const resetHandler = () => {
    setGameTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={playerNames.X}
            symbol="X"
            isActive={activeSymbol === "X"}
            onEdit={(userInfo) =>
              setPlayerNames({ ...playerNames, X: userInfo.playerName })
            }
          />
          <Player
            name={playerNames.O}
            symbol="O"
            isActive={activeSymbol === "O"}
            onEdit={(userInfo) =>
              setPlayerNames({ ...playerNames, O: userInfo.playerName })
            }
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onReset={resetHandler} />
        )}
        <GameBoard onCellSelect={activeSymbolHandler} board={gameBoard} />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
