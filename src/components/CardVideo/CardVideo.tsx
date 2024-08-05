import { Card, Thumbnail, Title } from "./_cardVideo";
import { tVideo } from "../../types/videoTypes";
import { useNavigate } from "react-router-dom";

const CardVideo = ({ video }: { video: tVideo }) => {
  const navigate = useNavigate();
  const { title, thumbnail, _id } = video;

  return (
    <Card onClick={() => navigate(`/assitindo/${_id}`)}>
      <figure>
        <Thumbnail src={thumbnail} alt={`Thumbnail of ${title}`} />
      </figure>
      <Title>{title}</Title>
    </Card>
  );
};

export default CardVideo;
