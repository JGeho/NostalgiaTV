import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Splashpage from './components/splashPage/SplashPage';
import HomeWrapper from './components/home/HomeWrapper';
import About from './components/about/About';

export default function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Routes>
          <Route path="/home/:id" element={<HomeWrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="/splashPage" element={<Splashpage />} />
          <Route path="/" element={<Navigate to='/splashPage' />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

