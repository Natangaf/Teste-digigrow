import { useEffect, useState } from "react";
import Slider from "react-slick";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { useVideo } from "../../context/videosContext";
import { tVideo } from "../../types/videoTypes";
import { AtentionVideo, CarouselContainer, Thumbnail, Title } from "./_home";
import CardVideo from "../../components/CardVideo/CardVideo";

const Home = () => {
  const { fetchVideos } = useVideo();
  const [videos, setVideos] = useState<tVideo[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };

    loadVideos();
  }, []);

  return (
    <ContainerComponent>
      {videos.length > 0 ? (
        <>
          <AtentionVideo>
            <Thumbnail
              src={videos[0].thumbnail}
              alt={`Thumbnail of ${videos[0].title}`}
            />
            <Title>{videos[0].title}</Title>
          </AtentionVideo>

          <h2>Últimos Vídeos</h2>
          <CarouselContainer>
            <Slider {...settings}>
              {videos.map((video) => (
                <CardVideo key={video._id} video={video} />
              ))}
            </Slider>
          </CarouselContainer>
        </>
      ) : (
        <></>
      )}
    </ContainerComponent>
  );
};

export default Home;
