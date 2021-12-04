import '../App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "../components/Search";
import HomePage from '../components/Homepage';
import Splashpage from '../components/SplashPage';
import youtubeApi from "../api/youtube";
import VideoList from "../components/VideoList";
import VideoPlayer from "../components/VideoPlayer";

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

export default class Home extends React.Component {
    state = {
        videoMetaInfo: [],
        selectedVideoId: null
    };

    onVideoSelected = (videoId) => {
        this.setState({
            selectedVideoId: videoId
        });
    };

    //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3&key=MY_API_KEY

    onSearch = async (keyword) => {
        const response = await youtubeApi.get("/playlistItems", {
            params: {
                playlistId: keyword
            }
        });
        // console.log(response.data.items[0].snippet.resourceId.videoId);
        this.setState({
            videoMetaInfo: response.data.items,
            selectedVideoId: response.data.items[0].snippet.resourceId.videoId
        });
    };

    render() {
        return (
            <React.Fragment >
                {/* <Search onSearch={this.onSearch} /> */}
                <HomePage onSearch={this.onSearch} />
                <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
                <VideoPlayer videoId={this.state.selectedVideoId} />
            </React.Fragment>
        );
    }
}

// export default App;