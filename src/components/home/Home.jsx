import React from 'react';
import { Row } from 'react-bootstrap'
import HomePage from './Homepage';
import youtubeApi from "../../api/youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import Message from './Message';
import '../../styles/home.css';

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
                <div className='home-container'>
                    <HomePage onSearch={this.onSearch} />
                    <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
                    <VideoPlayer videoId={this.state.selectedVideoId} />
                </div>
                <Message user={this.props.user} />
                <Row>
                    <a href='/About' className='homelink'>About Us</a>
                </Row>
            </React.Fragment>
        );
    }
}
