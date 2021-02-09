import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getCoursesList=()=>(dispatch)=>{
  dispatch({
    type:actionTypes.COURSES_LIST,
    payload:axios.get(`${link}/courses/name`)
  })
}