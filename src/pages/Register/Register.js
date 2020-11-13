import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import StyledRegister from "./StyledRegister";

import RegisterIcon from "../../assets/images/registerIcon.svg";
import { useHistory } from "react-router-dom";
import routes from "../../constants/routesConstants";

import { Auth } from "aws-amplify";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrMessage("");
    try {
      const user = await Auth.signIn(id, password);
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        await Auth.completeNewPassword(user, password);
      }
      history.push(routes.homePage);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      setErrMessage(err.message);
    }
  };

  return (
    <StyledRegister>
      <div className="register">
        <img className="register__logo" src={RegisterIcon} />

        <div className="register__title">
          It seems that you are not registered yet
        </div>

        <div className="register__form register-form">
          <div className="register-form__input">
            <InputComponent
              label="ID:"
              value={id}
              onUpdateInput={(value) => setId(value)}
              placeholder="ID"
            />
          </div>
          <div className="register-form__input">
            <InputComponent
              label="Password:"
              value={password}
              onUpdateInput={(value) => setPassword(value)}
              placeholder="Password"
              type={"password"}
            />
          </div>
          {errMessage && (
            <div className="register-form__message">{errMessage}</div>
          )}
          <div className="register-form__button">
            <ButtonComponent
              text="Submit"
              onClick={handleSubmit}
              isLoading={loading}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;
