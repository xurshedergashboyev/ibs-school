import React from "react";
import Typist from "react-typist";

//styles
import {
  WrapperInner,
  Lead,
  HeroContainer,
  HeroSection,
  HeroTitle,
  HeroBoth,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
  FourthSpan,
  MainButton,
} from "./styles";
import { Text } from "../Languages";

//comp
import HeroForm from "../HeroForm";

const cursor = {
  show: true,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
};

const Hero = () => {
  return (
    <WrapperInner>
      <Lead>
        <HeroContainer>
          <HeroBoth>
            <HeroSection>
              <HeroTitle>
                <Typist cursor={cursor}>
                  <FirstSpan>
                    <Text tid="heroSectionText" />
                    <br />
                  </FirstSpan>
                  <Typist.Backspace count={0} delay={2000} />
                  <SecondSpan>Innovative</SecondSpan>
                  <Typist.Backspace count={10} delay={2000} />
                  <ThirdSpan>Intensive</ThirdSpan>
                  <Typist.Backspace count={9} delay={2000} />
                  <FourthSpan>Interactive</FourthSpan>
                </Typist>
              </HeroTitle>
              <MainButton to="#1">
                <Text tid="ourCoursesText" />
              </MainButton>
            </HeroSection>
            <HeroForm />
          </HeroBoth>
        </HeroContainer>
      </Lead>
    </WrapperInner>
  );
};

export default Hero;
