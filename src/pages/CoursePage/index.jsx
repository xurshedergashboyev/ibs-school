import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { CenterBox, CourseCards, CoursePageBox } from "./styles";
import { BlogPageNavbar, BlogPageNavBox } from "../BlogsPage/styles";

//comp
import CourseCard from "../../components/CourseCard";
import NavbarLeft from "../../components/NavbarLeft";
import NavbarTop from "../../components/NavbarTop";
import CourseBottomPopup from "../../components/CourseBottomPopup";
import CoursesForm from "../../components/CoursesForm";
import FooterMain from "../../components/FooterMain";
import PopupForm from "../../components/PopupForm";


//actions
import {
  getBusinessCategory,
  getDesignCategory, 
  getLanguageCategory, 
  getNoneCategory,
  getProgrammingCategory
} from "../../redux/modules/category/categoryAction";

import { getProgrammingCourses } from "../../redux/modules/prograammingCourses/programmingCoursesAction";
import { getLanguageCourses } from "../../redux/modules/languageCourses/languageCoursesAction";
import { getBusinessCourses } from "../../redux/modules/businessCourses/businessCoursesAction";
import { getDesignCourses } from "../../redux/modules/designCourses/designCoursesAction";
import { getCourses } from "../../redux/modules/courses/coursesAction";
import { getCoursesList } from "../../redux/modules/coursesList/coursesListAction";

import EmptyPage from "../EmptyPage";
import { Text } from "../../components/Languages";


function CoursePage({
  programmingCourses,
  businessCourses,
  designCourses,
  languageCourses,
  courses,
  category
}) {
  const [ show, setShow ] = useState( { show: false, selectedCourse: {} } );

  // handleCardClick
  const handleCardClick = ( see, category ) => {
    setShow( { show: see, selectedCourse: { value: category, label: category } } );
    console.log( show )
  };

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( getCoursesList() )
  }, [ getCoursesList ] )

  useEffect( () => {
    if ( category === "programming" ) {
      dispatch( getProgrammingCourses() )
    } else if ( category === "business" ) {
      dispatch( getBusinessCourses() )
    } else if ( category === "design" ) {
      dispatch( getDesignCourses() )
    } else if ( category === "language" ) {
      dispatch( getLanguageCourses() )
    } else if ( category === "none" ) {
      dispatch( getCourses() )
    } else {
      dispatch( getCourses() )
    }
  }, [ category ] )

  const handleNavClick = ( text ) => {
    if ( text === "programming" ) {
      dispatch( getProgrammingCourses() )
      dispatch( getProgrammingCategory() )
    } else if ( text === "business" ) {
      dispatch( getBusinessCourses() )
      dispatch( getBusinessCategory() )
    } else if ( text === "design" ) {
      dispatch( getDesignCourses() )
      dispatch( getDesignCategory() )
    } else if ( text === "language" ) {
      dispatch( getLanguageCourses() )
      dispatch( getLanguageCategory() )
    } else if ( text === "none" ) {
      dispatch( getCourses() )
      dispatch( getNoneCategory() )
    } else {
      dispatch( getCourses() )
      dispatch( getNoneCategory() )
    }
  }

  const navs = [
    { id: 1, text: "programming", label: "categoryProgramming" },
    { id: 2, text: "design", label: "categoryDesign" },
    { id: 3, text: "business", label: "categoryBusiness" },
    { id: 4, text: "language", label: "categoryLanguage" },
    { id: 5, text: "none", label: "categoryAll" },
  ]

  const data = ( category === "programming" ? programmingCourses :
    category === "business" ? businessCourses :
      category === "design" ? designCourses :
        category === "language" ? languageCourses :
          category === "all" ? courses :
            courses )

  return (
    <>
      <NavbarLeft left/>
      <NavbarTop/>
      <CoursePageBox>
        <BlogPageNavbar>
          { navs.map( ( { id, text, label } ) =>
            <BlogPageNavBox key={ id }
                            active={ category === text }
                            onClick={ () => handleNavClick( text ) }>
              <Text tid={ label }/>
            </BlogPageNavBox>
          ) }
        </BlogPageNavbar>

        <CourseCards>
          { data.loading === true ?
            <CenterBox className={ "spinner-border" }><span className={ "sr-only" }>loading...</span></CenterBox> : "" }
          { data.courses.length > 0 ?
            data.courses?.map(
              ( {
                  id,
                  courseName_uz,
                  courseName_ru,
                  description_uz,
                  description_ru,
                  category,
                  subCategory,
                  tags,
                  duration,
                  discount,
                  courseIcon
                } ) => (
                <CourseCard
                  key={ id }
                  type={ category }
                  guarantee={ subCategory }
                  name={ courseName_uz }
                  description={ description_uz }
                  icon={ courseIcon }
                  duration={ duration }
                  discount={ discount }
                  handleCardClick={ handleCardClick }
                />
              )
            ) : !data.loading && !data.error ? <EmptyPage pageName={ "courses" }/> : '' }
          { !data.loading && data.error ? <CenterBox error>Something <br/> went wrong</CenterBox> : "" }
        </CourseCards>
        <CoursesForm/>
        <CourseBottomPopup setShow={ () => setShow( { show: true, selectedCourse: {} } ) } popUpName="girls"/>
        <CourseBottomPopup setShow={ () => setShow( { show: true, selectedCourse: {} } ) } popUpName="new-comer"/>
      </CoursePageBox>
      <FooterMain/>
      { show.show && ( <PopupForm selectedCourse={ show.selectedCourse }
                                  callback={ () => setShow( { show: false, selectedCourse: {} } ) }/> ) }
    </>
  );
}

const mapStateToProps = ( state ) => ( {
  programmingCourses: state.programmingCoursesReducer,
  businessCourses: state.businessCoursesReducer,
  designCourses: state.designCoursesReducer,
  languageCourses: state.languageCoursesReducer,
  courses: state.coursesReducer,
  category: state.categoryReducer.category
} )

export default connect( mapStateToProps )( CoursePage );