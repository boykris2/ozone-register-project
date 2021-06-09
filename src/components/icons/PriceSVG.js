import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 21H3V19H7V18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V15C3 13.9 3.9 13 5 13H7C7.53043 13 8.03914 13.2107 8.41421 13.5858C8.78929 13.9609 9 14.4696 9 15V19C9 20.11 8.11 21 7 21ZM7 15H5V16H7V15ZM5 3H7C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5V9C9 10.11 8.11 11 7 11H5C4.46957 11 3.96086 10.7893 3.58579 10.4142C3.21071 10.0391 3 9.53043 3 9V5C3 3.9 3.9 3 5 3ZM5 9H7V5H5V9ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z"
        fill="black"
        fill-opacity="0.5"
      />
    </svg>
  );
}

export default SvgAddButton;
