import { ADD_FETCHED_DATA } from '../actions/types';

const initialState = {
    direction: "",
    fetch: []
};

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_DIRECTION":
            return{
                ...state,
                direction: action.direction
            };
        case "RESET_DIRECTION":
            return{
                ...state,
                direction:""
            }
        case ADD_FETCHED_DATA:
            return{
                ...state,
                fetch: [...action.payload]
            }

    default:
    return state;
}}

export default mainReducer;
