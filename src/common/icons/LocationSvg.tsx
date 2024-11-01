import * as React from "react"
import { JSX } from "react/jsx-runtime"

const LocationSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.25 20" {...props}>
    <path
      d="M8.13 10c.52 0 .96-.18 1.32-.55.36-.37.55-.81.55-1.33s-.18-.96-.55-1.32-.81-.55-1.33-.55-.96.18-1.32.55-.55.81-.55 1.33.18.96.55 1.32c.37.36.81.55 1.33.55Zm-.01 10c-2.73-2.28-4.76-4.39-6.11-6.34C.66 11.71-.01 9.89-.01 8.21 0 5.88.77 3.93 2.32 2.36 3.86.79 5.79 0 8.11 0s4.25.79 5.81 2.36 2.33 3.52 2.33 5.85c0 1.68-.67 3.5-2.01 5.44S10.86 17.71 8.12 20Z"
      style={{
        fill: "#ffffff",
      }}
    />
  </svg>
)

export default LocationSvg;
