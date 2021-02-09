import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getLanguageCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_LANGUAGE_COURSES,
        payload:axios.get(`${link}/courses/language`)
    })
}