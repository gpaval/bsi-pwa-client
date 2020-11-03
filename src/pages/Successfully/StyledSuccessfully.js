import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledSuccessfully = styled.div`
  display: flex;
  justify-content: center;

  .successfully {
    &__icon {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 110px;
    }
    &__message {
      margin-top: 60px;
      font-size: 36px;
      font-weight: 700;
      width: 340px;
      text-align: center;
    }
    &__info {
      margin-top: 60px;
      font-weight: 700;
      width: 340px;
      text-align: center;
    }
  }
`;

export default StyledSuccessfully;
