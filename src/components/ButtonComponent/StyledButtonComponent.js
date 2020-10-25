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
`;

export default StyledButtonComponent;
