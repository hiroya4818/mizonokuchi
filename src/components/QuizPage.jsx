import AnswerInput from './AnswerInput';
import StartButton from './StartButton';

function QuizPage() {
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
          src="/Quiz/Quiz1.png"
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
          <AnswerInput />
        </div>
      </div>
      {/* 他のコンポーネント */}
    </div>
  );
}

export default QuizPage;
