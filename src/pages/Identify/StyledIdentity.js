import styled from "styled-components";

const StyledIdentity = styled.div`
  display: flex;
  justify-content: center;

  .identity {
    &__title {
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;

      margin-top: 100px;
      margin-bottom: 55px;
    }
  }
  .loader {
    background: #ff4834;
    padding: 20px;
    display: block;
    margin: auto;
  }
`;

export default StyledIdentity;
