import React from "react";

// comment
import {
  About,
  SectionMainTitle,
  Container,
  Heading,
  HeadingDesc,
} from "./styles";

import { Text } from "../Languages";
import AboutItems from "../AboutItems";
import AboutVideoSection from "../AboutVideo/index";

const AboutAcademy = () => {
  return (
    <About>
      <Container>
        <SectionMainTitle>
          <Heading>
            <Text tid="ibsAcademyText" />
          </Heading>
          <HeadingDesc style={{ marginBottom: 30 }}>
            <Text tid="ibsAcademyDescText" />
          </HeadingDesc>
        </SectionMainTitle>
        <AboutVideoSection />
        <AboutItems />
      </Container>
    </About>
  );
};

export default AboutAcademy;
