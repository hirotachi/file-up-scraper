import idGen from "../extra/idGen";

export const filesDefaultState = [
  {
    id: idGen(),
    link: "https://www.file-up.org/9u0hizd0j8kt",
    downloadLink: "https://f10.file-upload.com:183/d/rqxez7gpnlgpv7w7kkzn4ailzves3ih2kjpsft3o2e4fmcclanyzxjoue2wqee6ccjm7ur5j/video.mp4",
    image: "https://f10.file-upload.com/i/01060/9u0hizd0j8kt.jpg",
    duration: "23:55",
    fileType: "mp4",
    fileName: "Attack on titans"
  }
];

export default (state = filesDefaultState, action) => {
  switch (action.type) {
    case "ADD_FILE":
      return [...state, action.file];
    case "REMOVE_FILE":
      return state.filter(file => file.id !== action.id);
    case "UPDATE_FILE":
      return state.map(file => {
        if (file.id === action.id) {
          return {...file, ...action.updates};
        }
        return file;
      });
    default:
      return state
  }
};