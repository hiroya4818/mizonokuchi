import React, { useState } from 'react';

function AnswerInput() {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    alert(`あなたの回答: ${answer}`);
    // ここに判定処理などを追加できます
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="ここに回答を入力"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button
        onClick={handleSubmit}
        style={{
          marginLeft: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        決定
      </button>
    </div>
  );
}

export default AnswerInput;