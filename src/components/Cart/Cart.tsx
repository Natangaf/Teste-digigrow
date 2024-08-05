import {
  ButtonQuantity,
  ContainerQuantity,
  Description,
  FooterCart,
  HeaderIten,
  HeaderStoreItems,
  ItemCart,
  NoneItemCart,
  Resume,
  StoreItemsCart,
  TitleText,
} from "./_cart";
import { useCart } from "../../context/addCart";
import { selectedModifiers } from "../../types/types";

const Cart = () => {
  const { cart, updateItenCartQuantity } = useCart();

  const calculateTotalPrice = (
    price: number,
    selectedModifiers: selectedModifiers[]
  ) => {
    let totalPrice = price;
    selectedModifiers.forEach((modifier) => {
      modifier.items.forEach((item) => {
        totalPrice += item.price;
      });
    });
    return totalPrice;
  };

  const handleDecreaseQuantity = (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateItenCartQuantity(itemId, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateItenCartQuantity(itemId, item.quantity + 1);
    }
  };

  // Calcular o total do carrinho
  const totalCartPrice = cart.reduce((acc, item) => {
    return (
      acc +
      calculateTotalPrice(item.price, item.selectedModifiers) * item.quantity
    );
  }, 0);

  return (
    <>
      <HeaderStoreItems>
        <p>Carrinho</p>
      </HeaderStoreItems>
      <StoreItemsCart>
        {cart.length > 0 ? (
          cart.map(({ id, name, quantity, price, selectedModifiers }) => (
            <ItemCart key={id}>
              <HeaderIten>
                <TitleText>{name}</TitleText>
                <TitleText>
                  R$ {calculateTotalPrice(price, selectedModifiers) * quantity}
                </TitleText>
              </HeaderIten>
              <Description>
                {selectedModifiers
                  .map(({ items }) => items.map(({ name }) => name).join(", "))
                  .join(", ")}
              </Description>
              <ContainerQuantity>
                <ButtonQuantity
                  onClick={() => handleDecreaseQuantity(id)}
                  disabled={quantity < 2}
                >
                  <svg
                    width="12"
                    height="4"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="12" height="3" rx="1.5" fill="white" />
                  </svg>
                </ButtonQuantity>
                <p>{quantity}</p>
                <ButtonQuantity onClick={() => handleIncreaseQuantity(id)}>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8891 7.14276L7.14292 7.14286V10.8541C7.14292 11.4826 6.62864 11.9969 6.00007 11.9969C5.3715 11.9969 4.85721 11.4826 4.85721 10.8541V7.14286H1.1453C0.516727 7.14286 0.00244141 6.62858 0.00244141 6C0.00244141 5.37143 0.516727 4.85715 1.1453 4.85715H4.85721V1.15558C4.85721 0.527012 5.3715 0.0127258 6.00007 0.0127258C6.62864 0.0127258 7.14292 0.527012 7.14292 1.15558V4.85715L10.8891 4.85705C11.5177 4.85705 12.032 5.37133 12.032 5.9999C12.032 6.62848 11.5177 7.14276 10.8891 7.14276Z"
                      fill="white"
                    />
                  </svg>
                </ButtonQuantity>
              </ContainerQuantity>
            </ItemCart>
          ))
        ) : (
          <NoneItemCart>Seu carrinho está vazio</NoneItemCart>
        )}
      </StoreItemsCart>
      <FooterCart>
        <Resume>Total:</Resume>
        <Resume>R$ {totalCartPrice}</Resume>
      </FooterCart>
    </>
  );
};

export default Cart;
