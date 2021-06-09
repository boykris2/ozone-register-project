import * as React from "react";

function SvgAddButton(props) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.499 9H18.499C18.499 6.163 15.744 4.869 13.499 4.571V2.5H11.499V4.571C9.25402 4.869 6.49902 6.163 6.49902 9C6.49902 11.706 9.16502 13.113 11.499 13.43V18.4C10.051 18.149 8.49902 17.376 8.49902 16H6.49902C6.49902 18.589 8.92402 20.119 11.499 20.436V22.5H13.499V20.43C15.744 20.132 18.499 18.837 18.499 16C18.499 13.163 15.744 11.869 13.499 11.571V6.6C14.829 6.839 16.499 7.541 16.499 9ZM8.49902 9C8.49902 7.541 10.169 6.839 11.499 6.6V11.399C10.128 11.146 8.49902 10.397 8.49902 9ZM16.499 16C16.499 17.459 14.829 18.161 13.499 18.4V13.6C14.829 13.839 16.499 14.541 16.499 16Z"
        fill="#6B7280"
      />
    </svg>
  );
}

export default SvgAddButton;
