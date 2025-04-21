import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useGame } from "../context/GameContext";
import useTicTacToe from "../hooks/useTicTacToe";

const PlayerStatus = () => {
  const { players } = useGame();
  const { getStatusMessage, resetGame } = useTicTacToe();
  const status = getStatusMessage(players);

  return (
    <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">{status}</Typography>
      <Button variant="contained" color="secondary" onClick={resetGame}>
        Reset
      </Button>
    </Box>
  );
};

export default PlayerStatus;
