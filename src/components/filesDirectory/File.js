import React, {useState} from "react";
import {connect} from "react-redux";
import FileControls from "./FileControls";
import {setCurrentFile} from "../../actions/currentFileActions";
import {removeFile, startUpdateFile} from "../../actions/filesActions";
import LinkForm from "../LinkForm";
import VerifySign from "../../icons/VerifySign";


const File = (props) => {
  const {dispatch, files, ...file} = props;
  const {image, link, fileType, fileName, duration, id, valid} = file;
  const [edit, setEdit] = useState(false);
  const handleSelectFile = () => dispatch(setCurrentFile(file));
  const handleRemoveFile = () => dispatch(removeFile({id: file.id, files}));
  const toggleEdit = () => setEdit(!edit);
  const handleSaveEdit = (link) => {
    dispatch(startUpdateFile({link, id}));
    toggleEdit();
  };
  return (
      <div style={{border: "1px solid black"}}>
        <div>
          <div onClick={handleSelectFile}>
            <img src={image} alt="file" style={{width: "200px"}}/>
            <span>duration{duration}</span>
          </div>
          <div>
            {
              edit ?
                  <LinkForm
                      button="save"
                      value={link}
                      handleSubmit={handleSaveEdit}
                      placeholder="your file-up link"
                  /> :
                  <React.Fragment>
                    <h3 onClick={handleSelectFile}
                        style={{color: props.currentFile.id === id ? "green" : "black"}}>{fileName}</h3>
                    <span>{link}</span>
                  </React.Fragment>
            }
          </div>
          <div>
            <VerifySign/>
            status: {valid ? "online" : "offline"}
          </div>
          <div>
            <span>{fileType}</span>
          </div>
          <FileControls
              toggleEdit={toggleEdit}
              handleRemoveFile={handleRemoveFile}
              selectFile={handleSelectFile} {...props}
          />
        </div>
      </div>
  );
};

const mapStateToProps = ({currentFile, files}) => ({currentFile, files});
export default connect(mapStateToProps)(File);