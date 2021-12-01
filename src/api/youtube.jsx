import axios from "axios";

const KEY = "AIzaSyB4CEcm2r01f0psc8fHLYshH9uY4ogQtoU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    masResults: 5,
    key: KEY
  },
  headers: {}
});