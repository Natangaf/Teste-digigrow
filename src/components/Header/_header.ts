import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Headerbackgroud = styled.header`
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.white};
`;

export const ListItem = styled.ul`
  width: 80%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const ItemMenu = styled.li`
  width: 30%;
  height: 100%;

  list-style: none;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SelectMenu = styled.span`
  width: 100%;
  height: 5px;

  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.text.white};
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
export const OpenMobileMenu = styled.button`
  outline: none;
  border: none;
  background-color: transparent;

  position: absolute;
  top: 0px;
  right: 20px;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const Dropshadow = styled.div`
  position: absolute;
  top: 0px;
  background-color: #00000063;
  z-index: 100;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: end;

  animation: ${fadeIn} 0.3s ease-out;
`;
export const MenuList = styled.ul<{ stateMobileMenu: boolean }>`
  width: 80%;
  height: 100%;

  padding-top: 60px;
  padding-left: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  background-color: ${({ theme }) => theme.colors.primary.main};

  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.white};

  list-style: none;

  a {
    padding-left: 30px;
  }
  p {
    padding-left: 30px;
  }
  transform: ${({ stateMobileMenu }) =>
    stateMobileMenu ? "translateX(0)" : "translateX(100%)"};
  animation: ${({ stateMobileMenu }) => (stateMobileMenu ? slideIn : slideOut)}
    0.3s ease-out;
`;
export const CloseMobileMenu = styled.button`
  outline: none;
  border: none;
  background-color: transparent;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ContainerModal = styled.div`
  position: relative;

  width: 100%;
  height: 80%;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};

  padding: 5px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
