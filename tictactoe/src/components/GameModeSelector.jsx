// Let's start with the first component:
// File: src/components/GameModeSelector.jsx

import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";
import { useGame } from "../context/GameContext";

export default function GameModeSelector() {
  const { gameMode, setGameMode } = useGame();

  const handleChange = (event) => {
    setGameMode(event.target.value);
  };

  return (
    <Box my={2}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Game Mode</FormLabel>
        <RadioGroup row value={gameMode} onChange={handleChange}>
          <FormControlLabel value="PVP" control={<Radio />} label="Player vs Player" />
          <FormControlLabel value="PVC" control={<Radio />} label="Player vs Computer" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
