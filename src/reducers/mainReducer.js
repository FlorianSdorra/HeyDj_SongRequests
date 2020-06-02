import { ADD_FETCHED_DATA, SET_DIRECTION, RESET_DIRECTION } from '../actions/types';

const initialState = {
    direction: "",
    fetch: null
};

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_DIRECTION:
            return{
                ...state,
                direction: action.direction
            };
        case RESET_DIRECTION:
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
