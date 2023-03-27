
// AIzaSyCD7dxiV0r3bIJMjlDEdzej70GCrBC6iR4 

import { useState,useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import youtube from "./apis/youtube"; 
import VideoDetail from "./Components/VideoDetail";
import VideoList from "./Components/VideoList";

const App = () => {
    
      const [videos, setVideos] = useState([]);
      const [selectedVideo, setSelectedVideo] = useState(null);


      useEffect(
              ()=>{
                onTermSubmit("Solar System")
              }, []
      )

    const onTermSubmit = (term) => {
          youtube.get("/search", {
              params:{
                q : term, 
                type: "video",
              }
          })
          .then(
            (response)=>{
                   console.log(response.data.items)
                   setVideos(response.data.items)
                   setSelectedVideo(response.data.items[0])
            }
          )
          .catch(
            (error)=>{
                  console.log(error)
            }
          )
    }
    

    const onVideoSelect = (video) =>{
            setSelectedVideo(video)
    }




    return (
          <div  className="container">
                <SearchBar provideTerm={onTermSubmit}/>
                <div style={{display: "flex"}}>
                       <div style={{width: "70%"}}>
                                <VideoDetail video={selectedVideo}/> 
      
                        </div>

                          <div style={{width: "30%"}}>
                                  <VideoList videos={videos}  selectedVideo={onVideoSelect}/>
                          </div>
                </div>
          </div>
    );
}

export default App;