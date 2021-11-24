import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Splashpage from './components/Splashpage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/splashPage" element={<Splashpage />} />
      <Route path="/" element={<Navigate to='/splashPage' />} />
      </Routes>
    </div>
  );
}

export default App;
