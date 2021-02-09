import styled from "styled-components";

export const EmptyPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 576px) {
    margin: auto;
  }
`;

export const EmptyPageContainer = styled.div`
  width: 100%;
`;

export const PageImg = styled.img`
  width: 400px;
  display: block;
  margin: auto !important;
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`;

export const PageText = styled.p`
  width: 300px;
  margin: auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  span {
    color: red;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;
