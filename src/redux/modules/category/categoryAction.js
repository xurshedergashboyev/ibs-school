import actionTypes from "../../../constants/actionTypes";

export const getNoneCategory = () => (dispatch) => {
    dispatch({
        type: actionTypes.NONE_CATEGORY
    })
}

export const getProgrammingCategory = () => (dispatch) => {
    dispatch({
        type: actionTypes.PROGRAMMING_CATEGORY
    })
}

export const getDesignCategory = () => (dispatch) => {
    dispatch({
        type: actionTypes.DESIGN_CATEGORY
    })
}

export const getBusinessCategory = () => (dispatch) => {
    dispatch({
        type: actionTypes.BUSINESS_CATEGORY
    })
}

export const getLanguageCategory = () => (dispatch) => {
    dispatch({
        type: actionTypes.LANGUAGE_CATEGORY
    })
}