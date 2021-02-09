import actionTypes from "../../../constants/actionTypes";

const defaultState = {
    category: "none"
}

const map = {
    [`${actionTypes.NONE_CATEGORY}`]: (state) => ({
        ...state,
        category: "none"
    }),
    [`${actionTypes.PROGRAMMING_CATEGORY}`]: (state) => ({
        ...state,
        category: "programming"
    }),
    [`${actionTypes.DESIGN_CATEGORY}`]: (state) => ({
        ...state,
        category: "design"
    }),
    [`${actionTypes.BUSINESS_CATEGORY}`]: (state) => ({
        ...state,
        category: "business"
    }),
    [`${actionTypes.LANGUAGE_CATEGORY}`]: (state) => ({
        ...state,
        category: "language"
    }),
}

export default function categoryReducer(state = defaultState, action) {
    return (map[action.type] && map[action.type](state, action)) || state;
}

// const categoryReducer = (state = defaultState, action) => {
//
//     switch (action.type) {
//         case actionTypes.NONE_CATEGORY:
//             return {category: "none"}
//         case actionTypes.PROGRAMMING_CATEGORY:
//             return {category: "programming"}
//         case actionTypes.BUSINESS_CATEGORY:
//             return {category: "business"}
//         case actionTypes.DESIGN_CATEGORY:
//             return {category: "design"}
//         case actionTypes.LANGUAGE_CATEGORY:
//             return {category: "language"}
//         default:
//             return state
//     }
//
// }
//
// export default categoryReducer