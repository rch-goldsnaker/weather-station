import { JSX, SVGProps } from "react";

export const Temperature = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"    
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-temperature"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0v8.5M10 9h4" />
  </svg>
)
