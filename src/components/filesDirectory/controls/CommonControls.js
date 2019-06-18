import React from 'react'
import Download from "../../../icons/Download";
import Play from "../../../icons/Play";
import Edit from "../../../icons/Edit";
import Trash from "../../../icons/Trash";

const CommonControls = (props) => {
  const {play, remove, download, edit} = props;
  return (
      <div className="commonControls">
        <span title="download" onClick={download}><Download/></span>
        <span title="play" onClick={play}><Play/></span>
        <span title="edit" onClick={edit}><Edit/></span>
        <span title="remove" onClick={remove}><Trash/></span>
      </div>
  );
};
export default CommonControls;