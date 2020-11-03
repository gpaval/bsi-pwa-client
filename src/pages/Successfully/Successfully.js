import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import successfullyIcon from "../../assets/images/successfullyIcon.svg";
import BackComponent from "../../components/BackComponent/BackComponent";
import StyledSuccessfully from "./StyledSuccessfully";

const Successfully = () => {
  // todo: update when the API will be implemented.

  const [name, setName] = useState("Popescu Ion");
  const history = useHistory();

  return (
    <>
      <BackComponent onClick={() => history.goBack()} />
      <StyledSuccessfully>
        <div className="successfully">
          <img src={successfullyIcon} className="successfully__icon" />
          <div className="successfully__message">
            You have been successfully identified
          </div>
          <div className="successfully__info">Medic stomatolog {name}</div>
        </div>
      </StyledSuccessfully>
    </>
  );
};

export default Successfully;
