import styled, { keyframes } from "styled-components/macro";

const loading = keyframes`
  0%{transform:translateX(-150%)}
  /* 50%{transform:translateX(100%)} */
  100%{transform:translateX(150%)}
`;

export const Load = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "2.5rem"};
  border-radius: ${(props) => props.borderRadius || "3rem"};
  background-color: ${(props) => props.bgColor || "#f3f3f3"};
  margin-bottom: ${(props) => props.marBot || "2rem"};
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: ${(props) => props.widthShadow || "50%"};
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.02874653279280459) 46%,
      rgba(2, 0, 36, 0.05955885772277658) 100%
    );
    transform: skewX(-70deg);
    animation: ${(props) => props.timeAnimation || "1.2s"} ${loading} infinite;
  }
`;
