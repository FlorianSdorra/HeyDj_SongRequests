
const mainReducer = (state, action) => {
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
            };
        case "EVENT_SEARCH_START_FETCH":
            return{
                ...state,
                isFetching: true
            };
        case "EVENT_SEARCH_FINISH_FETCH":
            return{
                ...state,
                isFetching: false,
                eventSearch: action.data
            }
        case "EVENT_SEARCH_FAIL_FETCH":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

    default:
    return state;
}}

export default mainReducer;
