import * as React from "react";
const SvgNgNigeria = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <mask
      id="NG_-_Nigeria_svg__a"
      width={16}
      height={12}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h16v12H0z" />
    </mask>
    <g fillRule="evenodd" clipRule="evenodd" mask="url(#NG_-_Nigeria_svg__a)">
      <path fill="#F7FCFF" d="M0 0h16v12H0V0Z" />
      <path fill="#093" d="M11 0h5v12h-5V0ZM0 0h5v12H0V0Z" />
    </g>
  </svg>
);
export default SvgNgNigeria;