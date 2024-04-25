import styled from "styled-components";
import { SectionSubheading, SectionParagraph } from "~/components";

export const StyledButtonContainer = styled(({ ...props }) => <div {...props} />)`
  width: 25%;
  height: 25%;
  margin: 0 4rem;
  padding: 0;
  font-family: sans-serif;
`;

export const StyledBtnBrief = styled(({ ...props }) => <div {...props} />)`
  margin: 1rem;
  padding: 1.5rem 2.5rem 1.5rem 2rem;
  width: 87%;
  background-color: #f8f8f9;
  color: black;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    color: #006EFD;
    border: 2px solid #006EFD;
  }
`;

export const StyledBtnSearch = styled(({ ...props }) => <div {...props} />)`
  margin: 1rem;
  padding: 1.5rem 2.5rem 1.5rem 2rem;
  width: 95%;
  background-color: #f8f8f9;
  color: black;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    color: #006EFD;
    border: 2px solid #006EFD;
  }
`;

export const StyledBtnPitch = styled(({ ...props }) => <div {...props} />)`
  margin: 1rem;
  padding: 1.5rem 2.5rem 1.5rem 2rem;
  width: 100%;
  background-color: #f8f8f9;
  color: black;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover{
    color: #006EFD;
    border: 2px solid #006EFD;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  margin: 0 0 0 7rem;
  font-family: sans-serif;
`;

export const StyledButtonTitle = styled((props) => <SectionSubheading className="button-title" {...props} />)`
  margin: 0;
  padding: 0;
  font-weight: 600;
`;

export const StyledButtonText = styled((props) => <SectionParagraph {...props} />)`
  margin: 0;
  padding: 0;
  color: black;.
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 3.5rem;
  max-height: 3rem;
  width: 100%;
  height: 100%;
  float: left;
  margin: 1.7rem 0.7rem;
`;
