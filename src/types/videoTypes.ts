import { z } from "zod";
import { videoReq } from "../schema/videosSchema";

export interface tVideo {
  _id: string;
  title: string;
  description: string;
  category: Array<{
    id: string;
    name: string;
  }>;
  thumbnail: string;
  videoUrl: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type VideoReqType = z.infer<typeof videoReq>;
