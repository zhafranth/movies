import styled from "styled-components/macro";

export const Main = styled.div``;
export const Content = styled.div`
  padding: 4rem 12vw 12rem 12vw;
`;
export const SearchText = styled.div`
  color: #121111;
  margin-bottom: 4rem;

  p {
    font-size: 1.8rem;
    font-weight: 300;
    &::selection {
      background-color: #9ce2c6;
    }
  }
  h3 {
    font-size: 3.6rem;
    font-weight: 700;
    &::selection {
      background-color: #9ce2c6;
    }
  }
`;
export const ListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;
export const Card = styled.div``;
