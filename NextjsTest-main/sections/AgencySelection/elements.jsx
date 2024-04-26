import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: inherit;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  padding: 6rem 0 0 0;
  text-align: center;
  font-family: sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 0 5rem 0;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  align-items: center;
  margin: 0;
  color: black;

  @media (max-width: 1024px) {
    font-size: 60px;
    padding: 0 0 10px 0;
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 5px 0 0 0;
  font-size: 24px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  padding: 3rem 0 4rem 0;
  position: relative;

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
`;

export const StyledVideoContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 20rem;
  max-height: 20rem;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    max-width: 50vw;
    max-height: 70vh;
    width: 100%;
    height: 100%;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 45rem;
  max-height: 31.5rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 55px;
  left: 0;
  margin: 20px 0 0 9.7rem;
  z-index: -1;

  @media (max-width: 1024px) {
    position: absolute;
    top: 40px;
    left: -100px;
    max-width: 100%;
    max-height: 40vh;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    z-index: -1;
  }
`;
