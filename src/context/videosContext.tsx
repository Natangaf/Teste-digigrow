import { createContext, ReactNode, useContext } from "react";
import { tVideo, VideoReqType } from "../types/videoTypes";
import { videoService } from "../services/videoService";

interface ChildrenProps {
  children: ReactNode;
}

interface IuseVideoProvider {
  fetchVideos: () => Promise<tVideo[]>;
  fetchVideo: (id: string) => Promise<tVideo>;
  NewVideo: (data: VideoReqType) => Promise<tVideo>; 
}

const VideoContext = createContext<IuseVideoProvider | undefined>(undefined);

export const VideoProvider = ({ children }: ChildrenProps) => {
  const fetchVideos = async (): Promise<tVideo[]> => {
    try {

      const responseVideos = await videoService.getAll();
      return responseVideos;
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw new Error("Failed to fetch videos. Please try again later.");
    }
  };

  const fetchVideo = async (id: string): Promise<tVideo> => {
    try {
      const responseVideo = await videoService.get(id);
      return responseVideo;
    } catch (error) {
      console.error(`Error fetching video with id ${id}:`, error);
      throw new Error("Failed to fetch video. Please try again later.");
    }
  };

  const NewVideo = async (data: VideoReqType): Promise<tVideo> => {
    try {
      const responseVideo = await videoService.post(data);
      return responseVideo;
    } catch (error) {
      console.error("Error creating new video:", error);
      throw new Error("Failed to create video. Please try again later.");
    }
  };

  return (
    <VideoContext.Provider value={{ fetchVideos, fetchVideo, NewVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);

  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider");
  }

  return context;
};
