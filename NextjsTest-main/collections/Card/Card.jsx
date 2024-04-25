import Image from "next/image";
import brief from "../../resources/brief.png"
import search from "../../resources/search.png"
import pitch from "../../resources/pitch.png"

import {
    StyledButtonContainer,
    StyledBtnBrief,
    StyledBtnSearch,
    StyledBtnPitch,
    StyledTextContainer,
    StyledButtonTitle,
    StyledButtonText,
    StyledImageContainer
} from "./elements";

export const CardButtons = () => {
    return (
        <StyledButtonContainer>
            <StyledBtnBrief>
                <StyledImageContainer>
                    <Image src={brief} alt="" layout="responsive" />
                </StyledImageContainer>
                <StyledTextContainer>
                    <StyledButtonTitle>
                        Brief
                    </StyledButtonTitle>
                    <StyledButtonText>
                        Complete <span style={{ "font-weight": '600' }}>brief writing or simple guidance</span> on what to include, we've got you covered.
                    </StyledButtonText>
                </StyledTextContainer>
            </StyledBtnBrief>
            <StyledBtnSearch>
                <StyledImageContainer>
                    <Image src={search} alt="" layout="responsive" />
                </StyledImageContainer>
                <StyledTextContainer>
                    <StyledButtonTitle>
                        Search
                    </StyledButtonTitle>
                    <StyledButtonText>
                        In-depth agency search covering; <span style={{ "font-weight": '600' }}>criteria matching</span>, door knocking and due-dilligence vetting.
                    </StyledButtonText>
                </StyledTextContainer>
            </StyledBtnSearch>
            <StyledBtnPitch>
                <StyledImageContainer>
                    <Image src={pitch} alt="" layout="responsive" />
                </StyledImageContainer>
                <StyledTextContainer>
                    <StyledButtonTitle>
                        Pitch
                    </StyledButtonTitle>
                    <StyledButtonText>
                        Comprehensive <span style={{ "font-weight": '600' }}>pitch management</span>, including comms, diary management and pitch hosting.
                    </StyledButtonText>
                </StyledTextContainer>
            </StyledBtnPitch>
        </StyledButtonContainer>
    );
};
