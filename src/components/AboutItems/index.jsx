import React from "react";
import Fade from "react-reveal/Fade";

import {
  AboutItemFirst,
  AboutItemText,
  AboutItemImage,
  HeadingDesc,
  AboutItemSecond,
  ItemsHeading,
  AboutItemsContainer,
  StyledSpan,
} from "./styles";
import { Text } from "../Languages";

const AboutItems = () => {
  return (
    <AboutItemsContainer>
      <Fade bottom delay={500} triggerOnce={true}>
        <AboutItemFirst>
          <AboutItemText className="item-text">
            <Fade right>
              <ItemsHeading>
                <Text tid="aboutFirstFirstCon" />
                <StyledSpan>
                  <Text tid="aboutFirstSecondCon" />
                </StyledSpan>
              </ItemsHeading>
              <HeadingDesc>
                <Text tid="aboutFirstDesc" />
              </HeadingDesc>
            </Fade>
          </AboutItemText>
          <AboutItemImage className="first-img">
            <Fade right>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_nqbgog78.json"
                background="transparent"
                speed="1"
                className="first-img"
                style={{ backgroundColor: "#fff" }}
                loop
                autoplay
              />
            </Fade>
          </AboutItemImage>
        </AboutItemFirst>
      </Fade>
      <Fade right>
        <AboutItemSecond>
          <AboutItemImage className="second-img">
            <Fade right>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_zsqxfplo.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                className="second-img"
                loop
                autoplay
              />
            </Fade>
          </AboutItemImage>
          <AboutItemText className="item-text item-second">
            <Fade left>
              <ItemsHeading>
                <Text tid="aboutSecondFirstCon" />
                <StyledSpan style={{ color: "#ffbf2b" }}>
                  <Text tid="aboutSecondSecondCon" />
                </StyledSpan>
              </ItemsHeading>
              <HeadingDesc>
                <Text tid="aboutSecondDesc" />
              </HeadingDesc>
            </Fade>
          </AboutItemText>
        </AboutItemSecond>
      </Fade>
      <AboutItemFirst>
        <AboutItemText className="item-third">
          <Fade right>
            <ItemsHeading>
              <StyledSpan style={{ color: "#ffbf2b" }}>
                <Text tid="aboutThirdFirstCon" />
              </StyledSpan>
              <Text tid="aboutThirdSecondCon" />
            </ItemsHeading>
            <HeadingDesc>
              <Text tid="aboutThirdDesc" />
            </HeadingDesc>
          </Fade>
        </AboutItemText>
        <AboutItemImage style={{ marginBottom: 0 }}>
          <Fade left>
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_gtw1ect3.json"
              background="transparent"
              speed="1"
              style={{ backgroundColor: "#fff", height: 400 }}
              autoplay
              loop
            />
          </Fade>
        </AboutItemImage>
      </AboutItemFirst>
    </AboutItemsContainer>
  );
};

export default AboutItems;
