import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M15.6118 9.23676C15.7409 9.10767 15.8134 8.93258 15.8134 8.75001C15.8134 8.56745 15.7409 8.39236 15.6118 8.26326C15.4827 8.13417 15.3076 8.06165 15.125 8.06165C14.9424 8.06165 14.7674 8.13417 14.6383 8.26326L11 11.9029L9.42426 10.3258C9.36034 10.2618 9.28446 10.2111 9.20094 10.1765C9.11743 10.142 9.02791 10.1241 8.93751 10.1241C8.84712 10.1241 8.7576 10.142 8.67409 10.1765C8.59057 10.2111 8.51469 10.2618 8.45076 10.3258C8.38684 10.3897 8.33614 10.4656 8.30154 10.5491C8.26695 10.6326 8.24915 10.7221 8.24915 10.8125C8.24915 10.9029 8.26695 10.9924 8.30154 11.0759C8.33614 11.1595 8.38684 11.2353 8.45076 11.2993L10.5133 13.3618C10.5771 13.4258 10.653 13.4766 10.7365 13.5112C10.82 13.5459 10.9096 13.5637 11 13.5637C11.0904 13.5637 11.18 13.5459 11.2635 13.5112C11.347 13.4766 11.4229 13.4258 11.4868 13.3618L15.6118 9.23676Z"
          fill="#6B7280"
        />
        <path
          d="M0.6875 1.875C0.505164 1.875 0.330295 1.94743 0.201364 2.07636C0.0724328 2.2053 0 2.38016 0 2.5625C0 2.74484 0.0724328 2.9197 0.201364 3.04864C0.330295 3.17757 0.505164 3.25 0.6875 3.25H2.21375L2.76512 5.45963L4.82487 16.439C4.85437 16.5965 4.93798 16.7388 5.06125 16.8413C5.18453 16.9437 5.33972 16.9999 5.5 17H6.875C6.14565 17 5.44618 17.2897 4.93046 17.8055C4.41473 18.3212 4.125 19.0207 4.125 19.75C4.125 20.4793 4.41473 21.1788 4.93046 21.6945C5.44618 22.2103 6.14565 22.5 6.875 22.5C7.60435 22.5 8.30382 22.2103 8.81954 21.6945C9.33527 21.1788 9.625 20.4793 9.625 19.75C9.625 19.0207 9.33527 18.3212 8.81954 17.8055C8.30382 17.2897 7.60435 17 6.875 17H16.5C15.7707 17 15.0712 17.2897 14.5555 17.8055C14.0397 18.3212 13.75 19.0207 13.75 19.75C13.75 20.4793 14.0397 21.1788 14.5555 21.6945C15.0712 22.2103 15.7707 22.5 16.5 22.5C17.2293 22.5 17.9288 22.2103 18.4445 21.6945C18.9603 21.1788 19.25 20.4793 19.25 19.75C19.25 19.0207 18.9603 18.3212 18.4445 17.8055C17.9288 17.2897 17.2293 17 16.5 17H17.875C18.0353 16.9999 18.1905 16.9437 18.3137 16.8413C18.437 16.7388 18.5206 16.5965 18.5501 16.439L20.6126 5.439C20.6312 5.33978 20.6277 5.23768 20.6024 5.13996C20.577 5.04224 20.5305 4.95131 20.466 4.87361C20.4016 4.7959 20.3208 4.73335 20.2295 4.69038C20.1381 4.64742 20.0384 4.62509 19.9375 4.625H3.97375L3.41687 2.39612C3.37976 2.24733 3.29397 2.11521 3.17313 2.02078C3.05229 1.92636 2.90336 1.87504 2.75 1.875H0.6875ZM6.07062 15.625L4.26525 6H19.1097L17.3044 15.625H6.07062ZM8.25 19.75C8.25 20.1147 8.10513 20.4644 7.84727 20.7223C7.58941 20.9801 7.23967 21.125 6.875 21.125C6.51033 21.125 6.16059 20.9801 5.90273 20.7223C5.64487 20.4644 5.5 20.1147 5.5 19.75C5.5 19.3853 5.64487 19.0356 5.90273 18.7777C6.16059 18.5199 6.51033 18.375 6.875 18.375C7.23967 18.375 7.58941 18.5199 7.84727 18.7777C8.10513 19.0356 8.25 19.3853 8.25 19.75ZM17.875 19.75C17.875 20.1147 17.7301 20.4644 17.4723 20.7223C17.2144 20.9801 16.8647 21.125 16.5 21.125C16.1353 21.125 15.7856 20.9801 15.5277 20.7223C15.2699 20.4644 15.125 20.1147 15.125 19.75C15.125 19.3853 15.2699 19.0356 15.5277 18.7777C15.7856 18.5199 16.1353 18.375 16.5 18.375C16.8647 18.375 17.2144 18.5199 17.4723 18.7777C17.7301 19.0356 17.875 19.3853 17.875 19.75Z"
          fill="#6B7280"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgAddButton;
