import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswerInput from '../ui/AnswerInput';
import {NAVIGATION_INFO} from '../../mocks/navigationData';
import styles from '../../styles/sxStyles'; // スタイルをインポート

function NavigationPage() {
  const location = useLocation();
  const [navigationNumber, setNavigationNumber] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const n = Number(params.get('n'));
    setNavigationNumber(n);
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
      {/* ネコと説明文 */}
      <Paper
        elevation={2}
        sx={styles.sheet}
      >
        {/* ネコ画像＋文章を横並びで1セット */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
            width: '100%',
            mb: 2,
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
            <Typography sx={styles.title} color="primary" gutterBottom>
              マップの場所に移動して<br/>次のクイズの答えを探そう！
            </Typography>
            <Typography>
              {NAVIGATION_INFO[navigationNumber - 1]?.description}
            </Typography>
          </Box>
        </Box>
        {/* Googleマップを下に配置 */}
        <Box
          sx={{
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 2,
            mt: 1,
          }}
        >
          <iframe
            title="目的地マップ"
            src={NAVIGATION_INFO[navigationNumber - 1]?.mapSrc}
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Paper>

      {/* 画像 */}
      <Paper
        elevation={1}
        sx={styles.sheet}
      >
        <Typography sx={styles.title} textAlign="center">
          Q.{ NAVIGATION_INFO[navigationNumber - 1]?.question }
        </Typography>
        {navigationNumber && NAVIGATION_INFO[navigationNumber - 1] ? (
          <Box
            component="img"
            src={NAVIGATION_INFO[navigationNumber - 1].imageSrc}
            alt="目印の画像"
            sx={styles.image}
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