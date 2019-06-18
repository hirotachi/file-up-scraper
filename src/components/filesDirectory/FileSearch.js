import React, {useState} from "react";
import Search from "../../icons/Search";

const FileSearch = ({search}) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);
  return (
      <div className="fileSearch" style={{}}>
        {
          show && <input
              className="fileSearch_input"
              placeholder='link or file name'
              {...search} type="text"
          />
        }
        <span className={`fileSearch_btn ${show ? "active_btn" : ""}`} onClick={toggleShow}><Search
            iconStyle="fileSearch_btn-icon"/></span>
      </div>
  );
};

export default FileSearch;