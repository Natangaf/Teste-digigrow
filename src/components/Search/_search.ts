import styled from "styled-components";

export const InputSharedLabel = styled.label`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin: 10px auto;

  background-color: ${({ theme }) => theme.colors.background.main};

  color: ${({ theme }) => theme.colors.details.secondary};

  border: 2px solid ${({ theme }) => theme.colors.details.secondary};

  border-radius: 5px;
  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const InputShared = styled.input`
  border: none;
  outline: none;
  height: 30px;
  width: 100%;
  background-color: transparent;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.text.main};
`;
