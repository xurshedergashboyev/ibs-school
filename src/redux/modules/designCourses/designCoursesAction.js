import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getDesignCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_DESIGN_COURSES,
        payload:axios.get(`${link}/courses/design`)
    })
}