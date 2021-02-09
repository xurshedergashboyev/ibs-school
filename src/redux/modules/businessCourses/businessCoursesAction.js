import axios from "axios"
import {link} from "../../../backendConfig/link/link"
import actionTypes from "../../../constants/actionTypes"

export const getBusinessCourses = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_BUSINESS_COURSES,
        payload: axios.get(`${link}/courses/business`)
    })
}