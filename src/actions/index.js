//CHANGING DIRECTIONS EVERYWHERE

export const setDirection = direction =>({ 
    type: "SET_DIRECTION",
    direction: direction
})

export const resetDirection = () => ({
    type: "RESET_DIRECTION"
})

//FETCHING EVENTS IN /EVENTSEARCH

export const startFetchEventSearch = () => ({
    type: "EVENT_SEARCH_START_FETCH"
});

export const EVENT_SEARCH_FAIL_FETCH = error => ({
    type: "EVENT_SEARCH_FAIL_FETCH",
    payload: error
    
});

export const EVENT_SEARCH_FINISH_FETCH = data => ({
    type: "EVENT_SEARCH_FINISH_FETCH",
    payload: data
});


