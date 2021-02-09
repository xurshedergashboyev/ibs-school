import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  margin-top: 10rem;
  @media screen and (max-width: 850px) {
    margin-bottom: 2rem;
    margin-top: 20rem;
  }
`;

export const WelcomeInner = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  background-color: transparent;
  margin: 0 auto;
  @media screen and (max-width: 1150px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const WelcomeContent = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 2px solid black; */
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 100%;
    padding-right: 20px;
    padding-left: 0;
  }
`;

export const WelcomeHeading = styled.h1`
  font-size: 36px;
  padding-left: 20px;
  font-weight: 700;
  color: #000;
  margin-top: -40px;
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin-top: 0px;
  }
`;

export const WelcomeParagraph = styled.div`
  font-size: 22px;
  font-weight: 400;
  padding-left: 20px;
  line-height: 1.5;
  color: #14130f;
  @media screen and (max-width: 1040px) {
    font-size: 18px;
  }
`;

export const WelcomeImage = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
`;

export const WelcomeAuthor = styled.img`
  width: 467px;
  height: 412px;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1040px) {
    width: 400px;
    height: auto;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;

export const NoteContainer = styled.div`
  transform: rotate(-3deg) translateY(-6rem);
  padding: 0.5rem;
  margin: auto;
  max-width: 1020px;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NoteAllInner = styled.div`
  margin: auto;
`;

export const NoteInner = styled.div`
  background-color: #ffbf2b;
  padding: 2rem 2rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -30px;
    right: -30px;
    width: 0;
    height: 0;
    border-top: 60px solid transparent;
    border-bottom: 60px solid #ffd333;
    border-left: 60px solid transparent;
    transform: rotate(90deg);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    right: -1px;
    width: 0;
    height: 0;
    border-top: 60px solid #fff;
    border-bottom: 60px solid transparent;
    border-left: 60px solid transparent;
  }
`;

export const NoteHeading = styled.h1`
  font-family: "Nanum Pen Script", cursive !important;
  color: #111;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 30px;
  font-weight: 500;
  width: 300px;
`;

export const NoteDesc = styled.p`
  font-size: 1.1rem;
  font-family: "Nanum Pen Script", cursive !important;
`;

export const NoteSignWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  padding-bottom: 3rem;
  color: #ece9e4;
  max-width: 200px;
`;

export const NoteSignContainer = styled.div`
  max-width: 100px;
  display: block;
  color: #111;
`;
