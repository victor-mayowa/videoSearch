import axios from "axios";

const KEY = "AIzaSyA4JI9ftE3Sztk-Mn8BGBET0gbJ-F8DEkg"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type: "video",
        maxResults:5,
        key: KEY
    }
})