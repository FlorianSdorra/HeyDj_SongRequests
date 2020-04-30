
const voteReducer = (state, action) => {
    switch (action.type){
        case "SET_DIRECTION":
            return{
                ...state,
                direction: action.direction
            }
    
    default:
    return state;
}}

export default voteReducer;
