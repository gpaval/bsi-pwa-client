import React, { useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import StyledHomepage from "./StyledHomepage";

import identifyIcon from "../../assets/images/identifyIcon.svg";
import yourDataIcon from "../../assets/images/yourDataIcon.svg";

import logoutIcon from "../../assets/images/logoutIcon.svg";
import notificationsIcon from "../../assets/images/notificationsIcon.svg";
import { useHistory } from "react-router-dom";
import routes from "../../constants/routesConstants";
import { Auth } from "aws-amplify";

const Homepage = () => {
  // todo: update when the API will be implemented.

  const [name, setName] = useState("Andrei");
  const history = useHistory();

  useEffect(() => {
    (async function setUsername() {
      try {
        const { username } = await Auth.currentAuthenticatedUser();
        setName(username);
      } catch (err) {
        if (err === "not authenticated") history.push(routes.register);
      }
    })();
  }, []);

  return (
    <StyledHomepage>
      <div className="homepage">
        <div className="homepage-title">
          <div className="homepage-title__message">Hello,</div>
          <div className="homepage-title__name">{name}</div>
        </div>

        <div
          className="homepage__card"
          onClick={() => history.push(routes.identify)}
        >
          <CardComponent
            badgeImg={identifyIcon}
            text={"Identify"}
            onCardClick={() => console.log("done")}
          ></CardComponent>
        </div>

        <div
          className="homepage__card"
          onClick={() => history.push(routes.yourData)}
        >
          <CardComponent
            badgeImg={yourDataIcon}
            text={"Your data"}
            onCardClick={() => console.log("done")}
          ></CardComponent>
        </div>

        <div className="homepage__footer">
          <div
            className="homepage--footer"
            onClick={() => {
              Auth.signOut();
              history.push(routes.register);
            }}
          >
            <img
              src={logoutIcon}
              className="homepage--footer__logo"
              alt="Log out"
            />
            <div className="homepage--footer__title">Log-out</div>
          </div>
        </div>
      </div>
    </StyledHomepage>
  );
};

export default Homepage;
