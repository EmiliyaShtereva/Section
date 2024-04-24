import Image from "next/image";
import background from "../../resources/background.png";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledVideoContainer,
  StyledImageContainer
} from "./elements";
import { CardButtons } from "../../collections/Card/Card";

export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledCTAContainer>
        <StyledImageContainer>
          <Image src={background} alt="" layout="responsive" />
        </StyledImageContainer>
        <StyledVideoContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledVideoContainer>
        <CardButtons />
      </StyledCTAContainer>
    </StyledContainer>
  );
};
