import React from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import { useGame } from "../context/GameContext";

export default function GameModeSelector() {
  const { gameMode, setGameMode } = useGame();

  return (
    <Box mt={2}>
      <ToggleButtonGroup
        value={gameMode}
        exclusive
        onChange={(e, newMode) => {
          if (newMode) setGameMode(newMode);
        }}
        fullWidth
      >
        <ToggleButton value="PVP">Player vs Player</ToggleButton>
        <ToggleButton value="PVC">Player vs Computer</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
