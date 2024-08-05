import styled from "styled-components";
import media from "../../styles/media";

export const ContainerUpload = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 100%;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.text.white};

  padding: 40px 30px;
  ${media.mobile} {
    width: 95%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const ButtonSend = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary.secondary};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: 5px;
`;

export const AddCategorie = styled.div`
  padding: 10px 0px;
`;
export const Categorie = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const AddCategorieButton = styled.button`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.success.main};
  padding: 3px;
  font-size: 1rem;
`;
export const CategorieButton = styled.button`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.error.main};
  padding: 3px;
  font-size: 0.7rem;
`;
