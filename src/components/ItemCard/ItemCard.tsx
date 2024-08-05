import { IItem } from "../../types/types";
import ModalComponent from "../ModalComponent/ModalComponent";
import {
  ConteinerCard,
  Description,
  DescriptionText,
  FigureCard,
  TitleText,
  ValueText,
} from "./_itemCard";

interface ItemCardProps {
  item: IItem;
  onClick: () => void;
}

const ItemCard = ({ item, onClick }: ItemCardProps) => {
  const { name, images, description, price } = item;
  return (
    <ConteinerCard onClick={onClick}>
      <Description>
        <TitleText>{name}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        <ValueText>R$ {price}</ValueText>
      </Description>
      {images && <FigureCard src={images[0].image} alt={name} />}
    </ConteinerCard>
  );
};

export default ItemCard;
