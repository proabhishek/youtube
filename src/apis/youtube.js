import axios from "axios";


const key = process.env.REACT_APP_YOUTUBE_API_KEY;
console.log(key) // AIzaSyCD7dxiV0r3bIJMjlDEdzej70GCrBC6iR4


export default axios.create(
     {
        baseURL: "https://www.googleapis.com/youtube/v3",
        params:{
            key : key, 
            part: "snippet", 
            maxResults: 5, 
        }
     }

)