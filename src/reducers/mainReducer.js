const initialState = {
    direction: ""
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

    default:
    return state;
}}

export default mainReducer;
