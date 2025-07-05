import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
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
  const [isShowImage, setIsShowImage] = useState(false); // ← useStateで管理
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
    if (correct) {
      if (navigationNumber) {
        setIsShowImage(true); // ← ここでtrueにする
        setDialogMessage('正解！時空の扉が開き、\n過去の溝の口へタイムスリップする…！');
      } else {
        setIsShowImage(true); // ← ここもtrue
        setDialogMessage('正解！時空の扉が開き、\n現代の溝の口へタイムスリップする…！');
      }
    } else {
      setIsShowImage(false); // ← 不正解時はfalse
      setDialogMessage('不正解！もう一度、考えてみよう');

    }
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setIsShowImage(false); // ← ダイアログ閉じたらリセット
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
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            minWidth: 320,
            maxWidth: 360,
            borderRadius: 3,
          },
        }}
      >
        <DialogContent sx={{ ...styles.title, textAlign: 'center' }}>
          {dialogMessage}
          {isShowImage && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/icon/timetravel.gif"
                alt="タイムトラベル中"
                style={{
                  width: '100%',
                  marginTop: 16,
                  animation: 'spin 1.5s linear infinite',
                  filter: 'drop-shadow(0 0 10px #0ed2f7)',
                  display: 'block',
                }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="large"
            onClick={handleDialogClose}
            autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AnswerInput;