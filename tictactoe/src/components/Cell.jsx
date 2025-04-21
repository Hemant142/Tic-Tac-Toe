import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe'
import { Button } from '@mui/material'

export default function Cell({index,value}) {
  const {handleClick}=useTicTacToe()
  return (
    <Button
      variant="outlined"
      onClick={() => handleClick(index)}
      sx={{
        width: 80,
        height: 80,
        fontSize: 24,
        fontWeight: "bold"
      }}
    >
      {value}
    </Button>
  )
}


























