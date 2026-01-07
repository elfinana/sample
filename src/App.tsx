import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pages, defaultPage } from './pages';
import './App.css';

export default function App() {
  const pageRoutes = Object.entries(pages).map(([path, Component]) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const DefaultPage = defaultPage;

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 w-[390px] mx-auto">
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          {pageRoutes}
        </Routes>
      </div>
    </Router>
  );
}
