import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  height: auto;
  width: ${(props) => (props.width ? props.width : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledLink;
