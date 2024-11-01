import * as React from "react";
import { JSX } from "react/jsx-runtime";
const SortSvg = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" {...props}>
    <path
      fill="#ffffff"
      d="M1.33 16c-.38 0-.69-.13-.95-.38-.26-.26-.38-.57-.38-.95s.13-.69.38-.95c.26-.26.57-.38.95-.38h5.33c.38 0 .69.13.95.38s.38.57.38.95-.13.69-.38.95c-.26.26-.57.38-.95.38H1.33Zm0-6.67c-.38 0-.69-.13-.95-.38C.12 8.69 0 8.38 0 8s.13-.69.38-.95c.26-.26.57-.38.95-.38h13.33c.38 0 .69.13.95.38.26.26.38.57.38.95s-.13.69-.38.95-.57.38-.95.38H1.33Zm0-6.66c-.38 0-.69-.13-.95-.38C.12 2.03 0 1.72 0 1.34S.13.64.38.38C.64.12.95 0 1.33 0h21.33c.38 0 .69.13.95.38s.38.57.38.95-.13.69-.38.95-.57.38-.95.38H1.33Z"
    />
  </svg>
);
export default SortSvg;
