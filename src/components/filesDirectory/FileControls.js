import React from "react";

const FileControls = (props) => {
  const {selectFile, fileName, downloadLink} = props;
  let href = downloadLink.replace("/video", `/${fileName.replace(/\s/g, "-")}`);
  const handleDownload = () => {
    let link = document.createElement("a");
    // link = {
    //   ...link, target: "_blank", download: "video",
    //   rel: "noopener noreferrer", href
    // };
    link.download = fileName;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };
  return (
      <div>
        {/*<a download href={href} target="_blank" rel="">Download</a>*/}
        <button onClick={handleDownload}>download</button>
        <button onClick={selectFile}>play</button>
        <button>edit</button>
        <button>remove</button>
      </div>
  )
};

export default FileControls;