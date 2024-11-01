import * as React from "react"
import { JSX } from "react/jsx-runtime"

const ScheduleSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <path
      d="m13.49 14.43 1.33-1.33-3.88-3.88V3.75H9.06V10l4.43 4.43ZM10 20c-1.38 0-2.67-.26-3.89-.78s-2.27-1.24-3.19-2.15S1.29 15.1.77 13.88c-.52-1.21-.78-2.51-.78-3.89S.25 7.31.77 6.1s1.24-2.27 2.15-3.18S4.89 1.31 6.11.78C7.32.26 8.62 0 10 0s2.68.26 3.89.79c1.22.52 2.27 1.24 3.17 2.14.9.9 1.61 1.96 2.14 3.17.52 1.22.79 2.52.79 3.9s-.26 2.67-.78 3.89-1.23 2.27-2.14 3.19-1.96 1.63-3.18 2.15-2.52.78-3.9.78Z"
      data-name="Layer_1"
      fill={"#ffffff"}
    />
  </svg>
)

export default ScheduleSvg;