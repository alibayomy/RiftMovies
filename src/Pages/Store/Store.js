import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import favMoviesReducer from "./Reducers/FavMoviesReducer";


const changeStore =  createStore(favMoviesReducer, composeWithDevTools())

export default changeStore