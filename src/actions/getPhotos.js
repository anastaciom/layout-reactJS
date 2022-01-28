import axios from "axios";


export function getPhotos(date) {

    return async (dispatch, getState)=>{

    const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}&page=1`)

        dispatch({
            type: "SEARCH_PHOTOS",
            payload:  response.data.photos
        })
    }
}