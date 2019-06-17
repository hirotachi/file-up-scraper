import React from "react";

const FileControls = (props) => {
  const {selectFile, fileName, downloadLink, handleRemoveFile, toggleEdit} = props;
  let href = downloadLink.replace("/video", `/${fileName.replace(/\s/g, "-")}`);
  const handleDownload = () => {
    let link = document.createElement("a");
    link.download = fileName;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };
  return (
      <div>
        <button onClick={handleDownload}>download</button>
        <button onClick={selectFile}>play</button>
        <button onClick={toggleEdit}>edit</button>
        <button onClick={handleRemoveFile}>remove</button>
      </div>
  )
};

export default FileControls;