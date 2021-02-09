import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../backendConfig/link/link"

export const getTeachers=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_TEACHERS,
        payload:axios.get(`${link}/teachers`)
    })
}
