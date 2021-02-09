import React from "react";
import "./index.css";

import AvatarImg from "../../assets/images/avatar-1.png";
import { Text } from "../Languages";

function CardFlip(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="rounded-avatar">
            <img className="avatar-image" src={props.image} alt="..." />
          </div>
          <span className="avatar-name">
            {/*<Text tid="firstMentor" />*/}
            {/*<p>{teacherFullName}</p>*/}
            <span>{props.teacherFullName}</span>
          </span>
          <h1 className="avatar-positon">
            {/*<Text tid="firstMentorDesc" />*/}
            <span>{props.position}</span>
          </h1>
        </div>
        <div className="flip-card-back">
          <div className="avatar-info">
            <h1 className="avatar-name-2">
              {/*<Text tid="secondMentor" />*/}
              <span>{props.teacherFullName}</span>
            </h1>
            {props.description}
            {/*{teacherFullName}*/}
            {/*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod*/}
            {/*itaque, tenetur commodi animi sint sapiente neque.!*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
