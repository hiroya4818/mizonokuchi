import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartButton from '../ui/StartButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/intro');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#fff5e1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 5,
        px: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          maxWidth: 600,
          mb: 4,
          p: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/image.png"
          alt="main visual"
          sx={{
            width: '100%',
            maxWidth: 500,
            height: 'auto',
            borderRadius: 2,
            boxShadow: 2,
            mb: 3,
          }}
        />
        <Typography sx={{ mb: 2 }}>
          スタートボタンを押して冒険を始めよう！
        </Typography>
        <StartButton
          onStart={handleStart}
          buttonName={'スタート'}
        />
      </Paper>
    </Box>
  );
}

export default StartPage;