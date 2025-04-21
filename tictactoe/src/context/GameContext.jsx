// File: src/context/GameContext.jsx
import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [players, setPlayers] = useState({ X: "", O: "" });
  const [gridSize, setGridSize] = useState(3);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameMode, setGameMode] = useState("PVP"); // "PVP" or "PVC"

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        gridSize,
        setGridSize,
        board,
        setBoard,
        isXNext,
        setIsXNext,
        gameMode,
        setGameMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
