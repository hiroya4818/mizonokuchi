import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswerInput from '../ui/AnswerInput';
import { QUESTION_INFO } from '../../mocks/questionData';
import styles from '../../styles/sxStyles'; // スタイルをインポート

function QuizPage() {
  const location = useLocation();
  const [questionNumber, setQuestionNumber] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = Number(params.get('q'));
    setQuestionNumber(q);
    if (QUESTION_INFO[q - 1]) setData(QUESTION_INFO[q - 1]);
    else setData({});
  }, [location.search]);

  return (
    <Box sx={styles.baseBox}>
      <Paper
        elevation={2}
        sx={styles.sheet}
      >
        <Typography
          textAlign={'center'}
          sx={styles.title}
        >
          {data?.title}
        </Typography>

        {/* 会話全体 */}
        {data?.conversation.length > 0 && data?.conversation.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              mb: idx !== data.length - 1 ? 2 : 0,
              backgroundColor: item.name === "のくち" ? '#fff' : '#e3eafc',
              borderRadius: 2,
              p: 1.2,
            }}
          >
            <Box
              component="img"
              src={item.imageSrc}
              alt={item.name}
              sx={styles.iconMini}
            />
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="primary"
                gutterBottom
              >
                {item.name}
              </Typography>
              {item.message.split('\n').map((line, i) => (
                <Typography key={i}>{line}</Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Paper>
      {/* 問題画像 */}
      <Paper
        elevation={1}
        sx={styles.sheet}
      >
        <Typography sx={{ mb: 2, fontWeight: 'bold'}}>
          Q.{ data?.question }
        </Typography>
        {data ? (
          <Box
            component="img"
            src={data.imageSrc}
            alt="目印の画像"
            sx={styles.image} // スタイルを適用
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