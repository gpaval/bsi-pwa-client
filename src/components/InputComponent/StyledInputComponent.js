import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledInputComponent = styled.div`
  .input {
    &__label {
      font-weight: 700;
      margin-bottom: 6px;
    }
    &__field {
      min-height: ${(props) => props.height};
      min-width: ${(props) => props.width};

      border: 0.2px solid ${colors.mainBlack};
      border-radius: 10px;
      outline: none;
      padding: 0px 10px;
    }
  }
`;

export default StyledInputComponent;
