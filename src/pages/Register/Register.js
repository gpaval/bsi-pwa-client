import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import StyledRegister from "./StyledRegister";

import RegisterIcon from "../../assets/images/registerIcon.svg";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  console.log(id);

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
            />
          </div>
          <div className="register-form__input">
            <InputComponent
              label="Password:"
              value={password}
              onUpdateInput={(value) => setPassword(value)}
            />
          </div>
          <div className="register-form__button">
            <ButtonComponent
              text="Submit"
              onClick={() => console.log("clicked!")}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;
