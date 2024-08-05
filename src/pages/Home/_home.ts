import styled from "styled-components";

export const AtentionVideo = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
  position: relative;
  border-radius: 10px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(10, 34, 75), rgba(0, 0, 0, 0));
    border-radius: 10px;
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
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.white};
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 70%;
`;

export const CarouselContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  margin: 20px 0;
`;
