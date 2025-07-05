const styles = {
  baseBox: {
    minHeight: '100vh',
    background: '#fff5e1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py: 5,
    px: 2,
  },
  sheet: {
    width: '100%',
    maxWidth: 600,
    mb: 4,
    p: { xs: 1.5, sm: 3 },
    borderRadius: 2,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    mb: 2,
    letterSpacing: 1,
    fontSize: { xs: '1.0rem', sm: '1.5rem' }, // モバイルでやや小さめ
    lineHeight: 1.3,                          // 行間をやや広めに
    wordBreak: 'break-word',
    fontWeight: 700,
  },
  bodyText: {
    fontSize: { xs: '0.98rem', sm: '1.08rem' }, // titleより小さめ
    lineHeight: 1.7,                            // ゆったりした行間
    color: '#444',                              // 濃いグレーで目に優しい
    mb: 2,                                      // 下余白
    wordBreak: 'break-word',
    whiteSpace: 'pre-line',                     // 改行コードも反映
    fontWeight: 400,                            // 標準の太さ
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 2,
    boxShadow: 2,
    mb: 3,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: 1,
    mr: 2,
  },
  iconMini: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: 1,
    mr: 1,
  },
  conversationBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
    width: '100%',
    mb: 2,
  },
  // ...他にも必要なスタイルを追加
};

export default styles;