import { createStore } from "redux";
import voteReducer from "../reducers/voteReducer";

const initialState = {
    direction: "",
    isLoggedIn: false,
    dj: {
        username: "", // required && unique
        email: "", // required && unique
        password: "", // required && unique
        event: "", // unique
        image: "",
        isOn: false // false by default, should turn in true if dj logged in!
    },
    user: {
        cookie: "",
        amountOfVote: 0 // NOT bigger than 1
    },
    events: {
        name: "", //required && unique
        location: "", //required && unique
        date: "", //required
        soundtrack: "" //required && unique
    }
};

const store = createStore(voteReducer, initialState);

// console.log(store.getState())
// console.log(store)
export default store;


