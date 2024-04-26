import styled from "styled-components";
import { SectionSubheading, SectionParagraph } from "~/components";

export const StyledButtonContainer = styled(({ ...props }) => <div {...props} />)`
  width: 25%;
  height: 25%;
  margin: 0 4rem;
  padding: 0;
  font-family: sans-serif;

  @media (max-width: 1024px) {
    justify-content: center;
    width: 75%;
    height: 50%;
    margin: 5rem 0 3rem 0;
    padding: 0;
  }
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
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 2.5rem 4rem 2.5rem 3rem;
    margin: 1rem 1rem 3rem 1rem;
    width: 75%;
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
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 2.5rem 4rem 2.5rem 3rem;
    margin: 1rem 1rem 3rem 1rem;
    width: 80%;
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
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 2.5rem 4rem 2.5rem 3rem;
    margin: 1rem;
    width: 85%;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  margin: 0 0 0 7rem;
  font-family: sans-serif;

  @media (max-width: 1024px) {
    margin: 0 0 0 10rem;
  }
`;

export const StyledButtonTitle = styled((props) => <SectionSubheading className="button-title" {...props} />)`
  margin: 0;
  padding: 0;
  font-weight: 600;

  @media (max-width: 1024px) {
    padding-bottom: 5px;
    font-size: 30px;
  }
`;

export const StyledButtonText = styled((props) => <SectionParagraph {...props} />)`
  margin: 0;
  padding: 0;
  color: black;

  @media (max-width: 1024px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 3.5rem;
  max-height: 3rem;
  width: 100%;
  height: 100%;
  float: left;
  margin: 1.7rem 0.7rem;

  @media (max-width: 1024px) {
    max-width: 5.5rem;
    max-height: 5.5rem;
    width: 100%;
    height: 100%;
    float: left;
    margin: 2.2rem 1.2rem;
  }
`;
