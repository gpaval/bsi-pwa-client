import React from "react";
import StyledCardComponent from "./StyledCardComponent";

const CardComponent = ({ badgeImg, text, onCardClick }) => {
  return (
    <StyledCardComponent onClick={onCardClick}>
      <div className="card-content">
        {badgeImg && (
          <img className="card-content__badge" src={badgeImg} alt="badge" />
        )}
        <div className="card-content__divider" />
        <div className="card-content__text">{text}</div>
      </div>
    </StyledCardComponent>
  );
};

export default CardComponent;
