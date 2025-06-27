const styles = {
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
  // ...他にも必要なスタイルを追加
};

export default styles;