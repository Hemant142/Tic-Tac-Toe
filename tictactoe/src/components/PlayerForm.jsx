
import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useGame } from "../context/GameContext";

export default function PlayerForm() {
  const { players, setPlayers, gameMode } = useGame();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box my={2}>
      <Typography variant="h6">Player Info</Typography>
      <Box display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
        <TextField
          label="Player X Name"
          name="X"
          value={players.X}
          onChange={handleChange}
          fullWidth
        />
        {gameMode === "PVP" && (
          <TextField
            label="Player O Name"
            name="O"
            value={players.O}
            onChange={handleChange}
            fullWidth
          />
        )}
      </Box>
    </Box>
  );
}
