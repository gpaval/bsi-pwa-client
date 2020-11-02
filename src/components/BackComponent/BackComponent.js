import React from "react";
import StyledBackComponent from "./StyledBackComponent";
import back from "../../assets/images/backIcon.svg";

const BackComponent = ({ onClick }) => {
  return (
    <StyledBackComponent>
      <div className="back" onClick={onClick}>
        <img src={back} alt="back" />
        <div className="back__text">Back</div>
      </div>
    </StyledBackComponent>
  );
};

export default BackComponent;
