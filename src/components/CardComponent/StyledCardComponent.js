import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledCardComponent = styled.div`
  border: 1px solid ${colors.mainBlack};
  border-radius: 26px;
  width: 360px;
  height: 132px;

  .card-content {
    display: flex;
    align-items: center;
    margin-top: 37px;

    &__badge {
      margin-left: 42px;
    }
    &__divider {
      height: 52px;
      width: 50px;
      border-left: 1px solid ${colors.mainBlack};
      margin-left: 53px;
    }

    &__text {
      border-bottom: 5px solid ${colors.mainOrange};
      padding-bottom: 16px;

      font-size: 24px;
      font-weight: 400;
      color: ${colors.mainBlack};
    }
  }
`;

export default StyledCardComponent;
