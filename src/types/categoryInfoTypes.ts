export interface tCategoryRes {
  id: string;
  name: string;
  videos: Array<{
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}
export interface tCategory {
  _id: string;
  name: string;
  videos: string[];
  createdAt: Date;
  updatedAt: Date;
}
