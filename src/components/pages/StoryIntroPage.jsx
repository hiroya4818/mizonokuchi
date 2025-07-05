import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import StartButton from '../ui/StartButton';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/sxStyles'; // スタイルをインポート

const storyParagraphs = [
  "ようこそ、みぞのくちへ。",
  "この町には、時を超えて\n受け継がれてきた“謎”が眠っています。",
  "あなたのガイドは、\n町のことをよく知るネコの“のくち”。",
  "歴史の舞台を巡りながら、\n隠されたヒントを集めてください。",
  "さあ、物語の扉を開き、\nみぞのくちの秘密を解き明かしましょう。"
];

function StoryIntroPage() {
  const [visible, setVisible] = useState(Array(storyParagraphs.length).fill(false));
  const refs = useRef([]);

  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/intro');
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            // 先頭 or 1つ前が表示済みなら表示
            if (idx === 0 || visible[idx - 1]) {
              setVisible(v => {
                if (v[idx]) return v;
                const next = [...v];
                next[idx] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    refs.current.forEach((ref, idx) => {
      if (ref && (idx === 0 || visible[idx - 1])) observer.observe(ref);
    });
    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visible]);

  return (
    <Box sx={styles.baseBox}>
      <Paper
        elevation={3}
        sx={styles.sheet}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box
            component="img"
            src="/icon/cat.png"
            alt="のくち"
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: 2,
              background: '#f5fafd',
            }}
          />
        </Box>
        <Typography
          variant="h5"
          fontWeight={700}
          color="primary"
          sx={{ mb: 3, textAlign: 'center', letterSpacing: 2 }}
        >
          みぞのくち謎解き物語
        </Typography>
        {storyParagraphs.map((text, idx) => (
          <Typography
            key={idx}
            ref={el => refs.current[idx] = el}
            data-idx={idx}
            sx={{
              opacity: visible[idx] ? 1 : 0,
              transform: visible[idx] ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
              fontSize: { xs: '1rem', sm: '1.08rem' },
              lineHeight: 1.7,
              color: '#444',
              mb: 3,
              textAlign: 'center',
              fontFamily: '"Rounded Mplus 1c", "Noto Sans JP", "Yu Gothic", "Hiragino Sans", sans-serif',
              whiteSpace: 'pre-line',
              fontWeight: 'bold', // ← ここを追加
            }}
          >
            {text}
          </Typography>
        ))}
      </Paper>
      <StartButton
        onStart={handleStart}
        buttonName={'次へ'}
      />
    </Box>
  );
}

export default StoryIntroPage;