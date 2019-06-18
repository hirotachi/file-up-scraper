import React from "react";
import layoutChangeHandler from "../../costumHooks/layoutChangeHandler";
import MobileControls from "./controls/MobileControls";
import CommonControls from "./controls/CommonControls";

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
  const controls = {play: selectFile, download: handleDownload, remove: handleRemoveFile, edit: toggleEdit};
  return (
      <div>
        {
          layoutChangeHandler("mobile") ?
              <MobileControls {...controls} /> : <CommonControls {...controls}/>
        }
      </div>
  )
};

export default FileControls;