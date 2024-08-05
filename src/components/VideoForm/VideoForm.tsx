import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { videoReq } from "../../schema/videosSchema";
import { VideoReqType } from "../../types/videoTypes";

const VideoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoReqType>({
    resolver: zodResolver(videoReq),
  });

  const onSubmit = (data: VideoReqType) => {
    console.log("Form data:", data);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" {...register("title")} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input id="description" {...register("description")} />
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input id="category" {...register("category")} />
        {errors.category && <span>{errors.category.message}</span>}
      </div>

      <div>
        <label htmlFor="thumbnail">Thumbnail</label>
        <input id="thumbnail" {...register("thumbnail")} />
        {errors.thumbnail && <span>{errors.thumbnail.message}</span>}
      </div>

      <div>
        <label htmlFor="videoUrl">Video URL</label>
        <input id="videoUrl" {...register("videoUrl")} />
        {errors.videoUrl && <span>{errors.videoUrl.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default VideoForm;
