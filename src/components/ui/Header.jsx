import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home'; // ホームアイコン追加
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        minHeight: '30px',
        height: '30px',
        justifyContent: 'center',
        boxShadow: 'none',
        // より洗練された深緑＋半透明感
        background: 'linear-gradient(90deg, #1b3c2c 60%, #014421 100%)',
        backgroundColor: 'rgba(27,60,44,0.96)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: '30px !important',
          height: '30px',
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap', // 追加
        }}
      >
        <Button
          color="inherit"
          onClick={() => navigate('/')}
          sx={{
            fontWeight: 700,
            fontSize: { xs: 12, sm: 14 }, // 画面サイズでフォントサイズ調整
            textTransform: 'none',
            padding: 0,
            minWidth: 0,
            letterSpacing: '0.08em',
            fontFamily: `'Roboto Mono', 'Montserrat', 'Noto Sans JP', monospace, sans-serif`,
            mr: 2,
            maxWidth: { xs: 60, sm: 'none' }, // モバイルで幅制限
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HomeIcon sx={{ fontSize: { xs: 18, sm: 22 }, mr: 0.5 }} />
          <span style={{ display: 'none', sm: { display: 'inline' } }}>TOP</span>
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="inherit"
          component="a"
          href="https://x.com/MachinazoLab"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 11, sm: 13 }, // 画面サイズでフォントサイズ調整
            textTransform: 'none',
            minWidth: 0,
            letterSpacing: '0.08em',
            fontFamily: `'Roboto Mono', 'Montserrat', 'Noto Sans JP', monospace, sans-serif`,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 2,
            px: { xs: 1, sm: 2 }, // モバイルで余白調整
            ml: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          最新作情報は <span style={{ color: '#1da1f2', fontWeight: 'bold', marginLeft: 4 }}>@MachinazoLab</span>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;