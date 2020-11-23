import styled from "styled-components";
import colors from "../../constants/themingConstants";

const StyledButtonComponent = styled.button`
  min-height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  background-color: ${(props) => props.background};
  border-radius: 15px;
  border: none;

  color: ${colors.white};
  font-weight: 700;
  line-height: 21px;
  outline: none;

  .loader {
    width: 38px;
    height: 35px;
    margin-top: 7px;
  }

  ${(props) =>
    props.type === "white" &&
    `
    border: 1px solid black;
    color: black;
  `}
`;

export default StyledButtonComponent;
