import React from "react";
import Trash from "../../icons/Trash";
import Play from "../../icons/Play";
import Download from "../../icons/Download";
import ShowMore from "../../icons/ShowMore";
import Pencil from "../../icons/Pencil";

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
        <Trash/>
        <Play/>
        <Download/>
        <Pencil/>
        <button onClick={handleDownload}>download</button>
        <button onClick={selectFile}>play</button>
        <button onClick={toggleEdit}>edit</button>
        <button onClick={handleRemoveFile}>remove</button>
        <ShowMore/>
      </div>
  )
};

export default FileControls;