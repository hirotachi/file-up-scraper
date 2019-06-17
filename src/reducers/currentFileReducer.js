import {filesDefaultState} from "./filesReducer";

const currentFileDefaultState = filesDefaultState[0] || {};

export default (state = currentFileDefaultState, action) => {
  switch (action.type) {
    case "ADD_FILE":
    case "SET_CURRENT":
      return action.file;
    case "REMOVE_FILE":
      return state.id === action.data.id ?
          action.data.files.filter(file => file.id !== action.data.id)[0] || {} :
          state;
    default:
      return state;
  }
}