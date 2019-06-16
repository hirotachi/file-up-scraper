import {filesDefaultState} from "./filesReducer";

const currentFileDefaultState = filesDefaultState[0];

export default (state = currentFileDefaultState, action) => {
  switch (action.type) {
    case "ADD_FILE":
    case "SET_CURRENT":
      return action.file;
    default:
      return state;
  }
}