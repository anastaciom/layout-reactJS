const initialState = {
    photos: []
}


export const getPhotosReducer = (state = initialState.photos, action) => {
    switch (action.type) {
        case "SEARCH_PHOTOS":
            return action.payload 
        default:
            return state
    }
}