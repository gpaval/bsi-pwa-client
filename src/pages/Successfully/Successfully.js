import React, { useState } from "react";
//import CardComponent from "../../components/CardComponent/CardComponent";

import successfullyIcon from "../../assets/images/successfullyIcon.svg";
import StyledSuccessfully from "./StyledSuccessfully";

const Successfully = () => {
  // todo: update when the API will be implemented.

  const [name, setName] = useState("Popescu Ion");

  return (
    <StyledSuccessfully>
      <div className="successfully">
        <img src={successfullyIcon} className="successfully__icon" />
        <div className="successfully__message">
          You have been successfully identified
        </div>
        <div className="successfully__info">Medic stomatolog {name}</div>
      </div>
    </StyledSuccessfully>
  );
};

export default Successfully;
