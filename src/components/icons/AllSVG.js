import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 0H12.5C13.0304 0 13.5391 0.210714 13.9142 0.585786C14.2893 0.960859 14.5 1.46957 14.5 2V4H18.5C19.0304 4 19.5391 4.21071 19.9142 4.58579C20.2893 4.96086 20.5 5.46957 20.5 6V17C20.5 17.5304 20.2893 18.0391 19.9142 18.4142C19.5391 18.7893 19.0304 19 18.5 19H2.5C1.96957 19 1.46086 18.7893 1.08579 18.4142C0.710714 18.0391 0.5 17.5304 0.5 17V6C0.5 4.89 1.39 4 2.5 4H6.5V2C6.5 0.89 7.39 0 8.5 0ZM12.5 4V2H8.5V4H12.5Z"
        fill="#6B7280"
      />
    </svg>
  );
}

export default SvgAddButton;