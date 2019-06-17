import {useEffect, useState} from "react";
import breakPoints from "../extra/breakPoints";


export default (size) => {
  const [layout, setLayout] = useState(false);
  let layoutReached = breakPoints(size);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  function handleWindowResize() {
    layoutReached = breakPoints(size);
    if (layoutReached) {
      setLayout(layoutReached);
    } else if (layout && !layoutReached) {
      setLayout(layoutReached)
    }
  }

  return layoutReached;
};