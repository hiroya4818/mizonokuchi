import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import EndPage from './components/EndPage';
import Header from './components/Header';
import IntroPage from './components/IntroPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="intro" element={<IntroPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="end" element={<EndPage />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;