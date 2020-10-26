import React, { useState } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import StyledHomepage from "./StyledHomepage";

import identifyIcon from "../../assets/images/identifyIcon.svg";
import yourDataIcon from "../../assets/images/yourDataIcon.svg";

import logoutIcon from "../../assets/images/logoutIcon.svg";
import notificationsIcon from "../../assets/images/notificationsIcon.svg";

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

        <div className="homepage__footer">
          <div className="homepage--footer">
            <img
              src={logoutIcon}
              className="homepage--footer__logo"
              alt="Log out"
            />
            <div className="homepage--footer__title">Log-out</div>
          </div>
          <div className="homepage--footer">
            <img
              src={notificationsIcon}
              className="homepage--footer__logo"
              alt="Log out"
            />
            <div className="homepage--footer__title">Notifications</div>
          </div>
        </div>
      </div>
    </StyledHomepage>
  );
};

export default Homepage;
