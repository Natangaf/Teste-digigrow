import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {

  return <ReactPlayer url={videoUrl} controls width="100%" height="400px" />;
};

export default VideoPlayer;
