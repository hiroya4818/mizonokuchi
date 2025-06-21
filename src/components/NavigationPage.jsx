import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswerInput from './AnswerInput';
import {NAVIGATION_INFO} from '../mocks/data';

function NavigationPage({ catMessage = "目印を探してみようニャ！", description = "次の目印は、溝の口駅前 円筒分水広場にあるよ！", imageSrc = "/images/navigation.png" }) {
  const location = useLocation();
  const [navigationNumber, setNavigationNumber] = useState(null);
  let isMissAnswer = false;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const n = Number(params.get('n'));
    setNavigationNumber(n);
  }, [location.search]);

  // const answer = (answerWord) => {
  //   if (answerWord === navigationData[navigationNumber - 1].answer) {
  //     return true;
  //   } else {
  //     isMissAnswer = true;
  //   }
  // };

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
      {/* ネコと説明文 */}
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          maxWidth: 600,
          mb: 4,
          p: 3,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="/icon/cat.png"
          alt="のくち"
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: 1,
            mr: 2,
          }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="primary" gutterBottom>
            マップの場所に移動して目印を探してみよう！
          </Typography>
          <Typography>{ NAVIGATION_INFO[navigationNumber - 1]?.description }</Typography>
        </Box>
      </Paper>

      {/* 画像 */}
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          maxWidth: 600,
          borderRadius: 2,
          p: 2,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ mb: 2, fontWeight: 'bold'}}>
          Q.{ NAVIGATION_INFO[navigationNumber - 1]?.question }
        </Typography>
        {navigationNumber && NAVIGATION_INFO[navigationNumber - 1] ? (
          <Box
            component="img"
            src={NAVIGATION_INFO[navigationNumber - 1].imageSrc}
            alt="目印の画像"
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
        {/* <Typography variant="h6" color="primary" sx={{ mb: 2 }}> */}

        <AnswerInput navigationNumber={navigationNumber} />
      </Box>
    </Box>
  );
}

export default NavigationPage;