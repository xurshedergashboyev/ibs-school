import React from "react";

//styles
import {
  TeamSection,
  TeamHeader,
  TeamInner,
  TeamBack,
  Heading,
  Container,
  HeadingDesc,
} from "./style";

import { Text } from "../Languages";

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <TeamInner>
          <TeamBack>
            <TeamHeader>
              <Heading
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  marginRight: 20,
                }}
              >
                <Text tid="ourMentorsText" />
              </Heading>
              <HeadingDesc>
                <Text tid="ourMentorsDesc" />
              </HeadingDesc>
            </TeamHeader>
          </TeamBack>
        </TeamInner>
      </Container>
    </TeamSection>
  );
};

export default Team;
