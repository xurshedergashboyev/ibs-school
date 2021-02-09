import actionTypes from "../../../constants/actionTypes"

const defaultState={
  loading:false,
  error:false,
  coursesList:[]
}

const map = {
  [`${actionTypes.COURSES_LIST}${actionTypes.PENDING}`]:(state)=>({
    ...state,
    loading:true
  }),
  [`${actionTypes.COURSES_LIST}${actionTypes.FULFILLED}`]:(state,{payload})=>({
    ...state,
    loading:false,
    error:false,
    coursesList:payload.data
  }),
  [`${actionTypes.COURSES_LIST}${actionTypes.REJECTED}`]:(state)=>({
    ...state,
    loading:false,
    error:true
  })
}

export default function coursesListReducer(state=defaultState,action){
  return(map[action.type] && map[action.type](state, action)) || state;
}