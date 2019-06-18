import React, {useState} from "react";
import {connect} from "react-redux";
import FileControls from "./FileControls";
import {setCurrentFile} from "../../actions/currentFileActions";
import {removeFile, startUpdateFile} from "../../actions/filesActions";
import LinkForm from "../LinkForm";
import layoutChangeHandler from "../../costumHooks/layoutChangeHandler";
import breakPoints from "../../extra/breakPoints";


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
      <div className="file">
        {
          !edit && !breakPoints("mobile") &&
          <div onClick={handleSelectFile} className="file_image">
            <img className="file_image-preview" src={image} alt="preview"/>
            <span className="file_image-duration">{duration}</span>
          </div>
        }
        <div className="file_data">
          {
            edit ?
                <LinkForm
                    button="save"
                    value={link}
                    handleSubmit={handleSaveEdit}
                    placeholder="your file-up link"
                    inputClassName="file_edit-input"
                    buttonClassName={"file_edit-btn"}
                /> :
                <React.Fragment>
                  <p className={`file_data-name ${props.currentFile.id === id ? "active_title" : ""}`}
                     onClick={handleSelectFile}>{fileName}</p>

                  <span className="file_data-link">{link}</span>
                </React.Fragment>
          }
          {
            !layoutChangeHandler("mobile") && !edit &&
            (valid ? <span className="file_data-status"> online</span> : "offline")
          }
          {
            !edit && !breakPoints("mobile") &&
            <span className="file_data-type">{fileType}</span>
          }
        </div>
        <div>
        </div>
        {
          !edit && !breakPoints("mobile") &&
          <FileControls
              toggleEdit={toggleEdit}
              handleRemoveFile={handleRemoveFile}
              selectFile={handleSelectFile} {...props}
          />
        }
      </div>
  );
};

const mapStateToProps = ({currentFile, files}) => ({currentFile, files});
export default connect(mapStateToProps)(File);