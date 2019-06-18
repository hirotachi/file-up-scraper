import {useEffect, useState} from "react";
import breakPoints from "../extra/breakPoints";


export default (...sizes) => {
  const [layout, setLayout] = useState(false);
  let layoutReached = !!sizes.find(size => breakPoints(size));
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  function handleWindowResize() {
    layoutReached = !!sizes.find(size => breakPoints(size));
    if (layoutReached) {
      setLayout(layoutReached);
    } else if (layout && !layoutReached) {
      setLayout(layoutReached)
    }
  }

  return layoutReached;
};