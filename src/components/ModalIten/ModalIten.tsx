import React, { useState } from "react";
import {
  ContainerModal,
  Close,
  FigureCard,
  Description,
  TitleText,
  DescriptionText,
  AlterIten,
  TitleAlterIten,
  MinChoices,
  ListAlterIten,
  RadioItem,
  RadioItemLabel,
  FooterIten,
  ContainerQuantity,
  ButtonQuantity,
  AddToCart,
} from "./_modalIten";
import { close } from "../../assets/icons";
import { useCart } from "../../context/addCart";
import { IItem, IModifier, IModifierItem } from "../../types/MenuInfoTypes";

interface ModalItenProps {
  item: IItem | null;
  onClose: () => void;
}

const ModalIten = ({ item, onClose }: ModalItenProps) => {
  const { addItenCart } = useCart();

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedModifiers, setSelectedModifiers] = useState<
    Map<number, IModifierItem[]>
  >(new Map());

  if (!item) {
    onClose();
    return null;
  }

  const { name, images, description, price, modifiers } = item;

  const handleItemClick = (
    modifier: IModifier,
    selectedItem: IModifierItem
  ) => {
    const selectedItems = selectedModifiers.get(modifier.id) || [];
    const alreadySelectedIndex = selectedItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (alreadySelectedIndex !== -1) {
      const newPrice = totalPrice - selectedItem.price;
      setTotalPrice(newPrice);
      selectedItems.splice(alreadySelectedIndex, 1);
    } else {
      if (modifier.maxChoices === 1) {
        const newPrice =
          totalPrice - (selectedItems[0]?.price || 0) + selectedItem.price;
        setTotalPrice(newPrice);
        selectedModifiers.set(modifier.id, [selectedItem]);
      } else if (selectedItems.length < modifier.maxChoices) {
        const newPrice = totalPrice + selectedItem.price;
        setTotalPrice(newPrice);
        selectedItems.push(selectedItem);
        selectedModifiers.set(modifier.id, selectedItems);
      }
    }

    setSelectedModifiers(new Map(selectedModifiers));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const isAddToCartDisabled = () => {
    let allChoicesMade = true;

    if (modifiers) {
      modifiers.forEach((modifier) => {
        const selectedItems = selectedModifiers.get(modifier.id) || [];
        if (selectedItems.length < modifier.minChoices) {
          allChoicesMade = false;
        }
      });
    }
    return !allChoicesMade;
  };

  const handleAddToCart = () => {
    const selectedModifiersArray = Array.from(selectedModifiers.entries()).map(
      ([modifierId, items]) => ({
        modifierId,
        items,
      })
    );

    addItenCart(item.id, quantity, selectedModifiersArray);
    onClose();
  };

  return (
    <ContainerModal>
      <Close onClick={onClose}>
        <img src={close} alt="" />
      </Close>
      {images && <FigureCard src={images[0].image} alt={name} />}
      <Description>
        <TitleText>{name}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        {modifiers &&
          modifiers.map((modifier) => (
            <div key={modifier.id}>
              <AlterIten>
                <TitleAlterIten>{modifier.name}</TitleAlterIten>
                <MinChoices>
                  Select {modifier.minChoices} option
                  {modifier.minChoices > 1 ? "s" : ""}
                </MinChoices>
              </AlterIten>
              <ListAlterIten>
                {modifier.items.map((item) => (
                  <RadioItem key={item.id} htmlFor={item.id.toString()}>
                    <div>
                      <RadioItemLabel>{item.name}</RadioItemLabel>
                      <MinChoices>R$ {item.price}</MinChoices>
                    </div>
                    <input
                      type={modifier.maxChoices === 1 ? "radio" : "checkbox"}
                      name={modifier.name}
                      id={item.id.toString()}
                      checked={
                        !!selectedModifiers
                          .get(modifier.id)
                          ?.find((selectedItem) => selectedItem.id === item.id)
                      }
                      onChange={() => handleItemClick(modifier, item)}
                    />
                  </RadioItem>
                ))}
              </ListAlterIten>
            </div>
          ))}
        <FooterIten>
          <ContainerQuantity>
            <ButtonQuantity
              onClick={handleDecreaseQuantity}
              disabled={quantity < 2}
            >
              -
            </ButtonQuantity>
            <p>{quantity}</p>
            <ButtonQuantity onClick={handleIncreaseQuantity}>+</ButtonQuantity>
          </ContainerQuantity>
          <AddToCart onClick={handleAddToCart} disabled={isAddToCartDisabled()}>
            <b>Total Price:</b> R$ {(price + totalPrice) * quantity}
          </AddToCart>
        </FooterIten>
      </Description>
    </ContainerModal>
  );
};

export default ModalIten;
