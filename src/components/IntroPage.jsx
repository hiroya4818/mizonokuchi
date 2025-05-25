import React, { useState } from 'react';
import StartButton from './StartButton';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function IntroPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleStart = () => {
    navigate('/quiz?q=1');
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
        sx={{
          width: '100%',
          maxWidth: 600,
          mb: 4,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" color="primary" fontWeight={700} gutterBottom>
          まずはスタート地点へ移動してください
        </Typography>
        <Typography sx={{ mb: 2 }}>
          スタート地点は「溝の口駅前 円筒分水広場」です。
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
            height="300"
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
        sx={{
          width: '100%',
          maxWidth: 600,
          borderRadius: 2,
          p: 3,
          mb: 2,
        }}
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
          <Box>
            <Typography sx={{ mb: 1 }}>
              あなたが溝の口駅を出て、円筒分水広場に足を踏み入れたその時――どこからともなく、不思議な声が聞こえてきます。
            </Typography>
            <Box
              component="blockquote"
              sx={{
                color: '#555',
                fontStyle: 'italic',
                borderLeft: '4px solid #014421',
                pl: 2,
                my: 1,
                background: '#f7f7f7',
                borderRadius: 1,
              }}
            >
              「やあ、旅人さん。ここは“みぞのくち”の時の流れが交わる場所――円筒分水広場だニャ。<br />
              ボクの名前は“のくち”。この町の歴史を見守ってきた、しゃべれるネコなんだニャ。」
            </Box>
            <Typography sx={{ mb: 1 }}>
              あなたの足元に、ふわりと現れる一匹のネコ。その瞳は、まるで過去と未来をすべて知っているかのように輝いています。
            </Typography>
            <Box
              component="blockquote"
              sx={{
                color: '#555',
                fontStyle: 'italic',
                borderLeft: '4px solid #014421',
                pl: 2,
                my: 1,
                background: '#f7f7f7',
                borderRadius: 1,
              }}
            >
              「この町には、まだ誰も知らない“時の謎”がたくさん眠っているニャ。<br />
              さあ、ボクと一緒に、みぞのくちの時空を旅してみないかニャ？<br />
              きみの力で、過去の事件や不思議を解き明かして、現代のみぞのくちを救ってほしいニャ！」
            </Box>
            <Typography>
              あなたは“のくち”に導かれ、今まさに、みぞのくちの歴史を巡るタイムトラベルの冒険へと踏み出します――。
            </Typography>
          </Box>
        </Collapse>
      </Paper>

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