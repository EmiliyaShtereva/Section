import styled from "styled-components";
import { Button } from "~/components";

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="gray" />)`
  margin: 1rem 0 2rem 0;
  padding: 0;
  background-color: #f0f1f0;
  color: black;

  &:hover {
    color: #006EFD;
    border: 2px solid #006EFD;
  }
`;

export const StyledButtonContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 4rem;
  font-family: sans-serif;
`;
