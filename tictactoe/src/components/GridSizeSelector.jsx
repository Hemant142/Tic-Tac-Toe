import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { useGame } from "../context/GameContext";

const GridSizeSelector = () => {
  const { gridSize, setGridSize } = useGame();

  return (
    <Box mt={2}>
      <FormControl fullWidth>
        <InputLabel>Grid Size</InputLabel>
        <Select
          value={gridSize}
          label="Grid Size"
          onChange={(e) => setGridSize(parseInt(e.target.value))}
        >
          {[3, 4, 5].map((size) => (
            <MenuItem key={size} value={size}>
              {size} x {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default GridSizeSelector;
