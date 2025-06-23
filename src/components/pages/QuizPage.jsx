import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswerInput from '../ui/AnswerInput';

function QuizPage() {
  const location = useLocation();
  const [questionNumber, setQuestionNumber] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = Number(params.get('q'));
    setQuestionNumber(q);
  }, [location.search]);

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
      {/* 問題画像 */}
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          maxWidth: 600,
          borderRadius: 2,
          p: 2,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {questionNumber ? (
          <Box
            component="img"
            src={`/Quiz/Quiz${questionNumber}.png`}
            alt={`クイズ${questionNumber}`}
            sx={{
              width: '100%',
              maxWidth: 500,
              height: 'auto',
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
        ) : (
          <Typography color="text.secondary">画像を読み込み中...</Typography>
        )}
      </Paper>

      {/* 回答欄 */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          justifyContent: 'center',
          pb: 2,
        }}
      >
        <AnswerInput questionNumber={questionNumber} />
      </Box>
    </Box>
  );
}

export default QuizPage;