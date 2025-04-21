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

  const findBestMove = (newBoard) => {
    const opponent = "X";
    const ai = "O";

    // Try to win
    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) {
        const testBoard = [...newBoard];
        testBoard[i] = ai;
        if (calculateWinner(testBoard) === ai) {
          return i;
        }
      }
    }

    // Block opponent's win
    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) {
        const testBoard = [...newBoard];
        testBoard[i] = opponent;
        if (calculateWinner(testBoard) === opponent) {
          return i;
        }
      }
    }

    // Take center if available (for odd grid sizes)
    const center = Math.floor(newBoard.length / 2);
    if (newBoard[center] === null) return center;

    // Otherwise take a random move
    const emptyIndices = newBoard.map((val, idx) => val === null ? idx : null).filter(i => i !== null);
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  };

  const computerMove = (newBoard) => {
    const bestMove = findBestMove(newBoard);
    if (bestMove !== undefined) {
      setTimeout(() => {
        const updatedBoard = [...newBoard];
        updatedBoard[bestMove] = "O";
        setBoard(updatedBoard);
        setIsXNext(true);
      }, 500);
    }
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    if (gameMode === "PVC" && isXNext) {
      setIsXNext(false);
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
