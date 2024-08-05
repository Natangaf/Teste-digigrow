import styled from "styled-components";
import media from "../../styles/media";

export const MainDashboard = styled.main`
  width: 100%;

  margin-top: 30px;
  padding: 32px 40px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background.details};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.tablet} {
    padding: 0px;
  }
`;

export const FigurePrincipal = styled.figure`
  width: 100%;
  height: 150px;
`;

export const PrincipalImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;
export const NavCards = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 40px;
`;
export const Cards = styled.li`
  list-style: none;

  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.main};

  width: 100px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Containerimage = styled.figure`
  width: 74px;
  height: 74px;
`;
export const ImageCards = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const BoxShadowStoreItems = styled.section`
  width: 60%;
  padding: 10px 40px;

  display: flex;
  flex-direction: column;

  gap: 30px;

  box-shadow: 0px 2px 14px 0px #00000024;

  ${media.tablet} {
    width: 100%;
    padding: 0px 5px;
  }
`;

export const BoxShadowCart = styled.section`
  width: 35%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 30px;

  box-shadow: 0px 2px 14px 0px #00000024;

  background-color: ${({ theme }) => theme.colors.background.details};

  ${media.tablet} {
    display: none;
  }
`;
