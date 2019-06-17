import React from "react";


const Pencil = (props) => {
  return (
      <svg className={props.style || "icon"} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
              d="M9.32737 2.52767L12.3787 5.57898L4.65493 13.3028L1.60532 10.2514L9.32737 2.52767ZM14.6941 1.79176L13.3333 0.430981C12.8074 -0.0949135 11.9535 -0.0949135 11.4258 0.430981L10.1223 1.73447L13.1736 4.78581L14.6941 3.26536C15.102 2.85745 15.102 2.19965 14.6941 1.79176ZM0.00849115 14.5403C-0.0470393 14.7902 0.178599 15.0142 0.428543 14.9534L3.82875 14.129L0.779139 11.0777L0.00849115 14.5403Z"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="15" height="15" fill="white"/>
          </clipPath>
        </defs>
      </svg>
  );
};


export default Pencil;