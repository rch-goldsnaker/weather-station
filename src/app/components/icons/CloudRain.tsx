import { JSX, SVGProps } from "react";

export const CloudRain = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"    
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-cloud-rain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7M11 13v2m0 3v2m4-5v2m0 3v2" />
  </svg>
)
