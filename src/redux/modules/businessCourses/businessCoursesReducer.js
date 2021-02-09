import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    courses:[]
}

const map = {
    [`${actionTypes.GET_BUSINESS_COURSES}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_BUSINESS_COURSES}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        courses:payload.data
    }),
    [`${actionTypes.GET_BUSINESS_COURSES}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function businessCoursesReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}