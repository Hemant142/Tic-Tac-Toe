// File: src/hooks/useTicTacToe.js
import { useGame } from "../context/GameContext";
import { getWinningPatterns } from "../utils/winningPatterns";

const useTicTacToe = () => {
  const {
    board,
    setBoard,
    isXNext,
    setIsXNext,
    gridSize,
    gameMode,
  } = useGame();

  const patterns = getWinningPatterns(gridSize);

  const calculateWinner = (board) => {
    for (let pattern of patterns) {
      const values = pattern.map(i => board[i]);
      if (values.every(v => v && v === values[0])) {
        return values[0];
      }
    }
    return null;
  };

  const computerMove = (newBoard) => {
    const emptyIndices = newBoard.map((val, idx) => val === null ? idx : null).filter(i => i !== null);
    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    if (randomIndex !== undefined) {
      setTimeout(() => {
        const updatedBoard = [...newBoard];
        updatedBoard[randomIndex] = "O";
        setBoard(updatedBoard);
        setIsXNext(true);
      }, 500); // Delay for realism
    }
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    if (gameMode === "PVC" && isXNext) {
      setIsXNext(false); // Temporarily disable player input
      setTimeout(() => {
        computerMove(newBoard);
      }, 300);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const getStatusMessage = (players) => {
    const winner = calculateWinner(board);
    if (winner) return `🏆 ${players[winner] || winner} Wins!`;
    if (!board.includes(null)) return "🤝 It's a draw!";
    return `⏳ ${players[isXNext ? "X" : "O"] || (isXNext ? "X" : "O")}'s Turn`;
  };

  const resetGame = () => {
    setBoard(Array(gridSize * gridSize).fill(null));
    setIsXNext(true);
  };

  return { handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
