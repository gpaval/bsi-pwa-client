import React from "react";
import colors from "../../constants/themingConstants";
import StyledButtonComponent from "./StyledButtonComponent";

function getBackgroundByType(type) {
  if (type === "primary") {
    return colors.mainOrange;
  }
}

const ButtonComponent = ({
  width = "223px",
  height = "52px",
  type = "primary",
  text = "",
  onClick,
}) => {
  return (
    <StyledButtonComponent
      width={width}
      height={height}
      background={getBackgroundByType(type)}
      onClick={onClick}
    >
      {text}
    </StyledButtonComponent>
  );
};

export default ButtonComponent;
