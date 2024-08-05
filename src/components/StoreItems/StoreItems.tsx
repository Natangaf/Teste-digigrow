import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IItem, ISection } from "../../types/types";
import { HeaderStoreItems, StoreItems, ArrowIcon } from "./_storeItems";
import ItemCard from "../ItemCard/ItemCard";
import ModalComponent from "../ModalComponent/ModalComponent";
import ModalIten from "../ModalIten/ModalIten";

const StoreItemsList = ({ items, id, name }: ISection) => {
  const [isVisible, setIsVisible] = useState(false);

  const [OpenModalItem, setOpenModalItem] = useState<IItem | null>(null);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <>
      <HeaderStoreItems onClick={toggleVisibility}>
        <p>{name}</p>
        <ArrowIcon className={isVisible ? "rotate" : ""}>
          <IoIosArrowDown />
        </ArrowIcon>
      </HeaderStoreItems>
      <StoreItems key={id} className={isVisible ? "expanded" : ""}>
        {items.map((item) => (
          <ItemCard
            item={item}
            key={item.id}
            onClick={() => setOpenModalItem(item)}
          />
        ))}
      </StoreItems>
      <ModalComponent
        isOpen={OpenModalItem}
        onClose={() => setOpenModalItem(null)}
      >
        <ModalIten
          item={OpenModalItem}
          onClose={() => setOpenModalItem(null)}
        />
      </ModalComponent>
    </>
  );
};

export default StoreItemsList;
