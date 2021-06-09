import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 0L11.1962 6H0.803848L6 0Z" fill="#C4C4C4" />
      <path d="M6 15L11.1962 9H0.803848L6 15Z" fill="#C4C4C4" />
    </svg>
  );
}

export default SvgAddButton;
