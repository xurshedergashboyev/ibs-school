import styled from "styled-components";

export const ExtraWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const NoteContainer = styled.div`
  transform: rotate(-3deg) translateY(-6rem);
  padding: 0.5rem;
  margin-left: 5rem;
  margin-right: 10rem;
  margin-top: 10rem;
  max-width: 500px;
  @media screen and (max-width: 1200px) {
    width: 350px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-right: 2rem;
  }
`;
export const NoteInner = styled.div`
  background-color: #ffbf2b;
  padding: 2rem 2rem 0;
  position: relative;
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
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

export const NoteDesc = styled.p`
  font-size: 1rem;
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

export const LearnCodeWrapper = styled.div`
  display: none;
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`;

export const LearnCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  max-width: 1040px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  min-height: 200px;
  border-radius: 20px;
  background-color: #ffeaba;
  // background-color: rgb(240, 245, 253);
  padding-left: 10px;
  padding-right: 10px;
`;

export const LearnCodeHeading = styled.h1`
  font-size: 24px;
  line-height: 1.33;
  max-width: 300px;
  font-weight: normal;
  color: rgb(62, 65, 109);
  margin: 20px;
  text-align: center;
`;

export const LearnCodeDesc = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  padding: 12px 32px;
  margin-bottom: 20px;
  color: #000;
  background-color: #ffbf2b;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #a4a4a7;
    color: white;
  }
`;

export const CodeSvgContainer = styled.div`
  display: flex;
  width: 100px;
  margin-bottom: 20px;
`;
