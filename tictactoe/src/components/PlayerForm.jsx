import React from "react";
import { TextField, Box } from "@mui/material";
import { useGame } from "../context/GameContext";

const PlayerForm = () => {
  const { players, setPlayers } = useGame();

  return (
    <Box display="flex" gap={2} mt={2}>
      <TextField
        label="Player X Name"
        value={players.X}
        onChange={(e) => setPlayers(prev => ({ ...prev, X: e.target.value }))}
        fullWidth
      />
      <TextField
        label="Player O Name"
        value={players.O}
        onChange={(e) => setPlayers(prev => ({ ...prev, O: e.target.value }))}
        fullWidth
      />
    </Box>
  );
};

export default PlayerForm;
