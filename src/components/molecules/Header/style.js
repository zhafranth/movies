import styled from "styled-components/macro";

export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  height: 45rem;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: left;
  padding: 0 20vw;
  /* Title */
  h3 {
    font-size: 3.8rem;
    font-weight: 700;
    span {
      font-weight: 300;
    }
  }
  p {
    font-size: 1.9rem;
    font-weight: 300;
  }
`;
