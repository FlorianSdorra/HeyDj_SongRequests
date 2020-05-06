export const setDirection = direction => {
    return {
        type: "SET_DIRECTION",
        direction: direction
    }
}

export const resetDirection = () => {
    return {
        type: "RESET_DIRECTION"
    }
}