import * as React from "react";

const CheckSvg = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17.42" {...props}>
    <path
      fill="#FFFFFF"
      d="M8.21 13.62 21.36.47c.31-.31.67-.47 1.09-.47s.78.16 1.09.47.47.68.47 1.11-.16.8-.47 1.11L9.3 16.97c-.31.31-.67.47-1.09.47s-.78-.16-1.09-.47L.45 10.28C.14 9.97-.01 9.6 0 9.18s.17-.8.49-1.11.68-.47 1.11-.47.8.16 1.11.47l5.51 5.55Z"
    />
  </svg>
);
export default CheckSvg;
