import styled from "styled-components";

export const Select = styled.select`
  display: flex;
  justify-content: center;
  padding: 8px 20px;
  font-size: 16px;
  color: black;
  font-weight: 600;
  background-color: #fff;
  margin-right: 20px;
  cursor: pointer;
  appearance: none;
  border-radius: 8px;
  transition: 0.5s;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #ffbf2b;
  }
  @media screen and (max-width: 991px) {
    font-weight: 300;
  }
`;

export const Option = styled.option`
  display: flex;
  justify-content: center;
  font-size: 16px;
  border: none;
  color: black;
  font-weight: 600;
  background-color: #f4f7f6;
  @media screen and (max-width: 991px) {
    font-weight: 300;
  }
`;
