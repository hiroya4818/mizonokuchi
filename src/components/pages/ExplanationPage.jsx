import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StartButton from '../ui/StartButton';
import { EXPLANATION_INFO } from '../../mocks/explanationData';
import styles from '../../styles/sxStyles'; // スタイルをインポート

function ExplanationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [explanationNumber, setExplanationNumber] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const e = Number(params.get('e'));
    setExplanationNumber(e);
    if (EXPLANATION_INFO[e - 1]) setData(EXPLANATION_INFO[e - 1]);
    else setData({});
  }, [location.search]);

  const handleStart = () => {
    if (explanationNumber === 6) navigate('/end');
    else navigate(`/navigation?n=${Number(explanationNumber) + 1}`);
  };

  return (
    <Box sx={styles.baseBox}>
      {/* タイトルも白い台紙に乗せる */}
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

      {/* 次の目的地へボタン */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          justifyContent: 'center',
          pb: 2,
          mt: 2,
        }}
      >
        <StartButton
          onStart={handleStart}
          buttonName={'次の目的地へ'}
        />
      </Box>
    </Box>
  );
}

export default ExplanationPage;