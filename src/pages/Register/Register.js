import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import StyledRegister from "./StyledRegister";

import RegisterIcon from "../../assets/images/registerIcon.svg";
import { useHistory } from "react-router-dom";
import routes from "../../constants/routesConstants";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    // server call
    console.log(id, password);
    history.push(routes.homePage);
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
          <div className="register-form__button">
            <ButtonComponent
              text="Submit"
              onClick={handleSubmit}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;
