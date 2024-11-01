import { JSX } from "react/jsx-runtime"

const CloseSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="m12 14.6-8.9 8.9c-.3.3-.8.5-1.3.5s-.9-.2-1.3-.5-.5-.8-.5-1.3.2-.9.5-1.3L9.4 12 .5 3.1C.2 2.7 0 2.3 0 1.8S.2.8.5.5 1.3 0 1.8 0s.9.2 1.3.5L12 9.4 20.9.5c.3-.3.8-.5 1.3-.5s.9.2 1.3.5.5.8.5 1.3-.2.9-.5 1.3L14.6 12l8.9 8.9c.3.3.5.8.5 1.3s-.2.9-.5 1.3-.8.5-1.3.5-.9-.2-1.3-.5L12 14.6Z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)

export default CloseSvg
