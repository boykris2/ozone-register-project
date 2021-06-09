import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5 14.2857L3.25 8L11.5 1.71429L10.5 0L0 8L10.5 16L11.5 14.2857Z"
        fill="#000AFF"
      />
    </svg>
  );
}

export default SvgAddButton;
