// import '../App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "./Search";
import HomePage from './Homepage';
import Splashpage from '../splashPage/SplashPage';
import youtubeApi from "../../api/youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import MessageDisplay from "./MessageDisplay";
import PostMessage from "./PostMessage";

export default class Home extends React.Component {
    state = {
        videoMetaInfo: [],
        selectedVideoId: null,
        messages: [],
        messagesLoaded: false,
        msgItems: {
            messeageTxt: "",
            messeageDepartment: ""
        }
    };

    onVideoSelected = (videoId) => {
        this.setState({
            selectedVideoId: videoId
        });
    };

    onSearch = async (keyword) => {
        const response = await youtubeApi.get("/playlistItems", {
            params: {
                playlistId: keyword
            }
        });
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
                <PostMessage
                   
                />
                <MessageDisplay messages={this.state.messages} messagesLoaded={this.state.messagesLoaded} />
            </React.Fragment>
        );
    }
}
