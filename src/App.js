import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "./components/Search";
import HomePage from './components/Homepage';
import Splashpage from './components/SplashPage';
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import Home from './components/Home';

// function App() {
//   return (
//     <div >
//       <Routes>
//         <Route path="/home" element={<Homepage />} />
//         <Route path="/splashPage" element={<Splashpage />} />
//         <Route path="/" element={<Navigate to='/splashPage' />} />
//       </Routes>
//     </div>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Search onSearch={this.onSearch} /> */}
        <Home />
      </div>
    );
  }
}

// export default App;
