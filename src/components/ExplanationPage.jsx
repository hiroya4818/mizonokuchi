import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';
import { useNavigate } from 'react-router-dom';

function ExplanationPage({ catMessage = "次の目印を探してみようニャ！", description = "次の目印は、溝の口駅前 円筒分水広場にあるよ！", imageSrc = "/images/navigation.png" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [explanationNumber, setExpalanationNumber] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const e = params.get('e');
    setExpalanationNumber(e);
  }, [location.search]);

  const handleStart = () => {
    navigate(`/navigation?n=${Number(explanationNumber) + 1}`);
  }

    return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#fff5e1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 5,
        px: 2,
      }}
    >
      {/* ネコと説明文 */}
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          maxWidth: 600,
          mb: 4,
          p: 3,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="/icon/cat.png"
          alt="のくち"
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: 1,
            mr: 2,
          }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="primary" gutterBottom>
            {catMessage}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Paper>

      {/* 回答欄 */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          justifyContent: 'center',
          pb: 2,
        }}
      >
        <StartButton
          onStart={handleStart}
          buttonName={'次の目的地へ'}
        />
      </Box>
    </Box>
  );
}

export default ExplanationPage;