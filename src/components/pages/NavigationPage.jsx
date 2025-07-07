import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswerInput from '../ui/AnswerInput';
import { NAVIGATION_INFO } from '../../mocks/navigationData';
import styles from '../../styles/sxStyles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function NavigationPage() {
  const location = useLocation();
  const [navigationNumber, setNavigationNumber] = useState(null);
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const n = Number(params.get('n'));
    setNavigationNumber(n);
  }, [location.search]);

  const navData = navigationNumber ? NAVIGATION_INFO[navigationNumber - 1] : null;

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
        <Box sx={styles.conversationBox}>
          <Box
            component="img"
            src="/icon/cat.png"
            alt="のくち"
            sx={styles.icon}
          />
          <Box>
            <Typography sx={styles.title} color="primary" gutterBottom>
              マップの場所に移動して<br />次のクイズの答えを探そう！
            </Typography>
          </Box>
        </Box>
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
            src={navData?.mapSrc}
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
            color: '#333',
            fontWeight: 500,
            fontFamily: '"Rounded Mplus 1c", "Noto Sans JP", "Yu Gothic", "Hiragino Sans", sans-serif',
            textDecoration: 'underline',
          }}
        >
          {navData?.description}
        </Typography>
      </Paper>

      {/* 画像 */}
      <Paper
        elevation={1}
        sx={styles.sheet}
      >
        <Typography sx={styles.title} textAlign="center">
          Q.{navData?.question}
        </Typography>
        {navData ? (
          <Box
            component="img"
            src={navData.imageSrc}
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
          flexDirection: 'column',
          alignItems: 'center',
          pb: 2,
        }}
      >
        <AnswerInput navigationNumber={navigationNumber} />
        <Button
          variant="text"
          size="medium"
          sx={{ mt: 2, color: '#888' }}
          onClick={() => setShowAnswerDialog(true)}
        >
          本当にわからないときは…答えを見る
        </Button>
      </Box>

      {/* 答えダイアログ */}
      <Dialog
        open={showAnswerDialog}
        onClose={() => setShowAnswerDialog(false)}
        PaperProps={{
          sx: { minWidth: 260, maxWidth: 340, borderRadius: 3 }
        }}
      >
        <DialogContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
            答え
          </Typography>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 2, color: '#c00' }}>
            {navData?.answer}
          </Typography>
          <Typography sx={{ color: '#444', whiteSpace: 'pre-line', mb: 1 }}>
            {navData?.answerDetail
              ? navData.answerDetail
              : 'この答えは現地やヒントから導き出せます。詳しい解説は現地の案内やアプリ内の説明も参考にしてください。'}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            onClick={() => setShowAnswerDialog(false)}
            variant="contained"
            color="primary"
            size="large"
            sx={styles.button}
            autoFocus
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NavigationPage;