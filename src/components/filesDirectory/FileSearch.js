import React from "react";

const FileSearch = ({search}) => {
  return (
      <div>
        <input
            placeholder='link or file name'
            {...search} type="text"
        />
      </div>
  );
};

export default FileSearch;