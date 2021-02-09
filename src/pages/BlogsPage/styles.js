import styled from "styled-components";

export const BlogPageStyled = styled.div`
  padding: 0 32px;
  width: calc(100% - 110px);
  margin: 0 0 0 100px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  * {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const BlogPageNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
`;

export const BlogPageNavBox = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 4px 15px;
  margin-bottom: 16px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  transition: 0.5s;
  ${(props) => props.active && "background-color: #00E4E3; color : white"};
  cursor: pointer;
  
  @media only screen and (max-width: 768px){
    font-size: 12px;
    padding: 2px 12px;
  }
  
`;

export const BlogPageCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px 0;
  justify-content: space-between;
`;
