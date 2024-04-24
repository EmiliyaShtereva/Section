import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: inherit;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  align-items: center;
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 5px 0 0 0;
  font-size: 24px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  padding: 6rem 0 0 0;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  padding: 3rem 0 7rem 0;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 17rem;
  max-height: 20rem;
  width: 100%;
  height: 100%;
`;
