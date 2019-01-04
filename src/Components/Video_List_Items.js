import React from "react";
import "../style/style.css";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} alt="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
