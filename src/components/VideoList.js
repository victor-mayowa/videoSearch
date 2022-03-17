import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedItem = props.videos.map((video) => {
    return <VideoItem video={video} key={video.id.videoId} onVideoSelect={props.onVideoSelect}/>;
  });
  return (
    <div className="ui relaxed divided list">
      {/* {props.videos.length} */}
      {renderedItem}
    </div>
  );
};

export default VideoList;
