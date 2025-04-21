import React, { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { Box, Grid } from "@mui/material";
import Cell from "./Cell";

export default function GameBoard() {
  const { board, gridSize, setBoard } = useGame();
  useEffect(() => {
    setBoard(Array(gridSize * gridSize).fill(null));
  }, [gridSize, setBoard]);
  return (
    <Box mt={3}>
      <Grid
        container
        spacing={1}
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: 1,
        }}
      >
        {board.map((value, index) => (
          <Cell key={index} index={index} value={value} />
        ))}
      </Grid>
    </Box>
  );
}
