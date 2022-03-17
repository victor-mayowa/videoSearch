import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Pleas click on a video..</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`


//   <iframe width="560" height="315" src="https://www.youtube.com/embed/b1AnskePzFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  return (
    <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}/>
            {/* <iframe src=""></iframe> */}
        </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
