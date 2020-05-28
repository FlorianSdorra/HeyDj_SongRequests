import { startFetchEventSearch, failFetchEventSearch, finishFetchEventSearch} from '../actions/index';

// const url = 'https://heydj-api.floriansdorra87.now.sh/';

const getEvents = () => async dispatch => {

    dispatch(startFetchEventSearch());

    try{
        const data = await fetch(`https://heydj-api.floriansdorra87.now.sh/events`);
        dispatch(finishFetchEventSearch(data));
    } catch (error){
        dispatch(failFetchEventSearch(error));
    }
}

export default getEvents;