import React from "react";

const VerifySign = (props) => {
  return (
      <svg className={props.style || "icon"} viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
              d="M5.83918 0.799542C5.62455 0.584926 5.27681 0.584926 5.06219 0.799542L1.7944 4.06733L0.925493 3.32093C0.713808 3.10924 0.370634 3.10924 0.158763 3.32093C-0.0529211 3.53262 -0.0529211 3.87597 0.158763 4.08765L1.45691 5.20267C1.66859 5.41436 2.01177 5.41436 2.22364 5.20267C2.24488 5.18143 2.26265 5.15781 2.27968 5.13419C2.28279 5.13126 2.28627 5.12924 2.28938 5.12631L5.83919 1.57633C6.05361 1.3619 6.05361 1.01397 5.83918 0.799542Z"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="6" height="6" fill="white"/>
          </clipPath>
        </defs>
      </svg>

  );
};

export default VerifySign;