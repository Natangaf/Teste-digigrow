import { createContext, ReactNode, useContext, useState } from "react";
import { IItemCart, selectedModifiers } from "../types/MenuInfoTypes";
import { useStoreInfo } from "./StoreInfo";


interface ChildrenProps {
  children: ReactNode;
}

interface IuseCartProvider {
  cart: IItemCart[];
  setCart: React.Dispatch<React.SetStateAction<IItemCart[]>>;
  deleteItenCart: (id: number) => void;
  addItenCart: (
    id: number,
    quantity: number,
    selectedModifiersData: selectedModifiers[]
  ) => void;
  updateItenCartQuantity: (id: number, newQuantity: number) => void;
}

const CartContext = createContext<IuseCartProvider>({} as IuseCartProvider);

const CartProvider = ({ children }: ChildrenProps) => {
  const {storeMenu}= useStoreInfo()

  const [cart, setCart] = useState<IItemCart[]>([]);



  const deleteItenCart = (id: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);
    setCart(updatedCart as IItemCart[]);
  };

  const addItenCart = (
    id: number,
    quantity: number,
    selectedModifiersData: selectedModifiers[]
  ) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === id);

    if (itemInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      const item = storeMenu.sections
        .flatMap((section) => section.items)
        .find((item) => item.id === id);

      if (item) {
        setCart((prevCart) => [
          ...prevCart,
          {
            ...item,
            quantity: quantity,
            selectedModifiers: selectedModifiersData,
          },
        ]);
      }
    }
  };

  const updateItenCartQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, deleteItenCart, addItenCart, updateItenCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }

  return context;
};
