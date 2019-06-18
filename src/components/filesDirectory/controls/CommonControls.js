import React from 'react'
import Download from "../../../icons/Download";
import Play from "../../../icons/Play";
import Edit from "../../../icons/Edit";
import Trash from "../../../icons/Trash";

const CommonControls = (props) => {
  const {play, remove, download, edit} = props;
  return (
      <div>
        <span onClick={download}><Download/></span>
        <span onClick={play}><Play/></span>
        <span onClick={edit}><Edit/></span>
        <span onClick={remove}><Trash/></span>
      </div>
  );
};
export default CommonControls;