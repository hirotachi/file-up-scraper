import axios from "axios";
import idGen from "../extra/idGen";


const fetchData = async (link) => {
  const videoId = link.split("org/")[1];
  return await axios.get(`https://file-up-catcher.cleverapps.io/${videoId}`)
      .then(({data}) => {
        let {file: downloadLink, image, fileType, fileName, duration} = data;
        duration = `${Math.floor(duration / 60)}:${duration % 60}`;
        fileName = fileName.replace(fileType, "").trim();
        return {downloadLink, image, fileName, fileType, duration, link};
      })
};

export const startFetchLink = (link, setError, resetInput) => {
  return dispatch => {
    fetchData(link)
        .then((data) => {
          dispatch(addFile({id: idGen(), ...data, valid: true}));
          resetInput();
        })
        .catch(err => setError("Invalid link try again"));
  }
};

export const startUpdateFile = ({link, id}) => {
  return dispatch => {
    fetchData(link)
        .then(data => dispatch(updateFile(id, {...data, link, valid: true})))
        .catch(err => dispatch(updateFile(id, {link, valid: false})));
  }
};

const updateFile = (id, updates) => ({type: "UPDATE_FILE", id, updates});
const addFile = (file) => ({type: "ADD_FILE", file});
export const removeFile = (data) => ({type: "REMOVE_FILE", data});


export const startFilesCheck = (files) => {
  let result = [];
  return async dispatch => {
    for (let file of files) {
      let data;
      try {
        data = await fetchData(file.link);
      } catch (err) {
        data = {valid: false};
      }
      result.push({...file, ...data})
    }
    if (result !== files) {
      dispatch(updateAllFiles(result));
    }
  }
};

const updateAllFiles = (files) => ({type: "UPDATE_FILES", files});


