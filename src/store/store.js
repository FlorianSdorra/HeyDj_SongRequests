import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import mainReducer from "../reducers/mainReducer";

import {fetchData} from '../actions/index'


const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
    );

store.dispatch(fetchData());

export default store;


