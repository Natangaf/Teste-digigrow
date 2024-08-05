import styled from "styled-components";

export const HeaderStoreItems = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const StoreItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;

  &.expanded {
    max-height: 1000px;
    padding: 5px 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &.rotate {
    transform: rotate(180deg);
  }
`;
