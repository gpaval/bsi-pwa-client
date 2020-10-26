import React, { useState } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import StyledHomepage from "./StyledHomepage";

import identifyIcon from "../../assets/images/identifyIcon.svg";
import yourDataIcon from "../../assets/images/yourDataIcon.svg";

const Homepage = () => {
  // todo: update when the API will be implemented.

  const [name, setName] = useState("Andrei");

  return (
    <StyledHomepage>
      <div className="homepage">
        <div className="homepage-title">
          <div className="homepage-title__message">Hello,</div>
          <div className="homepage-title__name">{name}</div>
        </div>

        <div className="homepage__card">
          <CardComponent
            badgeImg={identifyIcon}
            text={"Identify"}
            onCardClick={() => console.log("done")}
          ></CardComponent>
        </div>

        <div className="homepage__card">
          <CardComponent
            badgeImg={yourDataIcon}
            text={"Your data"}
            onCardClick={() => console.log("done")}
          ></CardComponent>
        </div>
      </div>
    </StyledHomepage>
  );
};

export default Homepage;
