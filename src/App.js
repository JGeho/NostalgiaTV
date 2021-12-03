import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "./components/Search";
import Homepage from './components/Homepage';
import Splashpage from './components/SplashPage';
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

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
  state = {
    videoMetaInfo: [],
    selectedVideoId: null
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId
    });
  };

  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    //console.log(response);
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoID: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch}/>
        <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo}/>
        <VideoPlayer videoId={this.state.selectedVideoId}/>
      </div>
    );
  }
}

// export default App;
