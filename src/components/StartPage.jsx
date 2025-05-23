import '../App.css';
import StartButton from './StartButton';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz?q=1');
  };

  return (
    <div
      className="App"
      style={{
        paddingTop: '30px',
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
          src="/image.png"
          alt="main visual"
          className="dreamy-image"
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
          <StartButton onStart={handleStart} />
        </div>
      </div>
      {/* 他のコンポーネント */}
    </div>
  );
}

export default StartPage;