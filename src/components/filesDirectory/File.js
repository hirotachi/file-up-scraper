import React from "react";
import {connect} from "react-redux";
import FileControls from "./FileControls";
import {setCurrentFile} from "../../actions/currentFileActions";


const File = (props) => {
  const {dispatch, ...file} = props;
  const {image, link, fileType, fileName, duration, id} = file;
  const handleSelectFile = () => dispatch(setCurrentFile(file));
  return (
      <div style={{border: "1px solid black"}}>
        <div>
          <div onClick={handleSelectFile}>
            <img src={image} alt="file" style={{width: "200px"}}/>
            <span>duration{duration}</span>
          </div>
          <div>
            <h3 onClick={handleSelectFile}
                style={{color: props.currentFile.id === id ? "green" : "black"}}>{fileName}</h3>
            <span>{link}</span>
          </div>
          <div>
            status: online
          </div>
          <div>
            <span>{fileType}</span>
          </div>
          <FileControls selectFile={handleSelectFile} {...props}/>
        </div>
      </div>
  );
};

const mapStateToProps = ({currentFile}) => ({currentFile});
export default connect(mapStateToProps)(File);