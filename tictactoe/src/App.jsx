// File: src/App.jsx
import { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Typography, Switch, Box } from "@mui/material";
// import { GameProvider } from "./context/GameContext";
import GameModeSelector from "./components/GameModeSelector";
import { lightTheme, darkTheme } from "./theme/muiTheme";
import PlayerForm from "./components/PlayerForm";
import PlayerStatus from "./components/PlayerStatus";
import GridSizeSelector from "./components/GridSizeSelector";
import GameBoard from "./components/GameBoard";
import GameProvider from "./context/GameContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GameProvider>
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Tic Tac Toe</Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>
          <PlayerForm />
          <GridSizeSelector />
          <GameModeSelector />

          <PlayerStatus />
          <GameBoard />
        </Container>
      </GameProvider>
    
    </ThemeProvider>
  );
}

export default App;
