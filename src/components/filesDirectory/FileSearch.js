import React, {useState} from "react";
import Search from "../../icons/Search";

const FileSearch = ({search}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
      <div>
        {
          show ?
              <React.Fragment>
                <input
                    placeholder='link or file name'
                    {...search} type="text"
                />
                <button onClick={toggleShow}>close</button>
              </React.Fragment> :
              <button onClick={toggleShow}>
                <Search/>
              </button>
        }
      </div>
  );
};

export default FileSearch;