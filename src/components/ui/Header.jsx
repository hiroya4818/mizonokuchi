import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
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
        }}
      >
        <Button
          color="inherit"
          onClick={() => navigate('/')}
          sx={{
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'none',
            padding: 0,
            minWidth: 0,
            letterSpacing: '0.08em',
            fontFamily: `'Roboto Mono', 'Montserrat', 'Noto Sans JP', monospace, sans-serif`,
            mr: 2,
          }}
        >
          <span style={{
            background: 'linear-gradient(90deg, #fffbe6 60%, #ffe4b5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
            fontSize: 14,
            letterSpacing: '0.10em',
            fontFamily: `'Roboto Mono', 'Montserrat', 'Noto Sans JP', monospace, sans-serif`,
            textShadow: '0 1px 4px rgba(0,0,0,0.12)'
          }}>
            みぞのくち@タイムトラベル
          </span>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;