import React from "react";


const ShowMore = (props) => {
  return (
      <svg className={props.iconStyle || "icon"} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 3C6.825 3 7.5 2.325 7.5 1.5C7.5 0.675 6.825 0 6 0C5.175 0 4.5 0.675 4.5 1.5C4.5 2.325 5.175 3 6 3ZM6 4.5C5.175 4.5 4.5 5.175 4.5 6C4.5 6.825 5.175 7.5 6 7.5C6.825 7.5 7.5 6.825 7.5 6C7.5 5.175 6.825 4.5 6 4.5ZM6 9C5.175 9 4.5 9.675 4.5 10.5C4.5 11.325 5.175 12 6 12C6.825 12 7.5 11.325 7.5 10.5C7.5 9.675 6.825 9 6 9Z"/>
      </svg>
  );
};

export default ShowMore;