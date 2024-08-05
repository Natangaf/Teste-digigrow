import { VideoReqType } from "../types/videoTypes";
import { api } from "./api";

export const videoService = {
  get: async (id: string) => {
    try {
      const response = await api.get(`/videos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching video with id ${id}:`, error);
      throw error;
    }
  },

  post: async (data: VideoReqType) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: token ? `Bearer ${token}` : "",
      };

      const response = await api.post("/videos/", data, { headers });
      return response.data;
    } catch (error) {
      console.error("Error posting video data:", error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const response = await api.get("/videos");
      return response.data;
    } catch (error) {
      console.error("Error fetching all videos:", error);
      throw error;
    }
  },
};
