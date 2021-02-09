import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getProgrammingCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_PROGRAMMING_COURSES,
        payload:axios.get(`${link}/courses/programming`)
    })
}