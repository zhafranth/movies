import React from "react";
import { Load } from "./style";

const Loading = ({
  width,
  height,
  borderRadius,
  bgColor,
  marBot,
  widthShadow,
  timeAnimation,
}) => {
  return (
    <Load
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      marBot={marBot}
      widthShadow={widthShadow}
      timeAnimation={timeAnimation}
    />
  );
};

export default Loading;
