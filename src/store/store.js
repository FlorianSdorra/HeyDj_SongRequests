import { createStore } from "redux";
import mainReducer from "../reducers/mainReducer";

const initialState = {
    direction: "",
    eventSearch: "",
    isFetching: false,
    error: null
};

const store = createStore(mainReducer, initialState);

export default store;


