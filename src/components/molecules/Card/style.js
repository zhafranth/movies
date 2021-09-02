import styled from "styled-components/macro";

export const MainCard = styled.div`
  border-radius: 3px;
  position: relative;
  width: 25.6rem;
  height: 42rem;
  background-color: salmon;
  box-shadow: 0 1.8rem 2rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 1.8rem 3rem rgba(0, 0, 0, 0.6);
    .info-card {
      opacity: 1;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        169deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.95) 90%
      );
    }
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 1.8rem 1rem rgba(0, 0, 0, 0.4);
  }
`;
export const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const InfoCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    169deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.95) 90%
  );
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  padding: 2rem;
  transition: all 0.3s;

  h3 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;
