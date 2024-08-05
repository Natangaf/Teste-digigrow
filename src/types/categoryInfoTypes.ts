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
