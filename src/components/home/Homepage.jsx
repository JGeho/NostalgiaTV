//iframe for the video
//90s years for search parameter

import React, { useState } from 'react';
//took out useEffect in above list
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
//import axios from 'axios';
// import FormSelect from 'react-bootstrap/esm/FormSelect';

export default function Homepage(props) {
    //get data using useeffect
    //get api url template to do call
    //see what data is retrieved
    //make sure that the call is only triggered with onClick and not onchange.
    // const apiKey = 'AIzaSyDzY039x5RNRXCHlo1G5sUGyA_jDANq9o4';
    // console.log(process.env.REACT_APP_API_KEY);

    const optionArray = [
        { value: '', label: "None" },
        { value: 'PLoXkGkpREHNBerh-2Ql6R5GqRk-Hz20O_', label: "2000s Stand Up" },
        { value: 'PLoXkGkpREHNCkbXU8M6kxwzZ-xTr1_Mhs', label: "90s Stand Up" },
        { value: 'PL5gYcc7ZOfxe-mOlOCiKB5tfKGPwM9eWl', label: "SNL" },
        { value: 'PLQ7_GA82PpMFEC6PYfxBFPCc1qnAio3A-', label: "Movie Bloopers" },
        { value: 'PLn8MTymNebMCUuF1DI-IdIjCde_Jh5u7e', label: "Jerri Springer" }
    ];
    const [categoryValue, setCategoryValue] = useState('');
    // const [data, setData] = useState([]);
    // const [currentVideo, setCurrentVideo] = useState('');

    // useEffect(() => {
    //     if (categoryValue === '') {
    //         return;
    //     } else {
    //         async function getVideos() {
    //             const { data } = await axios(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${categoryValue}&q=1970&videoDuration=short&relevanceLanguage=en&key=${apiKey}`);
    //             console.log(data);

    //             setData(data);
    //             setCurrentVideo('0')
    //         };
    //         getVideos();
    //     };
    // }, [categoryValue]);

    const handleChange = ({ target: category }) => {
        const categoryValue = category.value;
        setCategoryValue(categoryValue);
        props.onSearch(categoryValue);
    };

    //will need to incorporate useEffect and axios to call youtube api based on category
    // const handleOnClick = e => {
    //     e.preventDefault();
    //     setCurrentVideo({ currentVideo: '1' })
    // }

    return (
        <div>
            <FloatingLabel controlId="floatingSelect" label="Select a category">
                <Form.Select aria-label="Floating label select example" value={categoryValue} onChange={handleChange}>
                    {optionArray.map(option => (
                        <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
            </FloatingLabel>

            {/* <iframe title={currentVideo ? data.items[currentVideo].id.videoId : 'no video'} src={currentVideo ? `https://www.youtube.com/embed/${data.items[currentVideo].id.videoId}?autoplay=1&mute=0&enablejsapi=1&controls=0` : 'https://picsum.photos/200/300'} allow='autoplay'>

            </iframe>

            <button onClick={handleOnClick}>Click Me</button> */}
        </div >
    )
}
