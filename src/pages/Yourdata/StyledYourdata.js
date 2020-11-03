import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledYourdata = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
  margin-top: 110px;
  .yourdata {
    &__title {
      font-weight: 700;
      font-size: 36px;
      border-bottom: 5px solid ${colors.mainOrange};
      padding-bottom: 5px;
      width: fit-content;
    }
    .yourdata-basic {
      margin-top: 70px;
      &__title {
        font-weight: 700;
        font-size: 25px;
        border-bottom: 5px solid ${colors.mainOrange};
        padding-bottom: 5px;
        width: fit-content;
      }
      &__info {
        margin-top: 30px;
        font-weight: 700;
        div {
          margin-bottom: 15px;
        }
      }
    }
  }
`;

export default StyledYourdata;
