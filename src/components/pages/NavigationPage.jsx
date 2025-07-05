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
        <Box sx={styles.conversationBox}>
          <Box
            component="img"
            src="/icon/cat.png"
            alt="のくち"
            sx={styles.icon}
          />
          <Box>
            <Typography sx={styles.title} color="primary" gutterBottom>
              マップの場所に移動して<br/>次のクイズの答えを探そう！
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
        <Typography
          sx={{
            mt: 2,
            mb: 1,
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.08rem' },
            color: '#333', // ← ここを濃いグレーに変更
            fontWeight: 500, // ← 少し太く
            fontFamily: '"Rounded Mplus 1c", "Noto Sans JP", "Yu Gothic", "Hiragino Sans", sans-serif',
            textDecoration: 'underline',
          }}
        >
          {NAVIGATION_INFO[navigationNumber - 1]?.description}
        </Typography>
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
        <AnswerInput navigationNumber={navigationNumber} />
      </Box>
    </Box>
  );
}

export default NavigationPage;