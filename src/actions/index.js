import { SET_DIRECTION, RESET_DIRECTION, ADD_FETCHED_DATA, ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM } from './types.js';
import axios from 'axios';

//CHANGING DIRECTIONS EVERYWHERE

export const setDirection = direction =>({ 
    type: SET_DIRECTION,
    direction: direction
})

export const resetDirection = () => ({
    type: RESET_DIRECTION
})

//FETCHING EVENTS IN /EVENTSEARCH


export const addFavoriteTerm = (data) => ({
    type: ADD_FAVORITE_TERM,
    payload: {
        name: data.name,
        description: data.description
    }
});

export const removeFavoriteTerm = name => ({
    type: REMOVE_FAVORITE_TERM,
    payload: {
        name
    }
});

const apiUrl = 'https://heydj-api.floriansdorra87.now.sh/events';

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type:ADD_FETCHED_DATA,
                    payload:data
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

