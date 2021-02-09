import { combineReducers } from 'redux';
import teacherReducer from "../modules/teachers/teachersReducer";
import coursesReducer from "../modules/courses/coursesReducer";
import programmingCoursesReducer from "../modules/prograammingCourses/programmingCoursesReducer";
import businessCoursesReducer from "../modules/businessCourses/businessCoursesReducer";
import designCoursesReducer from "../modules/designCourses/designCoursesReducer";
import languageCoursesReducer from "../modules/languageCourses/languageCoursesReducer";
import categoryReducer from "../modules/category/categoryReducer";
import coursesListReducer from "../modules/coursesList/coursesListReducer";

const reducer = combineReducers({
    categoryReducer,
    teacherReducer,
    coursesReducer,
    programmingCoursesReducer,
    businessCoursesReducer,
    designCoursesReducer,
    languageCoursesReducer,
    coursesListReducer
});

export default reducer;