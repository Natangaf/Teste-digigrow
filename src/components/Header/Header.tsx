import { useLocation, NavLink } from "react-router-dom";
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
  HeaderConmtainer,
  Button,
} from "./_header";
import { useState, useEffect } from "react";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  const [stateMobileMenu, setStateMobileMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const location = useLocation();

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
          <HeaderConmtainer>
            <NavLink to={"/"}>VideoMaker</NavLink>
            <ListItem>
              {isAuthenticated ? (
                <>
                  <NavLink to={"/upload"}>Novo Video</NavLink>{" "}
                  <Button>Sair</Button>
                </>
              ) : (
                <NavLink to={"/login"}>Entrar</NavLink>
              )}
            </ListItem>
          </HeaderConmtainer>
          <MobileMenu>
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
            {isAuthenticated ? (
              <>
                <NavLink to={"/upload"}>Novo Video</NavLink>{" "}
                <Button>Sair</Button>
              </>
            ) : (
              <NavLink to={"/login"}>Entrar</NavLink>
            )}
          </MenuList>
        </Dropshadow>
      )}
    </>
  );
};

export default Header;
