import styled from 'styled-components';

export const VideoContainer = styled.div`
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
`;
