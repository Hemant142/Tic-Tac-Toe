export const getWinningPatterns = (size) => {
    const patterns = [];
  
    // Rows
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
      }
      patterns.push(row);
    }
  
    // Columns
    for (let j = 0; j < size; j++) {
      const col = [];
      for (let i = 0; i < size; i++) {
        col.push(i * size + j);
      }
      patterns.push(col);
    }
  
    // Diagonals
    const diag1 = [], diag2 = [];
    for (let i = 0; i < size; i++) {
      diag1.push(i * size + i);
      diag2.push(i * size + (size - i - 1));
    }
    patterns.push(diag1, diag2);
  
    return patterns;
  };
  