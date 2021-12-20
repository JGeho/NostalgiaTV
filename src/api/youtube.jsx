import axios from "axios";

const KEY = "AIzaSyDzY039x5RNRXCHlo1G5sUGyA_jDANq9o4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY
  },
  headers: {}
});