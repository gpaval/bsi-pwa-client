import styled from "styled-components";

const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  .register {
    &__logo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 75px;
    }

    &__title {
      margin-top: 60px;
      font-size: 36px;
      font-weight: 700;
      width: 340px;
      text-align: center;
    }

    .register-form {
      &__input {
        margin-top: 31px;
      }
      &__button {
        display: flex;
        justify-content: center;

        margin-top: 58px;
      }

      &__message {
        color: red;
        margin-top: 10px;
      }
    }
  }
`;

export default StyledRegister;
