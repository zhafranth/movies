import styled from "styled-components/macro";

export const MainInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 6rem;
  margin-top: 4rem;
  border-radius: 4rem;
  /* padding: 1.6rem; */
  background-color: #fff;
  overflow: hidden;
  gap: 1rem;
`;
export const Input = styled.input`
  width: 90%;
  height: 100%;
  outline: none;
  padding: 2rem;
  border: 0;
  font-size: 1.8rem;
  &::placeholder {
    font-style: italic;
    font-style: 1.3rem;
  }
  &::selection {
    background-color: #9ce2c6;
  }
`;

export const BtnSearch = styled.button`
  min-width: 5rem;
  width: 10%;
  height: 100%;
  outline: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #4ad295;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3ac184;
  }
  &:active {
    background-color: #43ca8d;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #24895c;
  }
`;
