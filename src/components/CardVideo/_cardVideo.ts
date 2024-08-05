import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  figure {
    width: 100%;
    height: 200px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 12px;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.white};
`;
