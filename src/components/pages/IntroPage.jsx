import React, { useState } from 'react';
import StartButton from '../ui/StartButton';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from '../../styles/sxStyles'; // スタイルをインポート

function IntroPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleStart = () => {
    navigate('/navigation?n=1');
  };

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
      {/* スタート地点への案内 */}
      <Paper
        elevation={2}
        sx={styles.sheet}
      >
        <Typography sx={styles.title}>
          まずはスタート地点へ移動してください
        </Typography>
        <Typography sx={styles.bodyText}>
          スタート地点は「溝の口駅前 きらりデッキ」
        </Typography>
        <Box
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 2,
          }}
        >
          <iframe
            title="溝の口駅前 円筒分水広場"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1622.0691058325642!2d139.6113513038319!3d35.59965712270186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f50001b5b311%3A0xda17c35de2ad563c!2z44Kt44Op44Oq44OH44OD44Kt!5e0!3m2!1sja!2sjp!4v1748177161332!5m2!1sja!2sjp"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Paper>

      {/* シナリオ導入（開閉式） */}
      <Paper
        elevation={1}
        sx={styles.sheet}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="subtitle1" color="primary" fontWeight={700}>
            シナリオ導入{open ? '' : '（移動が完了したら開く）'}
          </Typography>
          <IconButton onClick={() => setOpen((prev) => !prev)} size="small">
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Collapse in={open}>
          <Box sx={styles.conversationBox}>
            <Box
              component="img"
              src="/icon/cat.png"
              alt="のくち"
              sx={styles.icon}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight={700} color="primary" gutterBottom>
                のくち
              </Typography>
              <Typography sx={styles.bodyText}>
                ボクは“のくち”。この町の歴史を案内するネコだよ。<br />
                まずはスタート地点へ！<br />
                そこから過去へタイムトラベル。<br />
                君のひらめきで謎を解き明かしてほしいニャ！
              </Typography>
            </Box>
          </Box>
        </Collapse>
      </Paper>

      {/* スタートボタン */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pt: 2,
        }}
      >
        <StartButton
          onStart={handleStart}
          buttonName={'歴史をめぐる'}
        />
      </Box>
    </Box>
  );
}

export default IntroPage;