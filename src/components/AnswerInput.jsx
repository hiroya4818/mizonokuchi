import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_INFO } from '../mocks/data';

function AnswerInput({ questionNumber, navigationNumber }) {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  let isCorrect;

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    // ここで判定処理などを追加できます
    // 例: 正解なら遷移
    isCorrect = answer.trim() === NAVIGATION_INFO[navigationNumber - 1].answer;
    if (!isCorrect) {
      alert('不正解です。もう一度試してください。');
      return;
    } else {
      alert('正解です！次のステップへ進みます。');
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
    </div>
  );
}

export default AnswerInput;