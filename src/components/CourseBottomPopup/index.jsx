import React, { useState } from "react";
import {
  BottomPopupStyled,
  ButtonPopup,
  CancelButton,
  ImgGadgets,
  TextsBox,
} from "./styles";
//img
import discount10 from "../../assets/images/10-removebg-preview.png";
import discount20 from "../../assets/images/20-removebg-preview.png";
import Girls from "../../assets/images/girls-removebg-preview.png";
import NewComer from "../../assets/images/calendar.png";
import {Text} from '../Languages'
//icon
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelSmall.svg";

const CourseBottomPopup = ({ setShow, popUpName }) => {
  const [isOpenToggle, setIsOpenToggle] = useState(true);

  return (
    <BottomPopupStyled isOpen={isOpenToggle} popUpName={popUpName}>
      <span>
        <TextsBox>
          <h1>
            {popUpName === "new-comer"
              ? (<Text tid="courseBottomNew" />)
              : (<Text tid="courseBottomGirl" />)}
          </h1>
          <div>
            <img
              src={
                popUpName === "girls"
                  ? Girls
                  : popUpName === "new-comer"
                  ? NewComer
                  : ""
              }
              alt="girls discount"
            />
          </div>
        </TextsBox>
        <ImgGadgets
          src={
            popUpName === "girls"
              ? discount10
              : popUpName === "new-comer"
              ? discount20
              : ""
          }
          alt="gadgets"
        />
        <ButtonPopup onClick={setShow} popUpName={popUpName}>
          <Text tid="popupButton" />
        </ButtonPopup>
        <CancelButton onClick={() => setIsOpenToggle(!isOpenToggle)}>
          <CancelIcon />
        </CancelButton>
      </span>
    </BottomPopupStyled>
  );
};

export default CourseBottomPopup;
