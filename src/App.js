import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Splashpage from './components/splashPage/SplashPage';
import Home from './components/home/Home';
import About from './components/about/About';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/splashPage" element={<Splashpage />} />
        <Route path="/" element={<Navigate to='/splashPage' />} />
      </Routes>
    </div>
  );
};

