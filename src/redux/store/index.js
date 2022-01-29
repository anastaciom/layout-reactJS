import { createStore, combineReducers, applyMiddleware } from "redux";
import { getPhotosReducer } from "../reducers/getPhotos";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    result: getPhotosReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store