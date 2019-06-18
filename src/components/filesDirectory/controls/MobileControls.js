import React, {useEffect, useRef, useState} from "react";
import ShowMore from "../../../icons/ShowMore";


const MobileControls = (props) => {
  const [show, setShow] = useState(false);
  const {play, remove, edit, download} = props;
  const toggleControlsMenu = () => setShow(!show);
  const menu = useRef(null);
  useEffect(() => {
    if (show) {
      window.addEventListener("click", handleClick);
    }
    return () => window.removeEventListener("click", handleClick);
  });
  const handleClick = (e) => {
    if (menu.current !== e.target) {
      toggleControlsMenu();
    }
  };
  return (
      <div>
        {
          show ?
              <div ref={menu}>
                <span onClick={download}>Download</span>
                <span onClick={play}>Play</span>
                <span onClick={edit}>Edit</span>
                <span onClick={remove}>Remove</span>
              </div> :
              <span onClick={toggleControlsMenu}><ShowMore/></span>
        }
      </div>
  );
};

export default MobileControls;