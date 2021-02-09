import React from "react";

//styles
import {
  Main,
  FacultiesHeader,
  FacultiesDesc,
  Container,
  Heading,
} from "./styles";

import FacultiesItem from "../FacultiesItem";

import { Text } from "../Languages";
const Faculties = () => {
  return (
    <Main id="1">
      <Container>
        <FacultiesHeader>
          <Heading>
            <Text tid="facultiesItems" />
          </Heading>
          <FacultiesDesc>
            <Text tid="facultiesItemsDesc" />
          </FacultiesDesc>
        </FacultiesHeader>
        <FacultiesItem />
      </Container>
    </Main>
  );
};

export default Faculties;
