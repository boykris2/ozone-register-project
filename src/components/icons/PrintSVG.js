import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M6.75006 15.752V17.25H14.2501V15.752H6.75006ZM6.75006 13.252V14.75H14.2501V13.252H6.75006ZM2.25006 14.75H3.75006V18.751C3.74506 19.966 4.02406 20.25 5.25006 20.25H15.7501C16.9761 20.25 17.2501 20.024 17.2501 18.751V14.75H18.7501C20.0251 14.77 20.2646 14.4865 20.2501 13.251V7.751C20.2501 6.576 20.0601 6.25 18.7501 6.25H17.2501V3.751C17.2646 2.516 17.0251 2.25 15.7501 2.25H5.25006C4.05006 2.25 3.74506 2.536 3.75006 3.751V6.25H2.25006C0.96006 6.25 0.75006 6.531 0.75006 7.751V13.251C0.74506 14.466 1.05006 14.77 2.25006 14.75ZM15.7501 18.75H5.25006V12.25H15.7501V18.75ZM16.6901 9.501C16.6901 9.051 17.0501 8.6915 17.5001 8.6915C17.9501 8.6915 18.3101 9.051 18.3101 9.501C18.3101 9.951 17.9501 10.311 17.5001 10.311C17.0501 10.311 16.6901 9.951 16.6901 9.501ZM5.25006 3.75H15.7501V6.252H5.25006V3.75Z"
          fill="#6B7280"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgAddButton;
