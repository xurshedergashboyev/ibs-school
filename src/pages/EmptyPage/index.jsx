import React from "react";
import {
  EmptyPageWrapper,
  EmptyPageContainer,
  PageImg,
  PageText,
} from "./styles";

//img
import EmptyPageImg from "../../assets/images/emptyPage.gif";
import { Text}  from '../../components/Languages'
const EmptyPage = ({ pageName }) => {
  return (
    <EmptyPageWrapper>
      <EmptyPageContainer>
        <PageImg src={EmptyPageImg} />
        <PageText>
          <span>{pageName}</span>
          <br />
          <Text tid="emptyPage" />
        </PageText>
      </EmptyPageContainer>
    </EmptyPageWrapper>
  );
};

export default EmptyPage;
