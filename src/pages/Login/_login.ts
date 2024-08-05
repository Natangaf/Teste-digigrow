import styled from "styled-components";

export const StyledLogin = styled.main`
  width: 50%;
  height: 100%;

  margin-top: 10%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.text.white};

  padding: 40px 30px;
`;

export const ButtonRegister = styled.button`
  width: 100%;
  padding: 5px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: 5px;
`;

export const Buttonlogin = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary.secondary};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: 5px;
`;
export const NotAcount = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;
