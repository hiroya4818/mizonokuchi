import React from 'react';
import Button from '@mui/material/Button';

function StartButton({ onStart }) {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      onClick={onStart}
      sx={{
        fontWeight: 'bold',
        boxShadow: 2,
        borderRadius: 2,
        px: 4,
        py: 1.5,
      }}
    >
      スタート
    </Button>
  );
}

export default StartButton;