import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import filesReducer from "../reducers/filesReducer"
import currentFileReducer from "../reducers/currentFile";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
  return createStore(combineReducers({
    files: filesReducer,
    currentFile: currentFileReducer
  }), composeEnhancers(applyMiddleware(thunk)));
}