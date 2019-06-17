const filesDirectory = JSON.parse(localStorage.getItem("filesDirectory")) || [];
export const filesDefaultState = filesDirectory || [];

export default (state = filesDefaultState, action) => {
  switch (action.type) {
    case "ADD_FILE":
      state = [...state, action.file];
      return saveLocally(state);
    case "REMOVE_FILE":
      state = state.filter(file => file.id !== action.data.id);
      return saveLocally(state);
    case "UPDATE_FILE":
      state = state.map(file => {
        if (file.id === action.id) {
          return {...file, ...action.updates};
        }
        return file;
      });
      return saveLocally(state);
    case "UPDATE_FILES":
      return action.files;
    default:
      return state
  }
};

const saveLocally = (state) => {
  localStorage.setItem("filesDirectory", JSON.stringify(state));
  return state;
};
