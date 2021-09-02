import React from "react";
import DotLoader from "react-spinners/DotLoader";

// Child Components
import { Main } from "./style";

const LoadingPage = () => {
  return (
    <Main>
      <DotLoader color="#DD4F4F" loading={true} size={90} />
    </Main>
  );
};

export default LoadingPage;
