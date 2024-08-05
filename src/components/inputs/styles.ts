import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lexend", sans-serif;
  margin-bottom: 10px;
  gap: 10px;
  position: relative;
  button {
    background-color: transparent;
    border: none;
    bottom: 40%;
    color: ${({ theme }) => theme.colors.text.main};
    height: 100%;
  }
  input,
  textarea,
  option,
  select {
    background-color: transparent;
    border: none;
    display: flex;
    height: 3rem;
    width: 100%;
    padding: 0rem 1rem;
    align-items: center;
    gap: 0.625rem;
    color: ${({ theme }) => theme.colors.text.main};
    outline: none;
  }

  p {
    height: 1rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.error.main};
    font-weight: bold;
  }
  label {
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export const ContainerInput = styled.div`
  border-radius: 0.25rem;
  border: 1.5px solid ${({ theme }) => theme.colors.details.secondary};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  input {
    width: 90%;
  }
  button {
    width: 10%;
  }
`;
