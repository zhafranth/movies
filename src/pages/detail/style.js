import styled from "styled-components/macro";

export const MainDetail = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
export const Header = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #030303;
  padding: 0 12vw;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    span {
      font-weight: 300;
    }
  }
`;
export const Content = styled.div`
  height: calc(100vh - 8rem);
  position: relative;
  display: flex;
  padding: 4rem 12vw;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  z-index: 2;
`;
export const ImgWrapper = styled.div`
  width: 33.5rem;
`;
export const ImgCover = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const InfoMovie = styled.div`
  color: #030303;
  width: 50%;
`;
export const Title = styled.h3`
  font-size: 3.4rem;
  font-weight: 700;
`;
export const Rate = styled.div``;
export const SubInfo = styled.div`
  display: flex;
  gap: 4rem;
  background-color: #dfdfdf;
  width: max-content;
  padding: 1.5rem 2.8rem;
  border-radius: 5px;
  margin: 2rem 0;
  .subinfo-item {
    p {
      font-size: 1.6rem;
      font-weight: 300;
    }
    h4 {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;
export const InfoDetail = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  gap: 1.6rem;
  h4 {
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
`;
export const Plot = styled.div`
  margin-bottom: 1.2rem;
`;

export const BgImage = styled.div`
  position: absolute;
  bottom: 0;
  top: 8rem;
  left: 0;
  width: 55vw;
  z-index: 1;
  overflow: hidden;
  .white-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      100deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 1) 90%
    );
  }
  img {
    width: 100%;
    background-position: bottom;
    background-size: cover;
  }
`;
