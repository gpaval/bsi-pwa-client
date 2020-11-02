import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledYourdata = styled.div`
   display: flex;
   justify-content: flex-start;
   margin-left: 30px;
   margin-top: 40px;
   .yourdata{
       &__title{
          font-weight: 700;
          font-size: 30px;
       }
       .yourdata-basic{
          margin-top: 20px;
          &__title{
              font-size: 20px;
          }
          &__info{

          }
        }
        .yourdata-medical{
          margin-top: 20px;
          &__title{

          }
          &__info{

          }
        }
    }
`;

export default StyledYourdata;