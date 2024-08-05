import styled from "styled-components";
import media from "../../styles/media";

export const ContainerModal = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  width: 500px;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.colors.text.secondary};

  ${media.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const FigureCard = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleText = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const AlterIten = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 16px;
`;

export const TitleAlterIten = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const MinChoices = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const ListAlterIten = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;

  overflow-y: auto;
`;

export const RadioItem = styled.label`
  width: 100%;
  padding: 24px 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  input[type="radio"] {
    margin-right: 8px;
  }
`;

export const RadioItemLabel = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;
export const FooterIten = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  position: absolute;
  bottom: 0;
  left: 0;

  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
`;

export const ContainerQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40%;
  gap: 20px;

  font-size: 1.5rem;
  font-weight: 600;
`;

export const ButtonQuantity = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 600;
  font-size: 1.5rem;

  border: none;

  text-align: center;

  color: ${({ theme }) => theme.colors.background.secondary};
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const AddToCart = styled.button`
  width: 90%;
  padding: 10px;
  border-radius: 24px;
  margin: 0 auto;

  border: none;

  background-color: ${({ theme }) => theme.colors.primary.main};
`;
