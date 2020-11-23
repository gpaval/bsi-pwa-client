import React from "react";
import colors from "../../constants/themingConstants";
import StyledButtonComponent from "./StyledButtonComponent";

import loader from "../../assets/images/loader.svg";

function getBackgroundByType(type) {
  if (type === "primary") {
    return colors.mainOrange;
  }
  if (type === "white") {
    return "white";
  }
}

const ButtonComponent = ({
  width = "223px",
  height = "52px",
  type = "primary",
  text = "",
  isLoading = false,
  onClick,
}) => {
  return (
    <StyledButtonComponent
      width={width}
      height={height}
      background={getBackgroundByType(type)}
      onClick={onClick}
      type={type}
    >
      <>
        {(isLoading && <img className="loader" src={loader} />) || <>{text}</>}
      </>
    </StyledButtonComponent>
  );
};

export default ButtonComponent;
