import React from "react";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

//styles
import {
  FacultiesContent,
  FacultiesEachItem,
  FacultiesItemIcon,
  FacultiesItemIconImage,
  FacultiesItemInner,
  FacultiesItems,
  FacultiesAction,
  FacultiesDesc,
  BtnGroups,
  MainButton,
  Heading,
  FacultiesItemInnerSecond,
} from "./style";
import { Text } from "../Languages";
//category
import {
    getBusinessCategory,
    getDesignCategory, getLanguageCategory,
    getProgrammingCategory
} from "../../redux/modules/category/categoryAction";

// icons

const items = [
  {
    id: 1,
    icon:
      "https://podia.cdn.prismic.io/podia%2Fac4d81bb-c23f-4841-8703-cdc769833577_icon-megaphone.svg",
    content: "firstFaculty",
    paragraph: "firstFacultyDesc",
  },
  {
    id: 2,
    icon:
      "https://podia.cdn.prismic.io/podia%2F72a94e71-fa07-4560-a5f6-534ab755f40a_icon-payments.svg",
    content: "secondFaculty",
    paragraph: "secondFacultyDesc",
  },
  {
    id: 3,
    icon:
      "https://podia.cdn.prismic.io/podia%2F457b4a11-fe60-465c-b871-bf145ab4654a_icon-email.svg",
    content: "fourthFaculty",
    paragraph: "fourthFacultyDesc",
  },
  {
    id: 4,
    icon:
      "https://images.prismic.io/podia%2Fda9f3bb8-f764-45b9-b02c-29773d710db3_chat-bubble-icons.svg",
    content: "thirdFaculty",
    paragraph: "thirdFacultyDesc",
  },
];

const FacultiesItem = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const togglePopup = (id) => {
    history.push("/courses");
    if (id===1) {
        dispatch(getProgrammingCategory());
    } else if(id===2){
        dispatch(getBusinessCategory());
    } else if(id===3){
        dispatch(getDesignCategory());
    } else if(id===4){
        dispatch(getLanguageCategory());
    }

  };

  return items.map((item) => {
    return (
      <FacultiesItems key={item.id}>
        <FacultiesEachItem>
          <FacultiesItemInner>
            <FacultiesItemInnerSecond>
              <Fade top>
                <FacultiesItemIcon>
                  <FacultiesItemIconImage>
                    <img src={item.icon} alt="icon" />
                  </FacultiesItemIconImage>
                </FacultiesItemIcon>
              </Fade>
              <Fade top>
                <FacultiesContent>
                  <Heading>
                    <Text tid={item.content} />
                  </Heading>
                  <FacultiesDesc>
                    <Text tid={item.paragraph} />
                  </FacultiesDesc>
                </FacultiesContent>
              </Fade>
            </FacultiesItemInnerSecond>
            <Fade top>
              <FacultiesAction>
                <BtnGroups>
                  <MainButton
                    style={{ padding: "20px 40px" }}
                    onClick={()=>togglePopup(item.id)}
                  >
                    <Text tid="facultiesButton" />
                  </MainButton>
                </BtnGroups>
              </FacultiesAction>
            </Fade>
          </FacultiesItemInner>
        </FacultiesEachItem>
      </FacultiesItems>
    );
  });
};

export default FacultiesItem;
