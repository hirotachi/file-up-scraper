import {filesDefaultState} from "./filesReducer";

const currentFileDefaultState = filesDefaultState[0];

export default (state = currentFileDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}