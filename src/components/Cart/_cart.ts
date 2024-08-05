import styled from "styled-components";
import media from "../../styles/media";

export const HeaderStoreItems = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 2rem;
  font-weight: 500;

  padding: 40px 30px 0px 30px;

  border-radius: 16px;
`;

export const StoreItemsCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  list-style: none;

  background-color: ${({ theme }) => theme.colors.background.secondary};

  &.expanded {
    max-height: 1000px;
    padding: 5px 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const NoneItemCart = styled.li`
  padding: 24px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ItemCart = styled.li`
  width: 100%;
  height: 120px;

  padding: 10px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const HeaderIten = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 300;

  width: 100%;

  color: ${({ theme }) => theme.colors.text.secondary};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.tablet} {
    overflow: hidden;
  }
`;

export const ValueText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FigureCard = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;

  border-radius: 5px;
`;

export const ContainerQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 1.5rem;
  font-weight: 600;
`;

export const ButtonQuantity = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 800;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  color: ${({ theme }) => theme.colors.background.secondary};
  background-color: ${({ theme }) => theme.colors.primary.main};
`;
export const FooterCart = styled.div`
  width: 100%;

  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Resume = styled.h3`
  font-size: 24px;
  font-weight: 300;
`;
