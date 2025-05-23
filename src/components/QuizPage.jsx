import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AnswerInput from './AnswerInput';

function QuizPage() {
  const location = useLocation();
  const [questionNumber, setQuestionNumber] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    setQuestionNumber(q);
  }, [location.search]);

  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff5e1',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100vw',
        }}
      >
        <img
          src={`/Quiz/Quiz${questionNumber}.png`}
          alt="main visual"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxWidth: '100vw',
          }}
        />
        <div
          style={{
            width: '100%',
            paddingTop: 20,
            paddingBottom: 20,
            background: '#fff5e1',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <AnswerInput questionNumber={questionNumber} />
        </div>
      </div>
      {/* 他のコンポーネント */}
    </div>
  );
}

export default QuizPage;