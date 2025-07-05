import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import styles from '../../styles/sxStyles';

const endParagraphs = [
  "おめでとうございます！",
  "あなたはみぞのくちの“謎”をすべて解き明かしました。",
  "時を超えた冒険の中で、\n町の歴史や人々の想いにふれることができました。",
  "これからも、みぞのくちの魅力を\nたくさんの人に伝えていってください。",
  "また新しい物語でお会いしましょう。"
];

function StoryEndPage() {
  const [visible, setVisible] = useState(Array(endParagraphs.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
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
    // ★ refs.currentをローカル変数にコピー
    const currentRefs = refs.current;
    currentRefs.forEach((ref, idx) => {
      if (ref && (idx === 0 || visible[idx - 1])) observer.observe(ref);
    });
    return () => {
      currentRefs.forEach(ref => {
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
          物語クリア！
        </Typography>
        {endParagraphs.map((text, idx) => (
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
              fontWeight: 'bold',
            }}
          >
            {text}
          </Typography>
        ))}
      </Paper>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography sx={{ mb: 1, fontWeight: 'bold', color: '#1976d2' }}>
          よろしければアンケートにもご協力ください
        </Typography>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScz0CAjs8i4fJ-H9_mL9l-rColH1Kg5iPKA3cSfYKHsJJIdHw/viewform?usp=dialog" // ←ここにGoogleフォームのURLを入れてください
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            background: 'linear-gradient(90deg, #0ed2f7 0%, #b2fefa 100%)',
            color: '#222',
            borderRadius: 8,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px #0ed2f766',
            marginBottom: 16,
          }}
        >
          アンケートに答える
        </a>
      </Box>
    </Box>
  );
}

export default StoryEndPage;