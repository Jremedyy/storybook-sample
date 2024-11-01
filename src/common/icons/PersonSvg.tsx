import * as React from "react"
import { JSX } from "react/jsx-runtime";

const PersonSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <path
      d="M10 10c-1.39 0-2.57-.49-3.54-1.46S5 6.39 5 5s.49-2.57 1.46-3.54S8.61 0 10 0s2.57.49 3.54 1.46S15 3.61 15 5s-.49 2.57-1.46 3.54S11.39 10 10 10ZM0 20v-3.33c0-.53.14-1.04.43-1.51s.69-.87 1.2-1.2c1.27-.74 2.62-1.31 4.05-1.7s2.86-.59 4.32-.59 2.9.2 4.32.59 2.77.96 4.05 1.7c.51.3.91.69 1.2 1.18s.43 1 .43 1.53V20H0Z"
      data-name="Layer_2"
      fill="#FFFFFF"
    />
  </svg>
)
export default PersonSvg;
