import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context/videosContext";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import CardVideo from "../../components/CardVideo/CardVideo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { tVideo } from "../../types/videoTypes";
import { VideoContainer, VideoList } from "./_player";

const Player: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchVideo, fetchVideos } = useVideo();
  const [video, setVideo] = useState<tVideo | null>(null);
  const [videos, setVideos] = useState<tVideo[]>([]);

  useEffect(() => {
    const loadVideo = async () => {
      if (!id) return;
      const fetchedVideo = await fetchVideo(id);
      setVideo(fetchedVideo);
    };

    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };

    loadVideo();
    loadVideos();
  }, [id, fetchVideo, fetchVideos]);

  if (!video) return <div>Carregando...</div>;

  return (
    <ContainerComponent>
      <VideoContainer>
        <VideoPlayer videoUrl={video.videoUrl} />
        <VideoList>
          <h3>Outros Vídeos</h3>
          {videos.map((vid) => (
            <CardVideo key={vid._id} video={vid} />
          ))}
        </VideoList>
      </VideoContainer>
    </ContainerComponent>
  );
};

export default Player;
