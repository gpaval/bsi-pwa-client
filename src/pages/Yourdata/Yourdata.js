import React, { useState } from "react";
import StyledYourdata from "./StyledYourdata";

const Yourdata = () => {
  // todo: update when the API will be implemented.

  const [name, setName] = useState("Popescu Ion");
  const [date, setDate] = useState("01/01/2020");
  const [place, setPlace] = useState("Sascut");

  return (
    <StyledYourdata>
      <div className="yourdata">
        <div className="yourdata__title">Your data:</div>

        <div className="yourdata-basic">
          <div className="yourdata-basic__title">Basic:</div>
          <div className="yourdata-basic__info">
            <div>Name: {name}</div>
            <div>Date of birth: {date}</div>
            <div>Place of birth: {place}</div>
          </div>
        </div>
      </div>
    </StyledYourdata>
  );
};

export default Yourdata;
