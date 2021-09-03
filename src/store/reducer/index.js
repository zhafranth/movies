import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { movieReducer } from "./movieReducer";

const Reducer = combineReducers({ globalReducer, movieReducer });

export default Reducer;
