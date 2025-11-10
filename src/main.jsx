import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainSite from './pages/MainSite';
import SubmissionsPage from './pages/SubmissionsPage';
import LibraryPage from './pages/LibraryPage';
import ArticlePage from './pages/ArticlePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import GetInvolvedPage from './pages/GetInvolvedPage';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/submit" element={<SubmissionsPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/getinvolved" element={<GetInvolvedPage />} />
        <Route path="/library/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);