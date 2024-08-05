import styled from "styled-components";
import media from "../../styles/media";

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const VideoList = styled.div`
  flex: 1;
  max-width: 300px;
  overflow-y: auto;

  h3 {
    margin-bottom: 10px;
  }

  ${media.laptop}{
    display: none;
  }
`;

export const IFrame = styled.div`
  width: 80%;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  ${media.laptop}{
    width: 100%;
  }
`;

export const InfoVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  padding: 30px;
  background-color: #666;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.white};
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.white};
  margin: 8px 0;
`;
export const Categories = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  gap: 5;
  color: ${({ theme }) => theme.colors.text.white};
  margin: 8px 0;
`;
