import React from 'react'
import {
	CardBody,
	CardBox,
	CardCourseDescription, 
	CardCourseDiscount, 
	CardCourseDuration,
	CardCourseIcon,
	CardCourseName,
	CardCourseTexts,
	CardCourseTypeGuarantee,
	CardCourseTypeGuaranteeBox, 
	CardFooter
} from "./styles";

const CourseCard = ({
	type, 
	guarantee, 
	name, 
	description, 
	icon, 
	duration, 
	discount,
	handleCardClick
}) => {
	return (
		<CardBox onClick={()=>handleCardClick(true,guarantee)}>
			<CardBody>
				<CardCourseTexts>
					<CardCourseTypeGuaranteeBox>
						<CardCourseTypeGuarantee type>
							{/*Факультет*/}
							{type}
						</CardCourseTypeGuarantee>
						<CardCourseTypeGuarantee>
							{/*Гарантия трудоустройства*/}
							{guarantee}
						</CardCourseTypeGuarantee>
					</CardCourseTypeGuaranteeBox>
					<CardCourseName className={"courseName"}>
						{/*Разработка на C#*/}
						{name}
					</CardCourseName>
					<CardCourseDescription>
						{/*Научитесь разрабатывать веб-сервисы и приложения, используя язык программирования C#*/}
						{description}
					</CardCourseDescription>
				</CardCourseTexts>
					<CardCourseIcon>
						<img src={icon} alt="courseIcon"/>
					</CardCourseIcon>
			</CardBody>
			<CardFooter>
				<CardCourseDuration>{duration} monthes</CardCourseDuration>
				<CardCourseDiscount>
					-{discount}%
				</CardCourseDiscount>
			</CardFooter>
		</CardBox>
	);
};

export default CourseCard;