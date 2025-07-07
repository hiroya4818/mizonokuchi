import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnswerInput from '../ui/AnswerInput';
import { QUESTION_INFO } from '../../mocks/questionData';
import styles from '../../styles/sxStyles'; // スタイルをインポート
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function QuizPage() {
  const location = useLocation();
  const [questionNumber, setQuestionNumber] = useState(null);
  const [data, setData] = useState(null);
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  

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
          flexDirection: 'column',
          alignItems: 'center',
          pb: 2,
        }}
      >
        <AnswerInput questionNumber={questionNumber} />
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
            {data?.answer}
          </Typography>
          <Typography sx={{ color: '#444', whiteSpace: 'pre-line', mb: 1 }}>
            {data?.answerDetail
              ? data.answerDetail
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

export default QuizPage;