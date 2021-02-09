import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_COURSES,
        payload:axios.get(`${link}/courses`)
    })
}