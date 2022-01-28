const initialState = {
    photos: [],
    loading: false,
    error: null
}

export const getPhotosReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_PHOTOS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }

        case "FETCH_PHOTOS_SUCCESS":
            return {
                ...state,
                loading: false,
                photos: action.payload
            }

        case "FETCH_PHOTOS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error,
                photos: []
            }
        default:
            return state
    }
}