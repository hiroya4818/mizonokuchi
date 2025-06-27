import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_INFO } from '../../mocks/navigationData';
import { QUESTION_INFO } from '../../mocks/questionData';
import styles from '../../styles/sxStyles'; // スタイルをインポート


function AnswerInput({ questionNumber, navigationNumber }) {
  const [answer, setAnswer] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  let correctAnswer = '';
  if (navigationNumber && NAVIGATION_INFO[navigationNumber - 1]) {
    correctAnswer = NAVIGATION_INFO[navigationNumber - 1].answer;
  } else if (questionNumber && QUESTION_INFO[questionNumber - 1]) {
    correctAnswer = QUESTION_INFO[questionNumber - 1].answer;
  }

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const correct = answer.trim() === correctAnswer;
    setIsCorrect(correct);
    setDialogMessage(
      correct
        ? '正解！次のステップへ進もう'
        : '不正解！もう一度、考えてみよう'
    );
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    if (isCorrect) {
      if (questionNumber) {
        navigate(`/explanation?e=${Number(questionNumber)}`);
      } else {
        navigate(`/quiz?q=${Number(navigationNumber)}`);
      }
    }
  };

  return (
    <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
      <TextField
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="ここに回答を入力"
        variant="outlined"
        size="small"
        sx={{ background: '#fff' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginLeft: 2, fontWeight: 'bold' }}
      >
        決定
      </Button>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogContent sx={styles.title}>{dialogMessage}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AnswerInput;