import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/pages/StartPage';
import StoryIntroPage from './components/pages/StoryIntroPage';
import QuizPage from './components/pages/QuizPage';
import StoryEndPage from './components/pages/StoryEndPage';
import Header from './components/ui/Header';
import IntroPage from './components/pages/IntroPage';
import NavigationPage from './components/pages/NavigationPage';
import ExplanationPage from './components/pages/ExplanationPage';
import ScrollToTop from './components/ui/ScrollToTop';
// ...existing code...
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="storyIntro" element={<StoryIntroPage />} />
        <Route path="intro" element={<IntroPage />} />
        <Route path="navigation" element={<NavigationPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="explanation" element={<ExplanationPage />} />
        <Route path="end" element={<StoryEndPage />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;