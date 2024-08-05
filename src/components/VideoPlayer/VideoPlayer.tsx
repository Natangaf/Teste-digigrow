import React from 'react';
import ReactPlayer from 'react-player/youtube';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div>
      <ReactPlayer url={videoUrl} controls width="100%" height="auto" />
    </div>
  );
};

export default VideoPlayer;
