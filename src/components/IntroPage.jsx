import React from 'react';
import StartButton from './StartButton';
import { useNavigate } from 'react-router-dom';

function IntroPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz?q=1');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fff5e1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {/* スタート地点への案内 */}
      <div style={{ width: '100%',padding: '0 10px', maxWidth: 600, marginBottom: 32 }}>
        <h3 style={{ color: '#014421', marginBottom: 12, fontWeight: 700 }}>
          まずはスタート地点へ移動してください
        </h3>
        <p style={{ marginBottom: 16 }}>
          スタート地点は「溝の口駅前 円筒分水広場」です。
        </p>
        {/* Googleマップ埋め込み */}
        <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px #0002' }}>
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
        </div>
      </div>

      {/* シナリオ導入 */}
      <div style={{ width: '100%', maxWidth: 600, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
        <h3 style={{ color: '#014421', fontWeight: 700, marginBottom: 16 }}>シナリオ導入</h3>
        <p style={{ marginBottom: 12 }}>
          あなたが溝の口駅を出て、円筒分水広場に足を踏み入れたその時――どこからともなく、不思議な声が聞こえてきます。
        </p>
        <blockquote style={{ color: '#555', fontStyle: 'italic', margin: '12px 0', borderLeft: '4px solid #014421', paddingLeft: 12 }}>
          「やあ、旅人さん。ここは“みぞのくち”の時の流れが交わる場所――円筒分水広場だニャ。<br />
          ボクの名前は“のくち”。この町の歴史を見守ってきた、しゃべれるネコなんだニャ。」
        </blockquote>
        <p style={{ marginBottom: 12 }}>
          あなたの足元に、ふわりと現れる一匹のネコ。その瞳は、まるで過去と未来をすべて知っているかのように輝いています。
        </p>
        <blockquote style={{ color: '#555', fontStyle: 'italic', margin: '12px 0', borderLeft: '4px solid #014421', paddingLeft: 12 }}>
          「この町には、まだ誰も知らない“時の謎”がたくさん眠っているニャ。<br />
          さあ、ボクと一緒に、みぞのくちの時空を旅してみないかニャ？<br />
          きみの力で、過去の事件や不思議を解き明かして、現代のみぞのくちを救ってほしいニャ！」
        </blockquote>
        <p>
          あなたは“のくち”に導かれ、今まさに、みぞのくちの歴史を巡るタイムトラベルの冒険へと踏み出します――。
        </p>
      </div>
      <div
        style={{
          width: '100%',
          paddingTop: 20,
          paddingBottom: 20,
          background: '#fff5e1',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StartButton onStart={handleStart} />
      </div>

    </div>
  );
}

export default IntroPage;