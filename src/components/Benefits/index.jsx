import React from "react";

//styles
import {
  BenefitsSection,
  BenefitsContainer,
  Row,
  RowItem,
  Icon,
  AboutDesc,
} from "./style";
import { Text } from "../Languages";
// icons
import Fade from "react-reveal/Fade";

const Benefits = () => {
  return (
    <BenefitsSection>
      <BenefitsContainer>
        <Row>
          <Fade left>
            <RowItem>
              <Icon>
                {/* <IconImg src={SetSquareIcon} alt="globe" /> */}
                <img
                  src="https://podia.cdn.prismic.io/podia%2F3e5a0a26-9384-425f-920a-7a20bcef1422_icon-online-courses.svg"
                  alt="Online courses icon"
                  className="css-9whsf3"
                />
              </Icon>
              <AboutDesc>
                <Text tid="firstBenefit" />
              </AboutDesc>
            </RowItem>
          </Fade>
          <Fade left>
            <RowItem>
              <Icon>
                <img
                  src="https://podia.cdn.prismic.io/podia%2F3ad63a2e-95f7-4927-8d68-f7d51789c14f_icon-website.svg"
                  alt="Website Icon"
                  className="css-9whsf3"
                />
              </Icon>
              <AboutDesc>
                <Text tid="secondBenefit" />
              </AboutDesc>
            </RowItem>
          </Fade>
          <Fade left>
            <RowItem>
              <Icon>
                <img
                  src="https://podia.cdn.prismic.io/podia%2F2699e0b1-b969-46a3-82df-ff4a42413527_icon-blog.svg"
                  alt="Blog icon"
                  className="css-9whsf3"
                />
              </Icon>
              <AboutDesc>
                <Text tid="thirdBenefit" />
              </AboutDesc>
            </RowItem>
          </Fade>
          <Fade left>
            <RowItem>
              <Icon>
                <img
                  src="https://podia.cdn.prismic.io/podia%2Ff944f4dd-39f2-4bdc-bb31-8357de137690_icon-landing-pages.svg"
                  alt="Landing pages icon"
                  className="css-9whsf3"
                />
              </Icon>
              <AboutDesc className="about">
                <Text tid="fourthBenefit" />
              </AboutDesc>
            </RowItem>
          </Fade>
          <Fade left>
            <RowItem>
              <Icon>
                <img
                  src="https://podia.cdn.prismic.io/podia%2F882234e6-7c05-47b3-a789-d397482e47a0_icon-digital-downloads.svg"
                  alt="Digital downloads icon"
                  className="css-9whsf3"
                />
              </Icon>
              <AboutDesc>
                <Text tid="fifthBenefit" />
              </AboutDesc>
            </RowItem>
          </Fade>
          <Fade left>
            <RowItem>
              <Icon>
                <img
                  src="https://podia.cdn.prismic.io/podia%2Fc0653f8a-ccf2-4ffe-95de-c7117c9ccd93_icon-memberships.svg"
                  alt="Membership icon"
                  className="css-9whsf3"
                />
              </Icon>
              <AboutDesc>
                <Text tid="sixthBenefit" />
              </AboutDesc>
            </RowItem>
          </Fade>
        </Row>
      </BenefitsContainer>
    </BenefitsSection>
  );
};

export default Benefits;
