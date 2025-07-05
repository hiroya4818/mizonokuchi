import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartButton from '../ui/StartButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from '../../styles/sxStyles'; // スタイルをインポート

function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/storyIntro');
  };

  return (
    <Box sx={styles.baseBox}>
      <Paper
        elevation={2}
        sx={styles.sheet}
      >
        <Box
          component="img"
          src="/image.png"
          alt="main visual"
          sx={styles.image}
        />
        <Typography sx={styles.title} textAlign={'center'}>
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