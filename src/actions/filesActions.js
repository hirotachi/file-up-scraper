import axios from "axios";
import idGen from "../extra/idGen";

export const startFetchLink = (link) => {
  const videoId = link.split("org/")[1];
  return dispatch => {
    axios.get(`https://file-up-catcher.cleverapps.io/${videoId}`)
        .then(({data}) => {
          let {file: downloadLink, image, fileType, fileName, duration} = data;
          duration = `${Math.floor(duration / 60)}:${duration % 60}`;
          fileName = fileName.replace(fileType, "").trim();
          dispatch(addFile({id: idGen(), link, downloadLink, fileName, fileType, image, duration}));
        })
        .catch(err => console.log(err));
  }
};


const addFile = (file) => ({type: "ADD_FILE", file});
export const removeFile = (data) => ({type: "REMOVE_FILE", data});
