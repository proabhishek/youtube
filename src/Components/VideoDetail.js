

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }
    const  videSrc = `https://www.youtube.com/embed/${video.id.videoId}`


    return(
        <div className = "video-detail">
               <iframe src={videSrc}></iframe>
               <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;




// <iframe width="1280" height="720" src="https://www.youtube.com/embed/5tEnFDXaQTY" title="China Runs Away From India’s Arunachal G20 Meeting | Should India Protest?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>