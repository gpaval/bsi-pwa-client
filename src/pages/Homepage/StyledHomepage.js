import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledHomepage = styled.div`
  .homepage {
    .homepage-title {
      font-weight: 700;
      border-left: 5px solid ${colors.mainOrange};
      padding-left: 21px;
      margin-top: 110px;
      margin-bottom: 77px;

      &__message {
        font-size: 36px;
        color: ${colors.mainBlack};
      }
      &__name {
        font-size: 27px;
        color: ${colors.mainOrange};
      }
    }
    &__card {
      margin-bottom: 58px;
    }
  }
`;

export default StyledHomepage;
