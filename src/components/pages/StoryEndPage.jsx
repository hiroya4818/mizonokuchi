import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import styles from '../../styles/sxStyles';

const endParagraphs = [
  "おめでとうございます！",
  "あなたはみぞのくちの“謎”を解き明かしました。",
  "時を超えた冒険の中で、\n町の歴史にふれることができました。",
  "これからも、みぞのくちの魅力を\nたくさんの人に伝えてください。",
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
            src="/clear.png" // クリア用画像のパスに変更
            alt="クリア"
            sx={{
              width: '100%',
              maxWidth: 480, // 必要に応じて最大幅を調整
              height: 'auto',
              objectFit: 'cover',
              boxShadow: 2,
              background: '#f5fafd',
              borderRadius: 3,
              display: 'block',
              mx: 'auto',
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
        <Typography sx={{ mb: 1, fontWeight: 'bold', whiteSpace: 'pre-line' }}>
          みなさんの声が次回作づくりの力になりますので、アンケートご協力お願いします！
        </Typography>
        <Button
            variant="contained"
            size="large">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScz0CAjs8i4fJ-H9_mL9l-rColH1Kg5iPKA3cSfYKHsJJIdHw/viewform?usp=dialog" // ←ここにGoogleフォームのURLを入れてください
          // target="_blank"
          // rel="noopener noreferrer"
          style={{
            color: '#fff',
          }}
        >
          アンケートに答える
        </a>
          </Button>
      </Box>
    </Box>
  );
}

export default StoryEndPage;