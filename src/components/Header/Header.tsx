import { useLocation, NavLink } from "react-router-dom";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import {
  Headerbackgroud,
  ItemMenu,
  ListItem,
  SelectMenu,
  MobileMenu,
  OpenMobileMenu,
  Dropshadow,
  MenuList,
  CloseMobileMenu,
  ContainerModal,
  Close,
} from "./_header";
import { useState, useEffect } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import Cart from "../Cart/Cart";

const Header = () => {
  const [OpenModal, setOpenModal] = useState<boolean>(false);

  const [stateMobileMenu, setStateMobileMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Menu", href: "/" },
    { label: "Entrar", href: "/login" },
    { label: "Contato", href: "/contact" },
  ];

  const selectedItem =
    menuItems.find((item) => item.href === location.pathname)?.label || "";

  const handleMenuOpen = () => {
    setAnimateMenu(true);
    setStateMobileMenu(true);
  };

  const handleMenuClose = () => {
    setAnimateMenu(false);
    setTimeout(() => {
      setStateMobileMenu(false);
    }, 300);
  };

  return (
    <>
      <Headerbackgroud>
        <ContainerComponent>
          <ListItem>
            {menuItems.map(({ label, href }) => (
              <ItemMenu key={href}>
                <NavLink to={href}>{label}</NavLink>
                {location.pathname === href && <SelectMenu />}
              </ItemMenu>
            ))}
          </ListItem>
          <MobileMenu>
            <h2>{selectedItem}</h2>
            <OpenMobileMenu onClick={handleMenuOpen}>
              <MdOutlineMenu />
            </OpenMobileMenu>
          </MobileMenu>
        </ContainerComponent>
      </Headerbackgroud>
      {stateMobileMenu && (
        <Dropshadow onClick={handleMenuClose}>
          <MenuList stateMobileMenu={animateMenu}>
            <li>
              <CloseMobileMenu onClick={handleMenuClose}>
                <MdOutlineClose />
              </CloseMobileMenu>
            </li>
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <NavLink to={href} onClick={handleMenuClose}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li onClick={() => setOpenModal(true)}>
              <p>Carrinho</p>
            </li>
          </MenuList>
        </Dropshadow>
      )}
      <ModalComponent isOpen={OpenModal} onClose={() => setOpenModal(false)}>
        <ContainerModal>
          <Close onClick={() => setOpenModal(false)}>
            <MdOutlineClose />
          </Close>
          <Cart />
        </ContainerModal>
      </ModalComponent>
    </>
  );
};

export default Header;
